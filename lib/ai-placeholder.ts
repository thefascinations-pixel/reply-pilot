import { demoChats } from "@/lib/demo-data"
import type { ReplyOption } from "@/lib/types"

export async function generateReplyOptions(input: {
  customerMessage: string
  companyPolicy?: string
}): Promise<ReplyOption[]> {
  // Placeholder for future OpenAI or Anthropic API call.
  // For now, return mock reply options that resemble the requested support context.
  const source =
    demoChats.find((chat) =>
      input.customerMessage.toLowerCase().includes(chat.analysis.intent.toLowerCase().split(" ")[0])
    ) ?? demoChats[0]

  return source.replyOptions.map((option, index) => ({
    ...option,
    id: `${option.id}-generated-${index}`,
    predictedSatisfaction: Math.max(60, Math.min(98, option.predictedSatisfaction + (index === 0 ? 1 : -1)))
  }))
}
