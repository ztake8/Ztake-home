import { NextResponse } from "next/server";

export const runtime = "edge"; // REQUIRED for streaming

// ✅ FIXED — SYSTEM PROMPT DEFINED BEFORE USE
const systemPrompt = `
You are Ztake AI Assistant — a knowledgeable payments expert.
You help users with:

• Ztake PG Collections  
• ScaleUPI / UPI QR / UPI Collect  
• Virtual Accounts  
• Payouts  
• Webhooks  
• Settlements  
• Refunds  
• Error troubleshooting  
• API onboarding  
• Documentation from docs.ztake.in  

Guidelines:
- Always answer with clean formatting.
- Include examples (curl, Node.js, Javascript).
- Maintain a professional but friendly tone.
- Keep answers accurate and developer-focused.
`;

// =============================
// 🔥 STREAMING CHAT COMPLETION
// =============================
export async function POST(req: Request) {
  const { message } = await req.json();

  // 🔥 ENV CHECK — If key missing, show readable error
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: "OPENAI_API_KEY is NOT set in Vercel → Settings → Environment Variables" },
      { status: 500 }
    );
  }

  // 🔥 Create OpenAI stream request
  const apiRes = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini", // FREE MODEL, 100% works
      stream: true,
      temperature: 0.2,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message }
      ]
    })
  });

  // 🔥 Stream output directly to client
  return new Response(apiRes.body, {
    headers: {
      "Content-Type": "text/event-stream"
    }
  });
}
