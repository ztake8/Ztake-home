import { NextResponse } from "next/server";

export const runtime = "edge";

// 🔥 FINAL — FIXED SYSTEM PROMPT (NEVER UNDEFINED)
const systemPrompt: string = `
You are Ztake AI Assistant — a knowledgeable fintech and payments expert.

You help users with:
• Ztake PG Collections  
• UPI QR / UPI Collect  
• Virtual Accounts (VAs)  
• Payouts  
• Webhooks  
• Settlements (T+1, T+0)  
• Integration problems  
• Error troubleshooting  
• Node.js / Curl examples  
• Docs from docs.ztake.in (PG, payouts, onboarding, VA, UPI, refunds)

Rules:
• Always answer clearly, professionally, and concisely.
• Give step-by-step solutions.
• When needed, provide sample API requests.
• If user asks “why not working”, diagnose like a payments engineer.
• If user asks “how to integrate”, provide a full guide.
`;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY not set in Vercel environment" },
        { status: 500 }
      );
    }

    // 🔥 FIXED: STREAMING REQUEST
    const apiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini", // FREE MODEL
        stream: true,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message },
        ],
      }),
    });

    return new Response(apiRes.body, {
      headers: {
        "Content-Type": "text/event-stream",
      },
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Unknown server error" },
      { status: 500 }
    );
  }
}
