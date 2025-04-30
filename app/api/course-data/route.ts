import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import prisma from "@/lib/prisma";

export async function POST(req:NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  
  

  try {
    const body = await req.json();
    
  const {courseId} = body;
  
  if(!courseId){
    return NextResponse.json({ error: "Course not found" }, { status: 404 });
  }
    const course = await prisma.course.findUnique({
      where: { id: courseId },
      include: {
        assignment: true,
        student: true,
      },
    });
    

    if (!course) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    return NextResponse.json(course);
  } catch (error) {
    console.error("Error fetching course:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
