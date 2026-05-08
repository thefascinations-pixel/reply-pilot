"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, BookOpen, Bot, MessageSquare, Settings, Sparkles, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/demo", label: "Demo Workspace", icon: MessageSquare },
  { href: "/dashboard", label: "Dashboard", icon: BarChart3 },
  { href: "/settings", label: "Settings", icon: Settings },
  { href: "/knowledge-base", label: "Knowledge Base", icon: BookOpen },
  { href: "/team", label: "Team", icon: Users }
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <aside className="sticky top-0 hidden h-screen w-72 shrink-0 border-r bg-white/80 p-4 backdrop-blur lg:block">
      <Link href="/" className="mb-6 flex items-center gap-3 rounded-2xl px-2 py-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-soft">
          <Bot className="h-5 w-5" />
        </div>
        <div>
          <div className="text-lg font-bold tracking-tight">ReplyPilot</div>
          <div className="text-xs font-medium text-muted-foreground">AI Support Copilot</div>
        </div>
      </Link>

      <nav className="space-y-1">
        {navItems.map((item) => {
          const active = pathname === item.href
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-secondary hover:text-foreground",
                active && "bg-primary text-primary-foreground shadow-sm hover:bg-primary hover:text-primary-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <Separator className="my-6" />

      <div className="rounded-2xl border bg-gradient-to-br from-amber-50 to-teal-50 p-4 shadow-sm">
        <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
          <Sparkles className="h-4 w-4" />
        </div>
        <h3 className="text-sm font-semibold">Upgrade workspace</h3>
        <p className="mt-1 text-xs leading-5 text-muted-foreground">
          Connect your helpdesk, policies, and real CSAT feedback when you are ready.
        </p>
        <Button className="mt-4 w-full" size="sm">Upgrade CTA</Button>
      </div>
    </aside>
  )
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen lg:flex">
      <AppSidebar />
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  )
}
