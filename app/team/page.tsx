import { Users } from "lucide-react"
import { AppShell } from "@/components/app-sidebar"
import { MobileNav } from "@/components/mobile-nav"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const users = [
  { name: "Rina Patel", role: "Support Manager" },
  { name: "Jon Bell", role: "Support Agent" },
  { name: "Mika Lee", role: "Admin" }
]

export default function TeamPage() {
  return (
    <AppShell>
      <MobileNav />
      <div className="p-4 lg:p-8">
        <div className="mb-6">
          <h1 className="flex items-center gap-2 text-3xl font-bold tracking-tight"><Users className="h-7 w-7" /> Team</h1>
          <p className="mt-1 text-muted-foreground">Team management is coming soon.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {users.map((user) => (
            <Card key={user.name} className="shadow-sm">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent font-bold text-primary">
                  {user.name.split(" ").map((part) => part[0]).join("")}
                </div>
                <CardTitle>{user.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="outline">{user.role}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  )
}
