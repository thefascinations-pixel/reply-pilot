import type { CustomerChat, ReplyOption } from "@/lib/types"

const deliveryReplies: ReplyOption[] = [
  {
    id: "maya-1",
    title: "Empathetic + concrete next step",
    tone: "Warm and accountable",
    predictedSatisfaction: 91,
    reply:
      "I’m really sorry for the delay and for the unclear updates so far. I understand why this is frustrating after waiting 10 days. I’ll check the latest delivery status now and make sure you get a clear update today. If the package is still delayed, I’ll also review the available resolution options for you.",
    reason: "Acknowledges the frustration, takes ownership, and gives the customer a clear next step.",
    riskWarning: "Avoid promising compensation unless the policy allows it.",
    tags: ["Apology", "High trust", "Action-oriented"]
  },
  {
    id: "maya-2",
    title: "Short delivery status response",
    tone: "Direct and practical",
    predictedSatisfaction: 74,
    reply:
      "I’m sorry about the delay. I’ll check the shipment status now and send you a clear update today with the next available resolution option.",
    reason: "Fast and clear, but less emotionally responsive for an angry customer.",
    riskWarning: "May feel too brief given the customer’s frustration.",
    tags: ["Concise", "Next step"]
  },
  {
    id: "maya-3",
    title: "Escalation + retention save",
    tone: "Proactive and reassuring",
    predictedSatisfaction: 88,
    reply:
      "You’re right to expect clearer answers than this. I’m escalating this delivery issue now so we can get a definitive update instead of another vague response. I’ll follow up today with the shipment status and the resolution options available under our delivery policy.",
    reason: "Escalation signals urgency and reduces the chance of churn or public complaint.",
    riskWarning: "Only use escalation language if an internal escalation path exists.",
    tags: ["Escalation", "Retention", "Ownership"]
  }
]

export const demoChats: CustomerChat[] = [
  {
    id: "chat-maya",
    customerName: "Maya Tanaka",
    customerEmail: "maya.tanaka@example.com",
    company: "Order RP-1048",
    status: "open",
    priority: "high",
    lastMessage:
      "I ordered this 10 days ago and still haven’t received anything. Your support team keeps giving me vague answers. This is really frustrating.",
    messages: [
      { id: "m1", sender: "customer", body: "I ordered this 10 days ago and still haven’t received anything.", timestamp: "Today, 9:12 AM" },
      { id: "m2", sender: "agent", body: "Thanks for reaching out. We are checking with the carrier and will update you soon.", timestamp: "Today, 9:24 AM" },
      { id: "m3", sender: "customer", body: "Your support team keeps giving me vague answers. This is really frustrating.", timestamp: "Today, 10:03 AM" }
    ],
    analysis: {
      intent: "Delivery delay",
      sentiment: "angry",
      urgency: "high",
      riskLevel: "high",
      satisfactionRisk: 89,
      recommendedStrategy: "Apologize, acknowledge repeated vague updates, provide a same-day concrete status check, and avoid unapproved compensation promises.",
      customerNeeds: ["Clear delivery status", "Accountability", "Resolution options", "No more vague updates"]
    },
    replyOptions: deliveryReplies
  },
  {
    id: "chat-daniel",
    customerName: "Daniel Kim",
    customerEmail: "daniel.kim@example.com",
    company: "Order RP-2219",
    status: "open",
    priority: "high",
    lastMessage: "The product arrived damaged and I want a refund. I already sent photos but nobody has replied.",
    messages: [
      { id: "d1", sender: "customer", body: "The product arrived damaged and I want a refund.", timestamp: "Yesterday, 4:45 PM" },
      { id: "d2", sender: "system", body: "Customer uploaded 3 product photos.", timestamp: "Yesterday, 4:47 PM" },
      { id: "d3", sender: "customer", body: "I already sent photos but nobody has replied.", timestamp: "Today, 8:31 AM" }
    ],
    analysis: {
      intent: "Refund request",
      sentiment: "frustrated",
      urgency: "high",
      riskLevel: "high",
      satisfactionRisk: 84,
      recommendedStrategy: "Confirm the evidence was received, apologize for the delay, and explain the refund review path with a clear next update.",
      customerNeeds: ["Refund eligibility", "Photo acknowledgement", "Response timeline", "Confidence someone owns it"]
    },
    replyOptions: [
      {
        id: "daniel-1",
        title: "Empathetic refund review",
        tone: "Warm and accountable",
        predictedSatisfaction: 90,
        reply: "I’m sorry the product arrived damaged and that your photos were not answered sooner. I can see how disappointing that is. I’ll review the photos you sent and move this into the refund review path now, then send you a clear update on the next step today.",
        reason: "It validates the damaged item, acknowledges the support delay, and creates a concrete ownership moment.",
        riskWarning: "Do not guarantee the refund until the policy review is complete.",
        tags: ["Refund", "Apology", "Evidence received"]
      },
      {
        id: "daniel-2",
        title: "Short refund response",
        tone: "Concise and clear",
        predictedSatisfaction: 76,
        reply: "I’m sorry about the damaged product. I’ll review the photos now and update you today on the refund process and next step.",
        reason: "Works for speed, but may not fully address the ignored-photo concern.",
        riskWarning: "Could feel too transactional.",
        tags: ["Concise", "Refund"]
      },
      {
        id: "daniel-3",
        title: "Escalated damage claim",
        tone: "Proactive and protective",
        predictedSatisfaction: 87,
        reply: "Thank you for sending the photos. I’m sorry they were not handled sooner. I’m escalating this as a damaged-arrival case so the refund review is not delayed further, and I’ll keep you updated with the decision path today.",
        reason: "Escalation reduces anxiety and shows the customer their evidence matters.",
        riskWarning: "Use only if damaged-arrival cases can be prioritized.",
        tags: ["Escalation", "Damaged item", "Trust repair"]
      }
    ]
  },
  {
    id: "chat-aiko",
    customerName: "Aiko Sato",
    customerEmail: "aiko.sato@example.com",
    company: "Northstar Analytics",
    status: "pending",
    priority: "medium",
    lastMessage: "I was charged twice this month. Can someone explain why this happened?",
    messages: [
      { id: "a1", sender: "customer", body: "I was charged twice this month. Can someone explain why this happened?", timestamp: "Today, 11:18 AM" }
    ],
    analysis: {
      intent: "Billing issue",
      sentiment: "neutral",
      urgency: "medium",
      riskLevel: "medium",
      satisfactionRisk: 61,
      recommendedStrategy: "Acknowledge the concern, investigate invoices, and explain possible causes without implying fault too early.",
      customerNeeds: ["Billing explanation", "Duplicate-charge check", "Refund or credit path"]
    },
    replyOptions: [
      {
        id: "aiko-1",
        title: "Careful billing investigation",
        tone: "Professional and reassuring",
        predictedSatisfaction: 86,
        reply: "Thanks for flagging this. I understand why a duplicate charge would be concerning. I’ll review this month’s invoices and payment events to see whether there was a duplicate charge, plan change, or pending authorization, then share a clear explanation and any correction needed.",
        reason: "Names likely causes while committing to a clear review.",
        riskWarning: "Avoid confirming a duplicate charge before checking billing records.",
        tags: ["Billing", "Investigation", "Professional"]
      },
      {
        id: "aiko-2",
        title: "Short billing check",
        tone: "Direct and calm",
        predictedSatisfaction: 78,
        reply: "I’ll check your billing history now and confirm whether this was a duplicate charge, plan change, or pending authorization.",
        reason: "Efficient for a neutral customer with a specific question.",
        riskWarning: "May feel incomplete if no follow-up timeline is added.",
        tags: ["Concise", "Billing"]
      },
      {
        id: "aiko-3",
        title: "Billing ownership + credit path",
        tone: "Accountable and proactive",
        predictedSatisfaction: 84,
        reply: "I’ll take a look at the billing records and get you a plain-English explanation. If we find a duplicate charge, I’ll help route it for correction or credit according to the billing policy.",
        reason: "Adds a resolution path without promising a specific outcome.",
        riskWarning: "Confirm policy before mentioning credits in production.",
        tags: ["Credit path", "Ownership", "Billing"]
      }
    ]
  },
  {
    id: "chat-hiroshi",
    customerName: "Hiroshi Yamamoto",
    customerEmail: "hiroshi.yamamoto@example.com",
    company: "Seller campaign C-882",
    status: "open",
    priority: "medium",
    lastMessage: "My campaign performance dropped suddenly after the budget change. I need to understand what happened.",
    messages: [
      { id: "h1", sender: "customer", body: "My campaign performance dropped suddenly after the budget change.", timestamp: "Today, 1:05 PM" },
      { id: "h2", sender: "customer", body: "I need to understand what happened.", timestamp: "Today, 1:06 PM" }
    ],
    analysis: {
      intent: "Campaign performance complaint",
      sentiment: "frustrated",
      urgency: "medium",
      riskLevel: "medium",
      satisfactionRisk: 67,
      recommendedStrategy: "Offer a diagnostic review, identify timing around budget changes, and avoid blaming the customer’s configuration.",
      customerNeeds: ["Performance explanation", "Budget-change audit", "Actionable fix"]
    },
    replyOptions: [
      {
        id: "hiroshi-1",
        title: "Performance diagnostic",
        tone: "Consultative and calm",
        predictedSatisfaction: 88,
        reply: "I can help investigate that. A sudden performance drop after a budget change usually needs a quick review of timing, pacing, audience delivery, and any learning-period effects. I’ll look at the campaign change history and share what changed, what likely caused the drop, and what adjustment I recommend next.",
        reason: "Turns a complaint into a structured diagnostic plan.",
        riskWarning: "Do not guarantee performance recovery.",
        tags: ["Diagnostic", "Marketplace", "Action plan"]
      },
      {
        id: "hiroshi-2",
        title: "Short campaign check",
        tone: "Direct and analytical",
        predictedSatisfaction: 75,
        reply: "I’ll review the campaign history around the budget change and check for pacing, delivery, or learning-period issues that may explain the drop.",
        reason: "Clear and efficient, but less reassuring.",
        riskWarning: "Could feel too generic without a promised follow-up.",
        tags: ["Concise", "Campaign"]
      },
      {
        id: "hiroshi-3",
        title: "Proactive optimization path",
        tone: "Strategic and helpful",
        predictedSatisfaction: 83,
        reply: "I’ll review what happened after the budget change and also look for a practical optimization path. If the drop is tied to pacing or delivery changes, I’ll suggest the safest next adjustment instead of asking you to guess.",
        reason: "Adds proactive value beyond explanation.",
        riskWarning: "Recommendations should be based on actual campaign data.",
        tags: ["Optimization", "Proactive", "Trust"]
      }
    ]
  },
  {
    id: "chat-emma",
    customerName: "Emma Wilson",
    customerEmail: "emma.wilson@example.com",
    company: "Brightdesk Studio",
    status: "open",
    priority: "high",
    lastMessage: "We are considering cancelling because the support response has been too slow lately.",
    messages: [
      { id: "e1", sender: "customer", body: "We are considering cancelling because the support response has been too slow lately.", timestamp: "Today, 2:22 PM" }
    ],
    analysis: {
      intent: "Cancellation risk",
      sentiment: "frustrated",
      urgency: "high",
      riskLevel: "high",
      satisfactionRisk: 93,
      recommendedStrategy: "Acknowledge the failure, escalate to a retention-safe path, and offer a concrete service recovery conversation.",
      customerNeeds: ["Faster support", "Accountability", "Retention conversation", "Service recovery"]
    },
    replyOptions: [
      {
        id: "emma-1",
        title: "Retention repair",
        tone: "Empathetic and senior",
        predictedSatisfaction: 92,
        reply: "I’m sorry we’ve made support feel slow enough that you’re considering cancelling. That is a serious signal, and I appreciate you telling us directly. I’d like to review the recent response delays, identify what went wrong, and help create a faster support path for your team going forward.",
        reason: "Meets the cancellation risk directly without becoming defensive.",
        riskWarning: "Do not promise custom support terms unless approved.",
        tags: ["Retention", "Apology", "Service recovery"]
      },
      {
        id: "emma-2",
        title: "Short save attempt",
        tone: "Clear and respectful",
        predictedSatisfaction: 71,
        reply: "I’m sorry our response times have been too slow. I’ll review what happened and help identify a faster support path before you make a final cancellation decision.",
        reason: "Direct, but may not be strong enough for a high-risk account.",
        riskWarning: "High churn risk needs more ownership.",
        tags: ["Concise", "Retention"]
      },
      {
        id: "emma-3",
        title: "Escalate to manager",
        tone: "Proactive and accountable",
        predictedSatisfaction: 89,
        reply: "I understand why you’re considering cancellation. I’m going to escalate this to our support lead so we can review the slow response pattern and come back with a concrete recovery plan, not just an apology.",
        reason: "Signals urgency and a higher level of accountability.",
        riskWarning: "Only use if manager escalation is available.",
        tags: ["Escalation", "High risk", "Manager review"]
      }
    ]
  },
  {
    id: "chat-liam",
    customerName: "Liam Chen",
    customerEmail: "liam.chen@example.com",
    company: "Atlas Field Ops",
    status: "pending",
    priority: "low",
    lastMessage: "Can your platform support exporting reports by region? This is important for our team.",
    messages: [
      { id: "l1", sender: "customer", body: "Can your platform support exporting reports by region? This is important for our team.", timestamp: "Yesterday, 2:18 PM" }
    ],
    analysis: {
      intent: "Feature request",
      sentiment: "neutral",
      urgency: "medium",
      riskLevel: "low",
      satisfactionRisk: 38,
      recommendedStrategy: "Clarify the reporting need, offer current workaround if available, and log the request for product review.",
      customerNeeds: ["Capability answer", "Workaround", "Product follow-up"]
    },
    replyOptions: [
      {
        id: "liam-1",
        title: "Helpful feature clarification",
        tone: "Friendly and consultative",
        predictedSatisfaction: 85,
        reply: "That makes sense, especially if your team reports performance by territory. Today, I can help confirm the best export path available and capture your region-based reporting need for product review. Could you share whether you need region as a filter, a column, or separate report files?",
        reason: "Clarifies the job-to-be-done while keeping the request moving.",
        riskWarning: "Avoid implying the feature is committed to the roadmap.",
        tags: ["Feature request", "Clarifying question", "Product feedback"]
      },
      {
        id: "liam-2",
        title: "Short feature answer",
        tone: "Concise and helpful",
        predictedSatisfaction: 73,
        reply: "I can check the current export options for region-based reports and log this as a product request if it is not supported yet.",
        reason: "Simple and honest for a lower-risk request.",
        riskWarning: "May need more detail if the customer is evaluating purchase fit.",
        tags: ["Concise", "Feature"]
      },
      {
        id: "liam-3",
        title: "Proactive workaround",
        tone: "Solution-oriented",
        predictedSatisfaction: 82,
        reply: "I’ll help look for the closest current workflow for region reporting. If direct regional exports are not available yet, I can suggest a workaround and document the exact export format your team needs.",
        reason: "Balances current support with future product feedback.",
        riskWarning: "Do not invent a workaround without checking the product.",
        tags: ["Workaround", "Product input", "Helpful"]
      }
    ]
  },
  {
    id: "chat-sofia",
    customerName: "Sofia Garcia",
    customerEmail: "sofia.garcia@example.com",
    company: "Trial workspace",
    status: "open",
    priority: "medium",
    lastMessage: "I’m trying to set up my account but I don’t understand which option I should choose.",
    messages: [
      { id: "s1", sender: "customer", body: "I’m trying to set up my account but I don’t understand which option I should choose.", timestamp: "Today, 7:52 AM" },
      { id: "s2", sender: "system", body: "Customer is on onboarding step 2 of 5.", timestamp: "Today, 7:52 AM" }
    ],
    analysis: {
      intent: "Onboarding confusion",
      sentiment: "frustrated",
      urgency: "medium",
      riskLevel: "medium",
      satisfactionRisk: 57,
      recommendedStrategy: "Reduce cognitive load, ask one clarifying question, and offer to guide the setup step-by-step.",
      customerNeeds: ["Plain-language guidance", "Correct option", "Confidence during setup"]
    },
    replyOptions: [
      {
        id: "sofia-1",
        title: "Guided onboarding",
        tone: "Warm and simple",
        predictedSatisfaction: 89,
        reply: "No problem. That setup step can be confusing the first time. I can help you choose the right option. Are you setting up the account for just yourself, or for a team that will share access?",
        reason: "Reduces overwhelm and asks only one useful question.",
        riskWarning: "Avoid sending a long explanation before knowing the setup path.",
        tags: ["Onboarding", "Simple", "Clarifying question"]
      },
      {
        id: "sofia-2",
        title: "Short setup question",
        tone: "Concise and supportive",
        predictedSatisfaction: 76,
        reply: "I can help. Are you setting this up for personal use or for a team workspace?",
        reason: "Fast and low-friction, but less reassuring.",
        riskWarning: "Could feel abrupt if the user is already frustrated.",
        tags: ["Concise", "Onboarding"]
      },
      {
        id: "sofia-3",
        title: "Proactive setup walkthrough",
        tone: "Patient and confident",
        predictedSatisfaction: 86,
        reply: "I’ll walk you through it. First, choose the team option if other people need access; choose individual if only you will use the account. If you tell me which setup you want, I’ll help with the next step too.",
        reason: "Provides immediate guidance and offers continued support.",
        riskWarning: "Make sure the product options match this language.",
        tags: ["Walkthrough", "Confidence", "Activation"]
      }
    ]
  },
  {
    id: "chat-noah",
    customerName: "Noah Smith",
    customerEmail: "noah.smith@example.com",
    company: "Maple Ridge Co.",
    status: "resolved",
    priority: "low",
    lastMessage: "Thanks, that helped. One more question: can I share this dashboard with another teammate?",
    messages: [
      { id: "n1", sender: "agent", body: "You can find the dashboard from the Analytics tab in your workspace.", timestamp: "Yesterday, 5:05 PM" },
      { id: "n2", sender: "customer", body: "Thanks, that helped. One more question: can I share this dashboard with another teammate?", timestamp: "Yesterday, 5:19 PM" }
    ],
    analysis: {
      intent: "Dashboard sharing question",
      sentiment: "positive",
      urgency: "low",
      riskLevel: "low",
      satisfactionRisk: 19,
      recommendedStrategy: "Answer directly, reinforce the positive tone, and mention permission requirements if relevant.",
      customerNeeds: ["Sharing instructions", "Permission clarity", "Fast answer"]
    },
    replyOptions: [
      {
        id: "noah-1",
        title: "Friendly sharing guidance",
        tone: "Positive and clear",
        predictedSatisfaction: 94,
        reply: "I’m glad that helped. Yes, you can share the dashboard with another teammate by inviting them to the workspace and giving them access to the dashboard. If they do not see it right away, check that their role includes dashboard viewing permissions.",
        reason: "Answers the question directly and anticipates the most likely follow-up issue.",
        riskWarning: "Confirm exact permission names before using in production.",
        tags: ["Positive", "Permissions", "How-to"]
      },
      {
        id: "noah-2",
        title: "Short sharing answer",
        tone: "Concise and friendly",
        predictedSatisfaction: 86,
        reply: "Yes. Invite your teammate to the workspace, then make sure their role has dashboard viewing access.",
        reason: "Good fit for a positive, low-risk customer.",
        riskWarning: "May omit useful steps for less technical users.",
        tags: ["Concise", "How-to"]
      },
      {
        id: "noah-3",
        title: "Proactive teammate setup",
        tone: "Helpful and anticipatory",
        predictedSatisfaction: 91,
        reply: "Yes, you can share it. Invite the teammate to your workspace, confirm their dashboard permission, and they should be able to view it from their own account. If you want, I can also point you to the exact invite screen.",
        reason: "Adds proactive help while preserving the customer’s positive momentum.",
        riskWarning: "Avoid offering actions agents cannot perform.",
        tags: ["Proactive", "Positive", "Team access"]
      }
    ]
  }
]

export const dashboardIssueCategories = [
  { name: "Delivery", value: 31 },
  { name: "Billing", value: 22 },
  { name: "Refunds", value: 18 },
  { name: "Onboarding", value: 16 },
  { name: "Feature requests", value: 13 }
]
