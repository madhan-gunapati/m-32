import prisma from "@/lib/prisma";
import { NextResponse } from 'next/server';



export async function POST(req) {
  try {
    const body = await req.json();
    const { user_email  , course} = body;
    
    const user = await prisma.user.findUnique({  
        where: {
            email: user_email,
        },
        });
        
    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    const newCourse = await prisma.course.create({
        data: {
            userId:user.id,
           ...course },
    });

    if (!newCourse) {
      return NextResponse.json({ error: "Failed to create course" }, { status: 500 });
    }

    return NextResponse.json(newCourse);
  } catch (error) {
    console.error("Error creating course:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
