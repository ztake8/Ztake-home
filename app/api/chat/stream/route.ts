import { NextResponse } from "next/server";

export const runtime = "edge";

// 📌 SYSTEM PROMPT (Ztake Payments Expert)
const systemPrompt = `
You are Ztake AI Assistant — a payments, UPI, and API integration expert.
You help users with:
• PG Collections (UPI, QR, Collect)
• Virtual Accounts (Auto Reconciliation)
• Payouts (IMPS/NEFT/UPI)
• API keys, webhook setup, settlements
• Integration best practices
• Troubleshooting errors
• Explaining docs.ztake.in content

Always reply with clean formatting, examples, and code when useful.
`;

export async function POST(req: Request) {
  const { message } = await req.json();

  if (!process.env.GROQ_API_KEY) {
    return NextResponse.json(
      { error: "GROQ_API_KEY not set in Vercel environment" },
      { status: 500 }
    );
  }

  // Call GROQ instead of OpenAI (free)
  const groqRes = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama3-70b-8192", // FREE powerful model
        stream: true,
        temperature: 0.3,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message },
        ],
      }),
    }
  );

  return new Response(groqRes.body, {
    headers: {
      "Content-Type": "text/event-stream",
    },
  });
}
