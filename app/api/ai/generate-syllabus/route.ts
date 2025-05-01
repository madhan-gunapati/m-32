// app/api/generate-syllabus/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { prompt, additionalInfo } = await req.json();

  const generation_prompt = `
Respond ONLY with valid JSON (no markdown or explanation). Structure:
{
  "learningObjectives": [...],
  "requiredMaterials": [ { title, author, publisher, year, required }...],
  "gradingPolicy": {assignments: { percentage: 30, description: "Weekly assignments" } ...},
  "weeklySchedule": [{week, topic, readings,assignments}],
  "policies": {...}
}

${prompt} ${additionalInfo?`additional info: ${additionalInfo}`:''}
`;
// console.log(generation_prompt)
  try {
    const geminiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: generation_prompt }],
          },
        ],
      }),
    });

    const geminiData = await geminiRes.json();
    
    const text = geminiData.candidates?.[0]?.content?.parts?.[0]?.text || '';

    let structuredOutput;
    try {
      structuredOutput = JSON.parse(text);
    } catch {
      const cleaned = text.trim().replace(/^```json|```$/g, '').trim();
      structuredOutput = JSON.parse(cleaned);
    }

    return NextResponse.json({ syllabus: structuredOutput });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to generate or parse syllabus', details: error }, { status: 500 });
  }
}
