import Link from "next/link"
import { ArrowRight, CheckCircle, MessageSquare, Sparkles, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const features = [
  {
    title: "Satisfaction-aware suggestions",
    body: "ReplyPilot generates multiple reply strategies and scores them based on likely customer satisfaction.",
    icon: Sparkles
  },
  {
    title: "Human-in-the-loop by design",
    body: "Agents stay in control. They choose, edit, and approve every response before it is sent.",
    icon: Users
  },
  {
    title: "Built for support workflows",
    body: "Designed for inboxes, tickets, policies, escalation rules, and future helpdesk integrations.",
    icon: MessageSquare
  }
]

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <div className="font-bold">ReplyPilot</div>
            <div className="text-xs text-muted-foreground">AI reply suggestions for customer support teams.</div>
          </div>
        </Link>
        <div className="hidden gap-2 sm:flex">
          <Button asChild variant="ghost"><Link href="/dashboard">Dashboard</Link></Button>
          <Button asChild><Link href="/demo">Try interactive demo</Link></Button>
        </div>
      </nav>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1fr_520px] lg:items-center">
        <div>
          <Badge className="mb-5">AI Support Copilot</Badge>
          <h1 className="max-w-4xl text-balance text-5xl font-bold tracking-tight text-foreground md:text-7xl">
            Choose the customer reply most likely to work.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            ReplyPilot helps support teams analyze customer messages, generate response options, and choose the reply most likely to satisfy the customer.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg"><Link href="/demo">Try interactive demo <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
            <Button asChild size="lg" variant="outline"><Link href="/dashboard">View dashboard</Link></Button>
          </div>
        </div>

        <Card className="overflow-hidden border-2 bg-white/90 shadow-soft">
          <CardHeader className="border-b bg-secondary/50">
            <CardTitle className="flex items-center gap-2 text-base"><MessageSquare className="h-4 w-4" /> Live support ticket</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 p-5">
            <div className="rounded-2xl border bg-white p-4">
              <div className="mb-2 text-xs font-medium text-muted-foreground">Maya Tanaka · Delivery delay</div>
              <p className="text-sm leading-6">I ordered this 10 days ago and still haven’t received anything. Your support team keeps giving me vague answers.</p>
            </div>
            <div className="rounded-2xl border bg-emerald-50 p-4">
              <div className="mb-2 flex items-center justify-between">
                <Badge variant="outline" className="border-emerald-200 bg-white text-emerald-700">Strong</Badge>
                <span className="text-sm font-semibold">91/100</span>
              </div>
              <Progress value={91} />
              <p className="mt-3 text-sm leading-6">Apologize, acknowledge vague updates, and promise a same-day status check.</p>
            </div>
            <div className="rounded-2xl border bg-white p-4">
              <div className="mb-2 flex items-center gap-2 font-semibold"><CheckCircle className="h-4 w-4 text-primary" /> Agent stays in control</div>
              <p className="text-sm text-muted-foreground">Choose a strategy, edit the final reply, then copy or resolve the ticket.</p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="shadow-sm">
                <CardHeader>
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-6 text-muted-foreground">{feature.body}</CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <Card className="bg-primary text-primary-foreground shadow-soft">
          <CardContent className="grid gap-8 p-8 md:grid-cols-3">
            {["Analyze the message", "Generate reply strategies", "Choose, edit, and send"].map((step, index) => (
              <div key={step}>
                <div className="mb-3 text-sm font-semibold opacity-70">Step {index + 1}</div>
                <h3 className="text-xl font-semibold">{step}</h3>
                <p className="mt-2 text-sm leading-6 text-primary-foreground/75">Keep support quality high without removing the agent from the decision.</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-4xl font-bold tracking-tight">Ready to pilot faster, better replies?</h2>
        <p className="mt-4 text-muted-foreground">Open the demo workspace and try the full mock support flow.</p>
        <Button asChild size="lg" className="mt-8"><Link href="/demo">Try interactive demo</Link></Button>
      </section>
    </main>
  )
}
