// app/api/courses/route.ts

import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import prisma from "@/lib/prisma";

export async function GET() {
  console.log("Fetching courses");
  const session = await getServerSession(authOptions);
    
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Find the authenticated user
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: { id: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const courses = await prisma.course.findMany({
      where: { userId: user.id },
      select: {
        id: true,
        name: true,
        description: true,
        subject: true,
        student: { select: { id: true } },
        assignment: { select: { id: true } },
      },
    });

    const formatted = courses.map(course => ({
      id: course.id,
      name: course.name,
      description: course.description,
      subject: course.subject,
      students: course.student.length,
      assignments: course.assignment.length,
    }));

    return NextResponse.json(formatted);
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
