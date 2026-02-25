import { Link, useLocation } from "react-router-dom";
import { ShieldCheck, Search, Bell, Settings } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
export default function Sidebar() {
    const loc = useLocation();
    const links = [
        { to: "/", icon: ShieldCheck, label: "Certificates" },
        { to: "/scanner", icon: Search, label: "Domain Scanner" },
        { to: "/alerts", icon: Bell, label: "Alerts Setup" },
        { to: "/settings", icon: Settings, label: "Settings" }
    ];
    return (<aside style={{ width: "var(--sidebar-width)", background: "var(--color-bg-secondary)", borderRight: "1px solid var(--color-border)", height: "100vh", position: "fixed", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "var(--space-6)", display: "flex", alignItems: "center", gap: "var(--space-3)", marginBottom: "var(--space-2)" }}>
            <div style={{ color: "var(--color-accent-primary)" }}><ShieldCheck size={28} /></div>
            <strong style={{ fontSize: "1.2rem", fontWeight: 700, letterSpacing: "-0.5px" }}>SSL Watch</strong>
        </div>
        <nav style={{ padding: "var(--space-4)", flex: 1, display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            {links.map(l => <Link key={l.to} to={l.to} style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", padding: "var(--space-3)", borderRadius: "var(--radius-sm)", color: loc.pathname === l.to ? "var(--color-accent-primary)" : "var(--color-text-secondary)", background: loc.pathname === l.to ? "var(--color-bg-card)" : "transparent", fontWeight: loc.pathname === l.to ? 600 : 500, fontSize: "14px", transition: "all var(--transition-fast)", boxShadow: loc.pathname === l.to ? "var(--card-shadow)" : "none" }}><l.icon size={18} />{l.label}</Link>)}
        </nav>
        <div style={{ padding: "var(--space-4)", display: "flex", justifyContent: "flex-end" }}><ThemeToggle /></div>
    </aside>);
}
