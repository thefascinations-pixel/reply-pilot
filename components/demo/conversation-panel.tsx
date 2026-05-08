import { Bot, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { CustomerChat } from "@/lib/types"
import { cn } from "@/lib/utils"

export function ConversationPanel({ chat }: { chat: CustomerChat }) {
  return (
    <Card className="shadow-sm">
      <CardHeader className="border-b">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <CardTitle>{chat.customerName}</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">{chat.company} / {chat.customerEmail}</p>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className="capitalize">{chat.priority} priority</Badge>
            <Badge variant={chat.status === "resolved" ? "secondary" : "default"} className="capitalize">{chat.status}</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 p-4">
        {chat.messages.map((message) => {
          const isCustomer = message.sender === "customer"
          return (
            <div key={message.id} className={cn("flex gap-3", !isCustomer && "justify-end")}>
              {isCustomer && (
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <User className="h-4 w-4" />
                </div>
              )}
              <div className={cn("max-w-[82%] rounded-2xl border px-4 py-3 shadow-sm", isCustomer ? "bg-white" : "bg-primary text-primary-foreground")}>
                <div className={cn("mb-1 text-[11px] font-medium", isCustomer ? "text-muted-foreground" : "text-primary-foreground/75")}>
                  {message.sender === "system" ? "System note" : isCustomer ? chat.customerName : "Support agent"} / {message.timestamp}
                </div>
                <p className="whitespace-pre-wrap text-sm leading-6">{message.body}</p>
              </div>
              {!isCustomer && (
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Bot className="h-4 w-4" />
                </div>
              )}
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
