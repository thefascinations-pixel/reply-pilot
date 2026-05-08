"use client"

import { ChevronLeft, ChevronRight, RefreshCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ReplyOptionCard } from "@/components/demo/reply-option-card"
import type { ReplyOption } from "@/lib/types"

interface SuggestedRepliesCarouselProps {
  options: ReplyOption[]
  selectedReplyId: string | null
  activeIndex: number
  onActiveIndexChange: (index: number) => void
  onUseReply: (option: ReplyOption) => void
  onRegenerate: () => void
}

export function SuggestedRepliesCarousel({
  options,
  selectedReplyId,
  activeIndex,
  onActiveIndexChange,
  onUseReply,
  onRegenerate
}: SuggestedRepliesCarouselProps) {
  const activeOption = options[activeIndex] ?? options[0]

  function move(delta: number) {
    const nextIndex = (activeIndex + delta + options.length) % options.length
    onActiveIndexChange(nextIndex)
  }

  return (
    <Card className="border-primary/20 bg-white/95 shadow-soft">
      <CardHeader className="border-b pb-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <CardTitle className="text-lg">Suggested replies</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">
              Choose a reply strategy, edit it, then send it into the chat.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button type="button" variant="outline" size="icon" aria-label="Previous suggested reply" onClick={() => move(-1)}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="rounded-full border bg-secondary px-3 py-2 text-xs font-semibold">
              {activeIndex + 1} of {options.length}
            </div>
            <Button type="button" variant="outline" size="icon" aria-label="Next suggested reply" onClick={() => move(1)}>
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button type="button" variant="secondary" onClick={onRegenerate}>
              <RefreshCcw className="mr-2 h-4 w-4" />
              Regenerate
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="mb-4 flex gap-2">
          {options.map((option, index) => (
            <button
              key={option.id}
              type="button"
              onClick={() => onActiveIndexChange(index)}
              className={`h-2 flex-1 rounded-full transition ${index === activeIndex ? "bg-primary" : "bg-secondary hover:bg-primary/30"}`}
              aria-label={`Show suggested reply ${index + 1}`}
            />
          ))}
        </div>
        {activeOption && (
          <ReplyOptionCard
            option={activeOption}
            selected={selectedReplyId === activeOption.id}
            onUse={onUseReply}
            variant="featured"
          />
        )}
      </CardContent>
    </Card>
  )
}
