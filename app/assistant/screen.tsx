"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { ArrowUp, Bot, User, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

export default function AssistantScreen() {
  const params = useSearchParams()
  const topic = params.get("topic") || "general"

  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "👋 Welcome to Ztake AI Assistant! I can teach payments, integrations, APIs, videos, blogs and more.",
    },
  ])

  const GUIDES = [
    {
      id: "api-key-setup",
      title: "API Key Setup",
      summary: "How to create and securely store API keys for Ztake.",
      steps: [
        "Sign in to the Ztake merchant dashboard.",
        "Navigate to Developers → API Keys.",
        "Create test or live keys.",
        "Store keys server-side only.",
        "Rotate keys frequently."
      ],
      sample: `// Example
fetch("https://api.ztake.in/v1/payments",{ method:"POST"})`
    }
  ]

  useEffect(() => {
    if (topic === "integration-guides") {
      pushAssistant("Here are integration guides. Ask: API key setup, webhooks, checkout integration.")
    } else if (topic === "video-tutorials") {
      pushAssistant("Video tutorials available. Ask: Payments 101, Webhooks explained.")
    } else if (topic === "blog") {
      pushAssistant("Blog insights ready. Ask: UPI trends, settlements, security basics.")
    }
  }, [topic])

  function pushAssistant(text){
    setMessages(m=>[...m,{role:"assistant",content:text}])
  }

  function pushUser(text){
    setMessages(m=>[...m,{role:"user",content:text}])
  }

  function copyText(text){
    navigator.clipboard.writeText(text)
  }

  function listGuides(){
    pushAssistant("Available Guides:\n• API Key Setup")
  }

  function showGuide(id){
    const g = GUIDES.find(x=>x.id===id)
    if(!g) return pushAssistant("Guide not found.")
    let out = `**${g.title}**\n${g.summary}\n\nSteps:\n${g.steps.map((s,i)=>i+1+". "+s).join("\n")}\n\nSample Code:\n${g.sample}`
    pushAssistant(out)
  }

  async function sendMessage(){
    if(!input.trim()) return
    const q = input.toLowerCase()
    pushUser(input)
    setInput("")

    if(q.includes("api")){
      showGuide("api-key-setup")
      return
    }
    if(q.includes("guide")){
      listGuides()
      return
    }

    pushAssistant("I can help with anything in payments: guides, API help, settlement explanations, QR onboarding.")
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0D0D0F] text-white">
      <header className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center">
          <Bot className="w-6 h-6 text-primary mr-3"/>
          <h1 className="text-xl font-semibold">Ztake AI Assistant</h1>
        </div>
        <div className="flex space-x-3">
          <button onClick={listGuides} className="px-3 py-1 border border-white/10 rounded">Guides</button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg,i)=>(
          <div key={i} className={cn("flex max-w-3xl", msg.role==="user"?"ml-auto":"mr-auto")}>
            <div className={cn("rounded-2xl px-4 py-3 whitespace-pre-wrap",
              msg.role==="assistant"?"bg-white/10":"bg-primary text-black")}>
              {msg.content}
              {msg.content.includes("Sample Code") && (
                <button onClick={()=>copyText(msg.content)} className="mt-2 flex items-center text-xs opacity-60">
                  <Copy className="w-3 h-3 mr-1"/> Copy
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 p-4">
        <div className="max-w-4xl mx-auto flex space-x-3">
          <input 
            className="flex-1 bg-white/5 border border-white/10 rounded px-4 py-3"
            value={input}
            onChange={e=>setInput(e.target.value)}
            onKeyDown={e=>e.key==="Enter"&&sendMessage()}
            placeholder="Ask anything about integrations, APIs, docs..."
          />
          <button onClick={sendMessage} className="bg-primary text-black rounded px-4 py-3">
            <ArrowUp className="w-4 h-4"/>
          </button>
        </div>
      </div>
    </div>
  )
}
