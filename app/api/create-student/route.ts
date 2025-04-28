import prisma from "@/lib/prisma";
import { NextResponse } from 'next/server';



export async function POST(req) {
  try {
    const body = await req.json();
    const { user_email  , details} = body;
    
    const user = await prisma.user.findUnique({  
        where: {
            email: user_email,
        },
        });
        
    if (!user) {
        return NextResponse.json({ error: "Instructor not found" }, { status: 404 });
    }
    const newCourse = await prisma.student.create({
        data: {
            userId:user.id,
           ...details },
    });

    if (!newCourse) {
      return NextResponse.json({ error: "Failed to create student" }, { status: 500 });
    }

    return NextResponse.json(newCourse);
  } catch (error) {
    console.error("Error creating student:", error.message);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
