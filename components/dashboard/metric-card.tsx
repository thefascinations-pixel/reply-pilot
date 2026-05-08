import type { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface MetricCardProps {
  title: string
  value: string
  detail: string
  icon: LucideIcon
}

export function MetricCard({ title, value, detail, icon: Icon }: MetricCardProps) {
  return (
    <Card className="shadow-sm">
      <CardContent className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-sm font-medium text-muted-foreground">{title}</div>
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary text-primary">
            <Icon className="h-5 w-5" />
          </div>
        </div>
        <div className="text-3xl font-bold tracking-tight">{value}</div>
        <p className="mt-1 text-sm text-muted-foreground">{detail}</p>
      </CardContent>
    </Card>
  )
}
