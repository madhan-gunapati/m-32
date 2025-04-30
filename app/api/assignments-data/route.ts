// app/api/courses/route.ts

import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
    
  const session = await getServerSession(authOptions);
    
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
try{
  const body = await req.json();
  
  const {id} = body
  

    const assignment = await prisma.assignment.findFirst({
        where: {
          id,
        },
      });
      

      if (!assignment) {
        return NextResponse.json({ error: "Assignment not found" }, { status: 404 });
      }

    return NextResponse.json(assignment, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
