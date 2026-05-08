export type ChatStatus = "open" | "pending" | "resolved"
export type Sentiment = "angry" | "frustrated" | "neutral" | "positive"
export type Urgency = "low" | "medium" | "high"
export type RiskLevel = "low" | "medium" | "high"

export interface CustomerChat {
  id: string
  customerName: string
  customerEmail: string
  company?: string
  status: ChatStatus
  priority: "low" | "medium" | "high"
  lastMessage: string
  messages: ConversationMessage[]
  analysis: AIAnalysis
  replyOptions: ReplyOption[]
}

export interface ConversationMessage {
  id: string
  sender: "customer" | "agent" | "system"
  body: string
  timestamp: string
}

export interface AIAnalysis {
  intent: string
  sentiment: Sentiment
  urgency: Urgency
  riskLevel: RiskLevel
  satisfactionRisk: number
  recommendedStrategy: string
  customerNeeds: string[]
}

export interface ReplyOption {
  id: string
  title: string
  tone: string
  predictedSatisfaction: number
  reply: string
  reason: string
  riskWarning: string
  tags: string[]
}
