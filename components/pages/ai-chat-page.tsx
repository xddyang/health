"use client"

import { useState, useRef, useEffect } from "react"
import { Send, Bot, User, Sparkles, Stethoscope, PlusCircle, History } from "lucide-react"
import ChatHistoryPage from "./chat-history-page"

interface Message {
  id: number
  role: "user" | "ai"
  content: string
  time: string
}

const suggestedQuestions = [
  "脸上长痘痘怎么处理？",
  "皮肤干燥脱皮是什么原因？",
  "被蚊虫叮咬红肿怎么办？",
  "如何判断是否为过敏性皮炎？",
]

const initialMessages: Message[] = [
  {
    id: 1,
    role: "ai",
    content:
      "您好！我是肤康AI助手，一位专业的皮肤科智能问诊助手。我可以帮您初步分析皮肤问题，提供护理建议。请描述您的皮肤状况，或者拍照上传以获得更准确的分析。",
    time: "09:30",
  },
]

export default function AiChatPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [inputValue, setInputValue] = useState("")
  const [showHistory, setShowHistory] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = () => {
    if (!inputValue.trim()) return

    const userMsg: Message = {
      id: Date.now(),
      role: "user",
      content: inputValue,
      time: new Date().toLocaleTimeString("zh-CN", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    }
    setMessages((prev) => [...prev, userMsg])
    setInputValue("")

    // Simulate AI response
    setTimeout(() => {
      const aiMsg: Message = {
        id: Date.now() + 1,
        role: "ai",
        content: getAiResponse(inputValue),
        time: new Date().toLocaleTimeString("zh-CN", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      }
      setMessages((prev) => [...prev, aiMsg])
    }, 1000)
  }

  const handleQuickQuestion = (question: string) => {
    setInputValue(question)
  }

  const handleSelectChat = (chatId: number) => {
    // Load chat history based on chatId
    const mockHistoryMessages: Message[] = [
      {
        id: 1,
        role: "ai",
        content: "您好！我是肤康AI助手。请问有什么可以帮助您的？",
        time: "10:00",
      },
      {
        id: 2,
        role: "user",
        content: "我脸上最近长了一些痘痘，应该怎么处理？",
        time: "10:01",
      },
      {
        id: 3,
        role: "ai",
        content: "根据您的描述，这可能是痤疮。建议：\n1. 保持面部清洁，使用温和洁面产品\n2. 避免用手挤压\n3. 选择含水杨酸或苯甲酰过氧化物的护肤品\n4. 如果反复发作，建议到皮肤科就诊",
        time: "10:01",
      },
    ]
    setMessages(mockHistoryMessages)
    setShowHistory(false)
  }

  return (
    <div className="flex h-full flex-col bg-background">
      {/* History Page */}
      {showHistory && (
        <ChatHistoryPage
          onClose={() => setShowHistory(false)}
          onSelectChat={handleSelectChat}
        />
      )}

      {/* Header */}
      <div className="bg-card px-5 pb-4 pt-12 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Stethoscope className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-base font-bold text-foreground">AI智能问诊</h1>
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-[11px] text-muted-foreground">
                  在线中
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowHistory(true)}
              className="rounded-full bg-muted p-2 transition-colors hover:bg-accent"
              aria-label="历史记录"
            >
              <History className="h-5 w-5 text-muted-foreground" />
            </button>
            <button
              onClick={() => {
                setMessages(initialMessages)
              }}
              className="rounded-full bg-muted p-2 transition-colors hover:bg-accent"
              aria-label="新对话"
            >
              <PlusCircle className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-2.5 ${
              msg.role === "user" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                msg.role === "ai"
                  ? "bg-primary/10"
                  : "bg-muted"
              }`}
            >
              {msg.role === "ai" ? (
                <Bot className="h-4 w-4 text-primary" />
              ) : (
                <User className="h-4 w-4 text-muted-foreground" />
              )}
            </div>
            <div
              className={`max-w-[75%] rounded-2xl px-4 py-2.5 ${
                msg.role === "ai"
                  ? "rounded-tl-sm bg-card shadow-sm"
                  : "rounded-tr-sm bg-primary text-primary-foreground"
              }`}
            >
              <p className="text-sm leading-relaxed">{msg.content}</p>
              <span
                className={`mt-1 block text-right text-[10px] ${
                  msg.role === "ai"
                    ? "text-muted-foreground"
                    : "text-primary-foreground/70"
                }`}
              >
                {msg.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Suggestions */}
      {messages.length <= 2 && (
        <div className="border-t border-border bg-card/50 px-4 py-3">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            猜你想问
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {suggestedQuestions.map((q) => (
              <button
                key={q}
                onClick={() => handleQuickQuestion(q)}
                className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-foreground transition-colors hover:bg-muted"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="border-t border-border bg-card px-4 py-3">
        <div className="flex items-end gap-2">
          <div className="flex-1 rounded-2xl bg-muted px-4 py-2.5">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  handleSend()
                }
              }}
              placeholder="描述您的皮肤问题..."
              rows={1}
              className="w-full resize-none bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
          </div>
          <button
            onClick={handleSend}
            disabled={!inputValue.trim()}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all disabled:opacity-40"
            aria-label="发送"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

function getAiResponse(input: string): string {
  const lower = input.toLowerCase()
  if (lower.includes("痘") || lower.includes("痤疮")) {
    return "根据您的描述，这可能是痤疮（青春痘）。建议：\n1. 保持面部清洁，使用温和洁面产品\n2. 避免用手挤压\n3. 选择含水杨酸或苯甲酰过氧化物的护肤品\n4. 如果反复发作，建议到皮肤科就诊\n\n需要更精确的判断，建议您使用拍照功能上传图片。"
  }
  if (lower.includes("干燥") || lower.includes("脱皮")) {
    return "皮肤干燥脱皮可能与以下原因有关：\n1. 季节变化导致空气干燥\n2. 皮肤屏障受损\n3. 过度清洁\n4. 缺乏保湿\n\n建议使用温和保湿霜，避免热水洗脸，如持续加重请及时就医。"
  }
  if (lower.includes("蚊虫") || lower.includes("叮咬")) {
    return "蚊虫叮咬后的处理建议：\n1. 用清水和肥皂清洗叮咬处\n2. 可外涂炉甘石洗剂止痒\n3. ���免搔抓以防感染\n4. 如出现大面积红肿或发烧，请及时就医\n\n您可以拍照让我看看具体情况。"
  }
  if (lower.includes("过敏") || lower.includes("皮炎")) {
    return "过敏性皮炎的常见表现：\n1. 皮肤红斑、丘疹\n2. 明显瘙痒\n3. 可能伴有脱屑\n4. 接触某些物质后加重\n\n建议远离过敏原，使用温和护肤品，必要时就医使用抗组胺药物。您可以使用皮肤自测功能进行初步评估。"
  }
  return "感谢您的描述。为了给您更准确的建议，建议您：\n1. 使用拍照功能上传皮肤图片\n2. 详细描述症状持续时间\n3. 说明是否有用药史\n\n这样我可以为您提供更专业的参考意见。如果症状严重，建议尽快到皮肤科就诊。"
}
