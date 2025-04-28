import prisma from "@/lib/prisma";
import { NextResponse } from 'next/server';



export async function POST(req) {
  try {
    const body = await req.json();
    const { userId  , course} = body;
    

    const newCourse = await prisma.course.create({
        data: {
            userId,
           ...course },
    });

    

    return NextResponse.json(newCourse);
  } catch (error) {
    console.error(error.message);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
