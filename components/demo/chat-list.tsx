"use client"

import { AlertTriangle, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { CustomerChat } from "@/lib/types"
import { cn } from "@/lib/utils"

export type ChatFilter = "all" | "open" | "high-risk" | "resolved"

interface ChatListProps {
  chats: CustomerChat[]
  selectedId: string
  filter: ChatFilter
  search: string
  onFilterChange: (filter: ChatFilter) => void
  onSearchChange: (search: string) => void
  onSelectChat: (chatId: string) => void
}

const filters: { id: ChatFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "open", label: "Open" },
  { id: "high-risk", label: "High risk" },
  { id: "resolved", label: "Resolved" }
]

export function ChatList({ chats, selectedId, filter, search, onFilterChange, onSearchChange, onSelectChat }: ChatListProps) {
  return (
    <section className="rounded-2xl border bg-white shadow-sm">
      <div className="border-b p-4">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h2 className="font-semibold">Customer chats</h2>
            <p className="text-xs text-muted-foreground">{chats.length} matching conversations</p>
          </div>
        </div>
        <label className="relative block">
          <span className="sr-only">Search chats</span>
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input value={search} onChange={(event) => onSearchChange(event.target.value)} placeholder="Search customers, intent, message..." className="pl-9" />
        </label>
        <div className="mt-3 flex flex-wrap gap-2">
          {filters.map((item) => (
            <Button key={item.id} type="button" size="sm" variant={filter === item.id ? "default" : "outline"} onClick={() => onFilterChange(item.id)}>
              {item.label}
            </Button>
          ))}
        </div>
      </div>

      {chats.length === 0 ? (
        <div className="p-8 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <h3 className="font-semibold">No matching chats</h3>
          <p className="mt-1 text-sm text-muted-foreground">Try a different search or filter to bring conversations back.</p>
        </div>
      ) : (
        <ScrollArea className="h-[620px]">
          <div className="space-y-2 p-3">
            {chats.map((chat) => {
              const selected = chat.id === selectedId
              return (
                <button
                  key={chat.id}
                  type="button"
                  onClick={() => onSelectChat(chat.id)}
                  className={cn(
                    "w-full rounded-2xl border p-4 text-left transition hover:border-primary/40 hover:bg-secondary/40",
                    selected && "border-primary bg-accent/50 shadow-sm",
                    chat.analysis.riskLevel === "high" && !selected && "border-red-200 bg-red-50/40"
                  )}
                >
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <div>
                      <div className="font-semibold">{chat.customerName}</div>
                      <div className="text-xs text-muted-foreground">{chat.customerEmail}</div>
                    </div>
                    <Badge variant={chat.status === "resolved" ? "secondary" : "outline"} className="capitalize">
                      {chat.status}
                    </Badge>
                  </div>
                  <p className="line-clamp-2 text-sm text-muted-foreground">{chat.lastMessage}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <Badge variant="outline">{chat.analysis.intent}</Badge>
                    <Badge
                      variant="outline"
                      className={cn(
                        "capitalize",
                        chat.analysis.riskLevel === "high" && "border-red-200 bg-red-50 text-red-700",
                        chat.analysis.riskLevel === "medium" && "border-amber-200 bg-amber-50 text-amber-700",
                        chat.analysis.riskLevel === "low" && "border-emerald-200 bg-emerald-50 text-emerald-700"
                      )}
                    >
                      {chat.analysis.riskLevel === "high" && <AlertTriangle className="mr-1 h-3 w-3" />}
                      {chat.analysis.riskLevel} risk
                    </Badge>
                  </div>
                </button>
              )
            })}
          </div>
        </ScrollArea>
      )}
    </section>
  )
}
