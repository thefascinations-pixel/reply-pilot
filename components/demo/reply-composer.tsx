"use client"

import { CheckCircle, Clipboard, Save, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

interface ReplyComposerProps {
  value: string
  onChange: (value: string) => void
  onCopy: () => void
  onSave: () => void
  onResolve: () => void
  onSend: () => void
}

export function ReplyComposer({ value, onChange, onCopy, onSave, onResolve, onSend }: ReplyComposerProps) {
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Final reply</CardTitle>
        <p className="text-sm text-muted-foreground">
          Select a suggested reply or write your own response. In production, Send can connect to Intercom, Zendesk, Gmail, or another chat app.
        </p>
      </CardHeader>
      <CardContent className="space-y-3">
        <Textarea
          aria-label="Final reply composer"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Your final reply will appear here..."
          className="min-h-[170px] resize-y bg-white leading-6"
        />
        <div className="flex flex-wrap gap-2">
          <Button type="button" onClick={onSend}><Send className="mr-2 h-4 w-4" /> Send reply</Button>
          <Button type="button" variant="outline" onClick={onCopy}><Clipboard className="mr-2 h-4 w-4" /> Copy</Button>
          <Button type="button" variant="outline" onClick={onSave}><Save className="mr-2 h-4 w-4" /> Save draft</Button>
          <Button type="button" variant="outline" onClick={onResolve}><CheckCircle className="mr-2 h-4 w-4" /> Mark as resolved</Button>
        </div>
      </CardContent>
    </Card>
  )
}
