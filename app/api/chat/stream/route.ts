const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
  const systemPrompt = `
You are Ztake AI Assistant — a knowledgeable payment gateway AI.
You answer questions about:
- Ztake Payments API
- PG Collections
- UPI Collect
- Payouts
- Settlements (T+1, T+0)
- Static QR
- API keys
- Webhooks
- Virtual Accounts
- Integration guides from docs.ztake.in

Always reply clearly, with examples when helpful.
`;

  method: "POST",
  headers: {
    "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model: "gpt-4o-mini", // FREE MODEL
    temperature: 0.1,
    stream: true,
    max_tokens: 1500,
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: question }
    ]
  })
})
