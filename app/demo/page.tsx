"use client"

import { useMemo, useState } from "react"
import { Bot, ShieldCheck } from "lucide-react"
import { toast } from "sonner"
import { AppShell } from "@/components/app-sidebar"
import { MobileNav } from "@/components/mobile-nav"
import { AnalysisPanel } from "@/components/demo/analysis-panel"
import { ChatFilter, ChatList } from "@/components/demo/chat-list"
import { ConversationPanel } from "@/components/demo/conversation-panel"
import { ReplyComposer } from "@/components/demo/reply-composer"
import { SuggestedRepliesCarousel } from "@/components/demo/suggested-replies-carousel"
import { Badge } from "@/components/ui/badge"
import { demoChats } from "@/lib/demo-data"
import type { CustomerChat, ReplyOption } from "@/lib/types"

export default function DemoPage() {
  const [chats, setChats] = useState<CustomerChat[]>(demoChats)
  const [selectedId, setSelectedId] = useState(demoChats[0].id)
  const [selectedReplyId, setSelectedReplyId] = useState<string | null>(null)
  const [composer, setComposer] = useState("")
  const [activeReplyIndex, setActiveReplyIndex] = useState(0)
  const [filter, setFilter] = useState<ChatFilter>("all")
  const [search, setSearch] = useState("")

  const filteredChats = useMemo(() => {
    const query = search.trim().toLowerCase()
    return chats.filter((chat) => {
      const matchesFilter =
        filter === "all" ||
        (filter === "open" && chat.status !== "resolved") ||
        (filter === "high-risk" && chat.analysis.riskLevel === "high") ||
        (filter === "resolved" && chat.status === "resolved")
      const matchesSearch =
        !query ||
        [chat.customerName, chat.customerEmail, chat.lastMessage, chat.analysis.intent, chat.company ?? ""]
          .join(" ")
          .toLowerCase()
          .includes(query)
      return matchesFilter && matchesSearch
    })
  }, [chats, filter, search])

  const selectedChat = chats.find((chat) => chat.id === selectedId) ?? chats[0]

  function selectChat(chatId: string) {
    setSelectedId(chatId)
    setSelectedReplyId(null)
    setComposer("")
    setActiveReplyIndex(0)
  }

  function useReply(option: ReplyOption) {
    setSelectedReplyId(option.id)
    setComposer(option.reply)
  }

  async function copyReply() {
    if (!composer.trim()) {
      toast.error("Select or write a reply first.")
      return
    }

    try {
      await navigator.clipboard.writeText(composer)
      toast.success("Reply copied to clipboard.")
    } catch {
      toast.error("Clipboard access is unavailable in this browser.")
    }
  }

  function saveDraft() {
    toast.success("Draft saved in demo mode.")
  }

  function sendReply() {
    if (!composer.trim()) {
      toast.error("Select or write a reply first.")
      return
    }

    setChats((current) =>
      current.map((chat) =>
        chat.id === selectedId
          ? {
              ...chat,
              status: "pending",
              messages: [
                ...chat.messages,
                {
                  id: `agent-${Date.now()}`,
                  sender: "agent",
                  body: composer.trim(),
                  timestamp: "Just now"
                }
              ]
            }
          : chat
      )
    )
    setComposer("")
    setSelectedReplyId(null)
    toast.success("Reply sent in demo mode.")
  }

  function markResolved() {
    setChats((current) =>
      current.map((chat) => (chat.id === selectedId ? { ...chat, status: "resolved" } : chat))
    )
    toast.success("Ticket marked as resolved.")
  }

  function regenerateOptions() {
    setChats((current) =>
      current.map((chat) => {
        if (chat.id !== selectedId) return chat
        const rotated = [...chat.replyOptions.slice(1), chat.replyOptions[0]].map((option, index) => ({
          ...option,
          id: `${option.id}-v${Date.now()}-${index}`,
          predictedSatisfaction: Math.max(62, Math.min(97, option.predictedSatisfaction + (index === 0 ? 2 : -2)))
        }))
        return { ...chat, replyOptions: rotated }
      })
    )
    setSelectedReplyId(null)
    setActiveReplyIndex(0)
    toast.success("New reply options generated.")
  }

  return (
    <AppShell>
      <MobileNav />
      <div className="p-4 lg:p-8">
        <div className="mb-6 rounded-3xl border bg-white/90 p-5 shadow-soft backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <Badge className="gap-1"><ShieldCheck className="h-3.5 w-3.5" /> Demo mode</Badge>
                <span className="text-sm text-muted-foreground">No API key required</span>
              </div>
              <h1 className="text-2xl font-bold tracking-tight">Demo Workspace</h1>
              <p className="mt-1 max-w-3xl text-sm text-muted-foreground">
                Explore ReplyPilot with realistic mock customer conversations. No API key required.
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border bg-secondary/60 px-4 py-3 text-sm">
              <Bot className="h-4 w-4 text-primary" />
              Demo mode uses mock data. API integration can be added later.
            </div>
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-[360px_minmax(0,1fr)_360px]">
          <ChatList
            chats={filteredChats}
            selectedId={selectedId}
            filter={filter}
            search={search}
            onFilterChange={setFilter}
            onSearchChange={setSearch}
            onSelectChat={selectChat}
          />

          <div className="space-y-5">
            <ConversationPanel chat={selectedChat} />
            <SuggestedRepliesCarousel
              options={selectedChat.replyOptions}
              selectedReplyId={selectedReplyId}
              activeIndex={activeReplyIndex}
              onActiveIndexChange={setActiveReplyIndex}
              onUseReply={useReply}
              onRegenerate={regenerateOptions}
            />
            <ReplyComposer
              value={composer}
              onChange={setComposer}
              onCopy={copyReply}
              onSave={saveDraft}
              onResolve={markResolved}
              onSend={sendReply}
            />
          </div>

          <div className="space-y-5">
            <AnalysisPanel analysis={selectedChat.analysis} />
          </div>
        </div>
      </div>
    </AppShell>
  )
}
