import { Activity, AlertTriangle, BarChart3, CheckCircle, Clipboard, MessageSquare } from "lucide-react"
import { AppShell } from "@/components/app-sidebar"
import { MobileNav } from "@/components/mobile-nav"
import { MetricCard } from "@/components/dashboard/metric-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { demoChats, dashboardIssueCategories } from "@/lib/demo-data"

export default function DashboardPage() {
  const openTickets = demoChats.filter((chat) => chat.status !== "resolved").length
  const highRisk = demoChats.filter((chat) => chat.analysis.riskLevel === "high").length
  const averageSatisfaction = Math.round(
    demoChats.flatMap((chat) => chat.replyOptions).reduce((sum, option) => sum + option.predictedSatisfaction, 0) /
      demoChats.flatMap((chat) => chat.replyOptions).length
  )

  return (
    <AppShell>
      <MobileNav />
      <div className="p-4 lg:p-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="mt-1 text-muted-foreground">Demo analytics for ReplyPilot’s support copilot workspace.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <MetricCard title="Total conversations" value={String(demoChats.length)} detail="Across demo inbox" icon={MessageSquare} />
          <MetricCard title="Open tickets" value={String(openTickets)} detail="Need agent attention" icon={Activity} />
          <MetricCard title="High-risk tickets" value={String(highRisk)} detail="Churn or escalation risk" icon={AlertTriangle} />
          <MetricCard title="Avg. predicted satisfaction" value={`${averageSatisfaction}%`} detail="Across suggested replies" icon={BarChart3} />
          <MetricCard title="Replies copied" value="37" detail="Last 7 demo days" icon={Clipboard} />
          <MetricCard title="Tickets resolved" value="19" detail="Agent-marked resolved" icon={CheckCircle} />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_380px]">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Top issue categories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {dashboardIssueCategories.map((category) => (
                <div key={category.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium">{category.name}</span>
                    <span className="text-muted-foreground">{category.value}%</span>
                  </div>
                  <Progress value={category.value} />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Recent activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                "Maya Tanaka reply copied",
                "Emma Wilson flagged as high risk",
                "Daniel Kim draft saved",
                "Noah Smith ticket resolved"
              ].map((item) => (
                <div key={item} className="rounded-2xl border bg-white p-3 text-sm">{item}</div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  )
}
