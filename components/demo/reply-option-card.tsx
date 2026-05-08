"use client"

import { AlertTriangle, CheckCircle, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import type { ReplyOption } from "@/lib/types"
import { cn, scoreClass, scoreLabel } from "@/lib/utils"

interface ReplyOptionCardProps {
  option: ReplyOption
  selected: boolean
  onUse: (option: ReplyOption) => void
  variant?: "default" | "featured"
}

export function ReplyOptionCard({ option, selected, onUse, variant = "default" }: ReplyOptionCardProps) {
  return (
    <Card className={cn("transition", variant === "featured" && "border-0 shadow-none", selected && "border-primary bg-accent/40 shadow-soft")}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardTitle className="flex items-center gap-2 text-base">
              {selected ? <CheckCircle className="h-4 w-4 text-primary" /> : <Sparkles className="h-4 w-4 text-primary" />}
              {option.title}
            </CardTitle>
            <p className="mt-1 text-xs font-medium text-muted-foreground">{option.tone}</p>
          </div>
          {selected && <Badge>Selected</Badge>}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="mb-2 flex items-center justify-between">
            <Badge variant="outline" className={scoreClass(option.predictedSatisfaction)}>
              {scoreLabel(option.predictedSatisfaction)}
            </Badge>
            <span className="text-sm font-semibold">{option.predictedSatisfaction}/100</span>
          </div>
          <Progress value={option.predictedSatisfaction} />
          <p className="mt-1 text-xs text-muted-foreground">Predicted satisfaction score</p>
        </div>
        <p className="whitespace-pre-wrap rounded-2xl border bg-white p-3 text-sm leading-6">{option.reply}</p>
        <div className="space-y-2 text-sm">
          <p><span className="font-semibold">Why it may work:</span> <span className="text-muted-foreground">{option.reason}</span></p>
          <p className="flex gap-2 text-amber-700"><AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" /> {option.riskWarning}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {option.tags.map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}
        </div>
        <Button className="w-full" size={variant === "featured" ? "lg" : "default"} variant={selected ? "secondary" : "default"} onClick={() => onUse(option)}>
          Use this reply
        </Button>
      </CardContent>
    </Card>
  )
}
