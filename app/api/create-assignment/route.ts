import prisma from "@/lib/prisma";
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';


export async function POST(req:NextRequest) {
  try {
    const body = await req.json();
    const { user_email  , details} = body;
    console.log("Received data:", details);
    const user = await prisma.user.findUnique({  
        where: {
            email: user_email,
        },
        });
        
    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    const newCourse = await prisma.assignment.create({
        data: {
            userId:user.id,
           ...details },
    });

    if (!newCourse) {
      return NextResponse.json({ error: "Failed to create assignment " }, { status: 500 });
    }

    return NextResponse.json(newCourse);
  } catch (error) {
    console.error("Error creating assignment:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
