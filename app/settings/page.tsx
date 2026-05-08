"use client"

import { Settings } from "lucide-react"
import { AppShell } from "@/components/app-sidebar"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

export default function SettingsPage() {
  return (
    <AppShell>
      <MobileNav />
      <div className="p-4 lg:p-8">
        <div className="mb-6">
          <h1 className="flex items-center gap-2 text-3xl font-bold tracking-tight"><Settings className="h-7 w-7" /> Settings</h1>
          <p className="mt-1 text-muted-foreground">Demo controls for reply style, approvals, risk warnings, and policy context.</p>
        </div>
        <Card className="max-w-4xl shadow-sm">
          <CardHeader>
            <CardTitle>Reply generation preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Brand tone</Label>
                <Select defaultValue="professional">
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="friendly">Friendly</SelectItem>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="concise">Concise</SelectItem>
                    <SelectItem value="apologetic">Apologetic</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Reply length</Label>
                <Select defaultValue="medium">
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="short">Short</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="detailed">Detailed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <SettingToggle label="Show risk warnings" defaultChecked />
              <SettingToggle label="Require human approval" defaultChecked />
              <SettingToggle label="Use knowledge base" defaultChecked />
              <SettingToggle label="Enable satisfaction prediction" defaultChecked />
            </div>

            <div className="space-y-2">
              <Label htmlFor="policy">Company policy</Label>
              <Textarea
                id="policy"
                className="min-h-[180px] bg-white"
                defaultValue={"Refunds may be offered when an item arrives damaged and evidence is provided. Delivery compensation requires manager approval. Escalate cancellation-risk accounts to the support lead before offering custom terms."}
              />
            </div>

            <Button>Save demo settings</Button>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  )
}

function SettingToggle({ label, defaultChecked }: { label: string; defaultChecked?: boolean }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border bg-white p-4">
      <Label>{label}</Label>
      <Switch defaultChecked={defaultChecked} aria-label={label} />
    </div>
  )
}
