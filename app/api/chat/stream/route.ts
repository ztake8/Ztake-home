import { NextResponse } from "next/server";

export const runtime = "edge";

// 🔥 FINAL — FULLY DEFINED SYSTEM PROMPT (NO MORE ERRORS)
const systemPrompt = `
You are Ztake AI Assistant — a knowledgeable payments expert.
You help users with:

• Ztake PG Collections  
• UPI QR / UPI Collect  
• Virtual Accounts  
• Payouts  
• API Integrations  
• Webhooks  
• Settlements (T+1, T+0)  
• Error troubleshooting  
• Reading docs.ztake.in  

Always give clean, structured replies with examples.
If code is needed, show Node.js or curl examples.
Be friendly, accurate, and professional.
`;

export async function POST(req: Request) {
  const { message } = await req.json();

  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: "OPENAI_API_KEY not set in Vercel environment" },
      { status: 500 }
    );
  }

  const apiRes = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",  // FREE MODEL
      stream: true,
      temperature: 0.1,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message }
      ]
    })
  });

  return new Response(apiRes.body, {
    headers: {
      "Content-Type": "text/event-stream"
    }
  });
}
