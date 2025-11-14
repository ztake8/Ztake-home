"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { ArrowUp, Bot, User } from "lucide-react"
import { cn } from "@/lib/utils"

export default function AssistantScreen() {
  const params = useSearchParams()
  const topic = params.get("topic") || "general"

  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([
    { role: "assistant", content: "👋 Welcome to Ztake AI Assistant — your offline payments guide. Click Guides/Videos/Blogs or ask a question." }
  ])

  function pushAssistant(text){ setMessages(m=>[...m,{role:'assistant',content:text}]) }
  function pushUser(text){ setMessages(m=>[...m,{role:'user',content:text}]) }

  async function sendMessage(){
    if(!input.trim()) return;
    const q = input.trim();
    pushUser(q); setInput('')

    try{
      const resp = await fetch('/api/knowledge?q=' + encodeURIComponent(q))
      const data = await resp.json()
      if(data.items && data.items.length){
        const top = data.items[0]
        pushAssistant('Found document: ' + top.title + "\n\n" + (top.text||'').slice(0,12000) + "\n\nSource: " + (top.source||''))
        fetch('/api/log', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ question: q, answer: top.title, source: top.source }) })
        return
      }
    }catch(e){
      console.error(e)
    }

    if(q.toLowerCase().includes('api')){
      pushAssistant('Check the API Key Setup guide. Try: "Show guides" or "API key setup"')
      return
    }

    pushAssistant('I could not find a matching document. Try: "Show guides" or upload relevant PDFs via admin.')
  }

  function showGuides(){
    pushAssistant('Available Guides:\n• API Key Setup\n• Webhook Setup\n• Checkout Integration')
  }

  function handleKey(e){ if(e.key==='Enter') sendMessage() }

  return (
    <div className="min-h-screen flex flex-col bg-[#0D0D0F] text-white">
      <header className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center">
          <Bot className="w-6 h-6 text-primary mr-3"/>
          <h1 className="text-xl font-semibold">Ztake AI Assistant (Offline)</h1>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={showGuides} className="px-3 py-1 border border-white/10 rounded">Guides</button>
          <button onClick={()=>pushAssistant('Upload via dashboard required')} className="px-3 py-1 border border-white/10 rounded">Upload PDF</button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((m,i)=>(
          <div key={i} className={cn('flex items-start max-w-3xl', m.role==='user'?'ml-auto':'mr-auto')}>
            <div className={cn('rounded-2xl px-4 py-3 whitespace-pre-wrap', m.role==='assistant'?'bg-white/10':'bg-primary text-black')}>
              {m.content}
            </div>
          </div>
        ))}
      </main>

      <footer className="border-t border-white/10 p-4">
        <div className="max-w-4xl mx-auto flex items-center space-x-3">
          <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={handleKey} className="flex-1 bg-white/5 border border-white/10 rounded px-4 py-3" placeholder="Ask about integrations..." />
          <button onClick={sendMessage} className="px-4 py-3 bg-primary text-black rounded"><ArrowUp className="w-4 h-4"/></button>
        </div>
      </footer>
    </div>
  )
}
