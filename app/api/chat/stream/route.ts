import { NextResponse } from "next/server";

export const runtime = "edge";

const systemPrompt = `
You are Ztake AI Assistant — a payments expert for UPI, PG, payouts and API integrations.
Give clean structured answers with examples.
`;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const userMessage = body.message;

    // Validate
    if (!userMessage || typeof userMessage !== "string") {
      return NextResponse.json(
        { error: "Missing 'message' string in request body" },
        { status: 400 }
      );
    }

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { error: "GROQ_API_KEY missing in Vercel environment" },
        { status: 500 }
      );
    }

    // Send to Groq
    const groqRes = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama3-70b",
          stream: true,
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userMessage }
          ],
        }),
      }
    );

    if (!groqRes.ok) {
      const errorText = await groqRes.text();
      return NextResponse.json(
        { error: `Groq request failed: ${errorText}` },
        { status: 500 }
      );
    }

    return new Response(groqRes.body, {
      headers: {
        "Content-Type": "text/event-stream",
      },
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Unknown error" },
      { status: 500 }
    );
  }
}
