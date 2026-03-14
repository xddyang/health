"use client"

import { useState } from "react"
import {
  ArrowLeft,
  Search,
  MessageSquare,
  Trash2,
  ChevronRight,
  MoreVertical,
  Clock,
  X,
} from "lucide-react"

interface ChatHistoryPageProps {
  onClose: () => void
  onSelectChat: (chatId: number) => void
}

interface ChatSession {
  id: number
  title: string
  lastMessage: string
  date: string
  messageCount: number
}

const mockChatHistory: ChatSession[] = [
  {
    id: 1,
    title: "脸上长痘痘咨询",
    lastMessage: "建议使用含水杨酸的护肤品，避免用手挤压...",
    date: "今天 14:30",
    messageCount: 8,
  },
  {
    id: 2,
    title: "皮肤干燥脱皮问题",
    lastMessage: "皮肤干燥可能与季节变化有关，建议加强保湿...",
    date: "昨天 10:15",
    messageCount: 12,
  },
  {
    id: 3,
    title: "过敏性皮炎咨询",
    lastMessage: "过敏性皮炎需要远离过敏原，可以使用温和的护肤品...",
    date: "3月10日",
    messageCount: 6,
  },
  {
    id: 4,
    title: "湿疹护理方法",
    lastMessage: "湿疹发作时要保持皮肤清洁干燥，避免搔抓...",
    date: "3月8日",
    messageCount: 15,
  },
  {
    id: 5,
    title: "防晒霜选择建议",
    lastMessage: "日常防晒建议选择SPF30、PA+++的防晒霜...",
    date: "3月5日",
    messageCount: 4,
  },
  {
    id: 6,
    title: "儿童皮肤问题",
    lastMessage: "儿童皮肤较敏感，建议使用专门的儿童护肤品...",
    date: "3月1日",
    messageCount: 10,
  },
]

export default function ChatHistoryPage({
  onClose,
  onSelectChat,
}: ChatHistoryPageProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [sessions, setSessions] = useState(mockChatHistory)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<number | null>(null)
  const [activeMenu, setActiveMenu] = useState<number | null>(null)

  const filteredSessions = sessions.filter(
    (session) =>
      session.title.includes(searchQuery) ||
      session.lastMessage.includes(searchQuery)
  )

  const handleDelete = (id: number) => {
    setSessions((prev) => prev.filter((s) => s.id !== id))
    setShowDeleteConfirm(null)
    setActiveMenu(null)
  }

  const handleClearAll = () => {
    setSessions([])
  }

  return (
    <div className="absolute inset-0 z-50 flex flex-col bg-background">
      {/* Header */}
      <div className="bg-card px-4 pb-4 pt-12 shadow-sm">
        <div className="flex items-center justify-between">
          <button
            onClick={onClose}
            className="rounded-full p-1 transition-colors hover:bg-muted"
            aria-label="返回"
          >
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </button>
          <h1 className="text-base font-bold text-foreground">历史对话</h1>
          <button
            onClick={handleClearAll}
            className="text-xs text-muted-foreground"
            disabled={sessions.length === 0}
          >
            清空
          </button>
        </div>

        {/* Search */}
        <div className="mt-4 flex items-center gap-2 rounded-xl bg-muted px-3 py-2.5">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
          <input
            type="text"
            placeholder="搜索对话记录"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery("")}>
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          )}
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {filteredSessions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <MessageSquare className="h-8 w-8 text-muted-foreground" />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              {searchQuery ? "没有找到相关对话" : "暂无历史对话"}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              开始新对话，与AI助手交流皮肤问题
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {filteredSessions.map((session) => (
              <div key={session.id} className="relative">
                <button
                  onClick={() => onSelectChat(session.id)}
                  className="flex w-full items-start gap-3 rounded-xl bg-card p-4 text-left shadow-sm transition-transform active:scale-[0.98]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="truncate text-sm font-bold text-foreground">
                        {session.title}
                      </h3>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setActiveMenu(
                            activeMenu === session.id ? null : session.id
                          )
                        }}
                        className="rounded-full p-1 hover:bg-muted"
                      >
                        <MoreVertical className="h-4 w-4 text-muted-foreground" />
                      </button>
                    </div>
                    <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">
                      {session.lastMessage}
                    </p>
                    <div className="mt-2 flex items-center gap-3 text-[11px] text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {session.date}
                      </span>
                      <span>{session.messageCount} 条消息</span>
                    </div>
                  </div>
                  <ChevronRight className="mt-2 h-4 w-4 shrink-0 text-muted-foreground" />
                </button>

                {/* Dropdown Menu */}
                {activeMenu === session.id && (
                  <div className="absolute right-4 top-12 z-10 rounded-xl bg-card p-1 shadow-lg">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setShowDeleteConfirm(session.id)
                        setActiveMenu(null)
                      }}
                      className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-destructive hover:bg-muted"
                    >
                      <Trash2 className="h-4 w-4" />
                      删除对话
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm !== null && (
        <div className="absolute inset-0 z-60 flex items-center justify-center bg-foreground/50 px-8">
          <div className="w-full max-w-sm rounded-2xl bg-card p-5">
            <h3 className="text-center text-base font-bold text-foreground">
              确认删除
            </h3>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              确定要删除这条对话记录吗？删除后将无法恢复。
            </p>
            <div className="mt-5 flex gap-3">
              <button
                onClick={() => setShowDeleteConfirm(null)}
                className="flex-1 rounded-xl bg-muted py-2.5 text-sm font-medium text-foreground"
              >
                取消
              </button>
              <button
                onClick={() => handleDelete(showDeleteConfirm)}
                className="flex-1 rounded-xl bg-destructive py-2.5 text-sm font-medium text-card"
              >
                删除
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
