import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from "../auth/[...nextauth]/route";


export async function POST(req:NextRequest) {
  
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }


    const body = await req.json();
    const {  details} = body;
    
    
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
