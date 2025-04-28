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

    // const newCourse = await prisma.course.create({
    //   data: {
    //     userId: userId,
    //     name: 'Sample Sunday',
    //     courseTitle: 'Sample Sunday',
    //     courseDescription: 'This is a sample course description.',
    //     description: 'Detailed description about the course.',
    //     instructor: 'Professor Name',
    //     subject: 'Art',
    //     term: 'Fall 2023',
    //     gradeLevel: 'HighSchool',
    //     learningObjectives: [
    //       'Understand key concepts and theories in art',
    //       'Develop critical thinking and analytical skills',
    //       'Apply theoretical knowledge to practical situations',
    //       'Communicate ideas effectively through writing and discussion',
    //     ],
    //     requiredMaterials: [
    //       {
    //         title: 'Main Textbook',
    //         author: 'Author Name',
    //         publisher: 'Publisher',
    //         year: '2022',
    //         required: true,
    //       },
    //       {
    //         title: 'Supplementary Reading',
    //         author: 'Author Name',
    //         publisher: 'Publisher',
    //         year: '2020',
    //         required: false,
    //       },
    //     ],
    //     gradingPolicy: {
    //       assignments: { description: 'Weekly assignments', percentage: 30 },
    //       midterm: { description: 'Mid-term examination', percentage: 25 },
    //       finalExam: { description: 'Final examination', percentage: 35 },
    //       participation: { description: 'Class participation and discussion', percentage: 10 },
    //     },
    //     policies: {
    //       attendance: 'Regular attendance is required.',
    //       lateWork: 'Late assignments will be accepted with penalty.',
    //       academicIntegrity: 'Academic dishonesty will result in failure.',
    //       accommodations: 'Accommodations for students with disabilities.',
    //     },
    //     weeklySchedule: [
    //       {
    //         week: 1,
    //         topic: 'Introduction to the Course',
    //         readings: 'Chapters 1-2',
    //         assignments: 'Introductory Assignment',
    //       },
    //       {
    //         week: 2,
    //         topic: 'Foundational Concepts',
    //         readings: 'Chapters 3-4',
    //         assignments: 'Reading Response',
    //       },
    //     ],
    //   },
    // });

    return NextResponse.json(newCourse);
  } catch (error) {
    console.error(error.message);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
