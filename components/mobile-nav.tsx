"use client"

import Link from "next/link"
import { BarChart3, BookOpen, Bot, MessageSquare, Settings, Users } from "lucide-react"

const items = [
  { href: "/demo", label: "Demo", icon: MessageSquare },
  { href: "/dashboard", label: "Dashboard", icon: BarChart3 },
  { href: "/settings", label: "Settings", icon: Settings },
  { href: "/knowledge-base", label: "KB", icon: BookOpen },
  { href: "/team", label: "Team", icon: Users }
]

export function MobileNav() {
  return (
    <div className="sticky top-0 z-30 border-b bg-white/90 px-4 py-3 backdrop-blur lg:hidden">
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <Bot className="h-4 w-4" />
        </div>
        <div>
          <div className="font-bold">ReplyPilot</div>
          <div className="text-xs text-muted-foreground">AI Support Copilot</div>
        </div>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1">
        {items.map((item) => {
          const Icon = item.icon
          return (
            <Link key={item.href} href={item.href} className="flex shrink-0 items-center gap-2 rounded-full border bg-white px-3 py-2 text-xs font-medium">
              <Icon className="h-3.5 w-3.5" />
              {item.label}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
