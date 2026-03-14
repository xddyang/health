"use client"

import { useState, useEffect } from "react"
import {
  ArrowLeft,
  Search,
  X,
  Clock,
  TrendingUp,
  Trash2,
} from "lucide-react"

interface SearchPageProps {
  onClose: () => void
  onSearch: (query: string) => void
  initialQuery?: string
}

const hotSearches = [
  "湿疹怎么治疗",
  "过敏性皮炎",
  "痤疮护理",
  "银屑病",
  "荨麻疹止痒",
  "敏感肌护肤",
  "儿童皮肤病",
  "防晒霜推荐",
]

const defaultHistory = [
  "脸上长痘痘",
  "皮肤干燥脱皮",
  "被蚊虫叮咬怎么办",
]

export default function SearchPage({ onClose, onSearch, initialQuery = "" }: SearchPageProps) {
  const [query, setQuery] = useState(initialQuery)
  const [history, setHistory] = useState<string[]>(defaultHistory)
  const [isFocused, setIsFocused] = useState(true)

  useEffect(() => {
    // Auto focus input on mount
    const input = document.getElementById("search-input")
    if (input) input.focus()
  }, [])

  const handleSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) return
    // Add to history if not already present
    setHistory((prev) => {
      const filtered = prev.filter((h) => h !== searchQuery)
      return [searchQuery, ...filtered].slice(0, 10)
    })
    onSearch(searchQuery)
  }

  const handleClearHistory = () => {
    setHistory([])
  }

  const handleRemoveHistoryItem = (item: string) => {
    setHistory((prev) => prev.filter((h) => h !== item))
  }

  return (
    <div className="absolute inset-0 z-50 flex flex-col bg-background">
      {/* Header */}
      <div className="flex items-center gap-3 bg-card px-4 pb-4 pt-12">
        <button
          onClick={onClose}
          className="rounded-full p-1 transition-colors hover:bg-muted"
          aria-label="返回"
        >
          <ArrowLeft className="h-5 w-5 text-foreground" />
        </button>
        <div
          className={`flex flex-1 items-center gap-2 rounded-xl px-3 py-2.5 transition-colors ${
            isFocused ? "bg-muted ring-2 ring-primary/20" : "bg-muted"
          }`}
        >
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
          <input
            id="search-input"
            type="text"
            placeholder="搜索皮肤问题、症状或疾病"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch(query)
              }
            }}
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="rounded-full p-0.5 transition-colors hover:bg-foreground/10"
            >
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          )}
        </div>
        <button
          onClick={() => handleSearch(query)}
          className="text-sm font-medium text-primary"
        >
          搜索
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4">
        {/* Search History */}
        {history.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <h3 className="flex items-center gap-2 text-sm font-bold text-foreground">
                <Clock className="h-4 w-4 text-muted-foreground" />
                搜索历史
              </h3>
              <button
                onClick={handleClearHistory}
                className="flex items-center gap-1 text-xs text-muted-foreground"
              >
                <Trash2 className="h-3 w-3" />
                清空
              </button>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {history.map((item) => (
                <div
                  key={item}
                  className="group flex items-center gap-1 rounded-full bg-card px-3 py-1.5 shadow-sm"
                >
                  <button
                    onClick={() => handleSearch(item)}
                    className="text-xs text-foreground"
                  >
                    {item}
                  </button>
                  <button
                    onClick={() => handleRemoveHistoryItem(item)}
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <X className="h-3 w-3 text-muted-foreground" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Hot Searches */}
        <div>
          <h3 className="flex items-center gap-2 text-sm font-bold text-foreground">
            <TrendingUp className="h-4 w-4 text-destructive" />
            热门搜索
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {hotSearches.map((item, index) => (
              <button
                key={item}
                onClick={() => handleSearch(item)}
                className="flex items-center gap-1.5 rounded-full bg-card px-3 py-1.5 shadow-sm transition-colors hover:bg-muted"
              >
                <span
                  className={`flex h-4 w-4 items-center justify-center rounded text-[10px] font-bold ${
                    index < 3
                      ? "bg-destructive text-card"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {index + 1}
                </span>
                <span className="text-xs text-foreground">{item}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Quick Categories */}
        <div className="mt-6">
          <h3 className="flex items-center gap-2 text-sm font-bold text-foreground">
            <div className="h-4 w-1 rounded-full bg-primary" />
            常见分类
          </h3>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {[
              { label: "常见皮肤病", desc: "湿疹、皮炎、荨麻疹等" },
              { label: "痤疮粉刺", desc: "青春痘、黑头、闭口等" },
              { label: "色素问题", desc: "雀斑、黄褐斑、色沉等" },
              { label: "皮肤感染", desc: "真菌、细菌、病毒感染" },
              { label: "过敏反应", desc: "接触性皮炎、药疹等" },
              { label: "皮肤护理", desc: "保湿、防晒、抗衰老" },
            ].map((cat) => (
              <button
                key={cat.label}
                onClick={() => handleSearch(cat.label)}
                className="rounded-xl bg-card p-3 text-left shadow-sm transition-colors hover:bg-muted"
              >
                <span className="text-sm font-medium text-foreground">
                  {cat.label}
                </span>
                <p className="mt-0.5 text-[11px] text-muted-foreground">
                  {cat.desc}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
