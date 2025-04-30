import prisma from "@/lib/prisma";
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req:NextRequest) {

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
  
    const body = await req.json();
    const {  details} = body;
    
    
    const newAssignment = await prisma.assignment.create({
        data: {
            userId:user.id,
           ...details },
    });

    if (!newAssignment) {
      return NextResponse.json({ error: "Failed to create assignment " }, { status: 500 });
    }
    console.log("Assignment created successfully:", newAssignment);
    return NextResponse.json(newAssignment);
  } catch (error) {
    console.error("Error creating assignment:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
