import prisma from "@/lib/prisma";
// app/api/submissions/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
  try {
    const body = await req.json();
    //changing the asignment id as the created assignments are not fetched as of now
    if(body.assignmentId === undefined || body.assignmentId === null || typeof(body.assignmentId)!== "string"){
        body.assignmentId = '6810fee6537eb627874883d9' 
    }
    const assignment = await prisma.assignment.findUnique({
      where: {
        id: body.assignmentId,
      }
    });
    if (!assignment) {
      return NextResponse.json({ success: false, error: "Assignment not found" });
    }
    // Check if the assignment title matches the provided title

    const submission = await prisma.submission.create({
      data: {
        assignmentId: body.assignmentId,
        assignmentTitle: assignment.assignmentTitle,
        
        
        
        status: body.status,
        content: body.content,

        // Optional nested data
        // aiCheckerResults: body.aiCheckerResults
        //   ? {
        //       create: {
        //         score: body.aiCheckerResults.score,
        //         confidence: body.aiCheckerResults.confidence,
        //         details: {
        //           create: body.aiCheckerResults.details.map((detail: any) => ({
        //             section: detail.section,
        //             aiProbability: detail.aiProbability,
        //             humanProbability: detail.humanProbability,
        //           })),
        //         },
        //       },
        //     }
        //   : undefined,

        plagiarismResults: body.plagiarismResults
          ? {
              create: {
                score: body.plagiarismResults.score,
                matches: {
                  create: body.plagiarismResults.matches.map((match: any) => ({
                    test: match.test,
                    source: match.source,
                    similarity: match.similarity,
                  })),
                },
              },
            }
          : undefined,

        inlineComments: body.inlineComments
          ? {
              create: body.inlineComments.map((comment: any) => ({
                startIndex: comment.startIndex,
                endIndex: comment.endIndex,
                text: comment.text,
                color: comment.color,
                timeStamp: new Date(comment.timeStamp),
                author: {
                  connect: {
                    id: comment.authorId,
                  },
                },
              })),
            }
          : undefined,

        overallFeedback: body.overallFeedback
          ? {
              create: {
                strengths: body.overallFeedback.strengths,
                improvements: body.overallFeedback.improvements,
                actionItems: body.overallFeedback.actionItems,
              },
            }
          : undefined,

        subscores: body.subscores
          ? {
              create: body.subscores.map((sub: any) => ({
                name: sub.name,
                score: sub.score,
                maxScore: sub.maxScore,
                rationale: sub.rationale,
              })),
            }
          : undefined,
      },
    });

    return NextResponse.json({ success: true, submission });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
