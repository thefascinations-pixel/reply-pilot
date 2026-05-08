import { AlertTriangle, Gauge, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import type { AIAnalysis } from "@/lib/types"
import { cn } from "@/lib/utils"

export function AnalysisPanel({ analysis }: { analysis: AIAnalysis }) {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Sparkles className="h-4 w-4 text-primary" />
          AI Analysis
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="grid grid-cols-2 gap-3">
          <AnalysisBadge label="Sentiment" value={analysis.sentiment} />
          <AnalysisBadge label="Intent" value={analysis.intent} />
          <AnalysisBadge label="Urgency" value={analysis.urgency} />
          <AnalysisBadge label="Risk level" value={analysis.riskLevel} danger={analysis.riskLevel === "high"} />
        </div>

        <div className="rounded-2xl border bg-secondary/40 p-4">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 font-medium"><Gauge className="h-4 w-4" /> Satisfaction risk</span>
            <span className="font-semibold">{analysis.satisfactionRisk}/100</span>
          </div>
          <Progress value={analysis.satisfactionRisk} />
          <p className="mt-2 text-xs text-muted-foreground">Higher score means the customer is more likely to be dissatisfied without careful handling.</p>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-semibold">Recommended response strategy</h3>
          <p className="rounded-2xl border bg-white p-3 text-sm leading-6 text-muted-foreground">{analysis.recommendedStrategy}</p>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-semibold">Predicted customer needs</h3>
          <div className="flex flex-wrap gap-2">
            {analysis.customerNeeds.map((need) => <Badge key={need} variant="outline">{need}</Badge>)}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function AnalysisBadge({ label, value, danger }: { label: string; value: string; danger?: boolean }) {
  return (
    <div className={cn("rounded-2xl border bg-white p-3", danger && "border-red-200 bg-red-50")}>
      <div className="mb-1 flex items-center gap-1 text-xs text-muted-foreground">
        {danger && <AlertTriangle className="h-3 w-3 text-red-600" />}
        {label}
      </div>
      <div className={cn("text-sm font-semibold capitalize", danger && "text-red-700")}>{value}</div>
    </div>
  )
}
