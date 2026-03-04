import { Bell, Mail, MessageSquare } from "lucide-react";
import { Button, Card, Input } from "@geenius-ui/react-css";

export default function AlertsPage() {
    return (<div style={{ padding: "var(--space-6)", maxWidth: 800 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, display: "flex", alignItems: "center", gap: "var(--space-3)", margin: 0 }}><Bell style={{ color: "var(--color-accent-primary)" }} /> Alerts Setup</h1>
            <Button variant="primary">Save Settings</Button>
        </div>
        <Card padding="xl" style={{ marginBottom: "var(--space-4)" }}>
            <h2 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "var(--space-4)", marginTop: 0 }}>Notification Rules</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                <label style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                    <input type="checkbox" defaultChecked style={{ width: 16, height: 16, accentColor: "var(--color-accent-primary)" }} />
                    <span style={{ fontWeight: 500 }}>Warn when certificate expires in 30 days</span>
                </label>
                <label style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                    <input type="checkbox" defaultChecked style={{ width: 16, height: 16, accentColor: "var(--color-accent-primary)" }} />
                    <span style={{ fontWeight: 500 }}>Warn when certificate expires in 14 days</span>
                </label>
                <label style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                    <input type="checkbox" defaultChecked style={{ width: 16, height: 16, accentColor: "var(--color-accent-primary)" }} />
                    <span style={{ fontWeight: 500 }}>Alert immediately if certificate is invalid or expired</span>
                </label>
            </div>
        </Card>
        <Card padding="xl">
            <h2 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "var(--space-5)", marginTop: 0 }}>Channels</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
                    <div style={{ background: "var(--color-bg-secondary)", padding: 12, borderRadius: "var(--radius-sm)" }}><Mail size={20} style={{ color: "var(--color-text-secondary)" }} /></div>
                    <div style={{ flex: 1 }}>
                        <h3 style={{ fontWeight: 600, fontSize: "14px", margin: 0 }}>Email Alerts</h3>
                        <p style={{ color: "var(--color-text-secondary)", fontSize: "13px", margin: '4px 0 0 0' }}>Send alerts to admin@openclaw.dev</p>
                    </div>
                    <Button variant="outline">Configure</Button>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
                    <div style={{ background: "var(--color-bg-secondary)", padding: 12, borderRadius: "var(--radius-sm)" }}><MessageSquare size={20} style={{ color: "var(--color-text-secondary)" }} /></div>
                    <div style={{ flex: 1 }}>
                        <h3 style={{ fontWeight: 600, fontSize: "14px", margin: 0 }}>Slack / Discord</h3>
                        <p style={{ color: "var(--color-text-secondary)", fontSize: "13px", margin: '4px 0 0 0' }}>Not connected</p>
                    </div>
                    <Button variant="outline">Connect</Button>
                </div>
            </div>
        </Card>
    </div>);
}
