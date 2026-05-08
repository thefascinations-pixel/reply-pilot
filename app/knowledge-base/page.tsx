import { BookOpen } from "lucide-react"
import { AppShell } from "@/components/app-sidebar"
import { MobileNav } from "@/components/mobile-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const docs = ["Refund policy", "Shipping policy", "Escalation rules", "Brand tone guide"]

export default function KnowledgeBasePage() {
  return (
    <AppShell>
      <MobileNav />
      <div className="p-4 lg:p-8">
        <div className="mb-6">
          <h1 className="flex items-center gap-2 text-3xl font-bold tracking-tight"><BookOpen className="h-7 w-7" /> Knowledge Base</h1>
          <p className="mt-1 text-muted-foreground">Knowledge Base is coming soon.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {docs.map((doc) => (
            <Card key={doc} className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-base">{doc}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-muted-foreground">
                Mock policy card prepared for future retrieval-augmented reply generation.
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  )
}
