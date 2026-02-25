import { Shield, ShieldAlert, Plus, ExternalLink } from "lucide-react";
const certs = [
    { id: "1", domain: "openclaw.dev", issuer: "Let's Encrypt", expires: "89 days", status: "valid", daysLeft: 89 },
    { id: "2", domain: "api.openclaw.dev", issuer: "Amazon", expires: "45 days", status: "valid", daysLeft: 45 },
    { id: "3", domain: "staging.the-mehdi.com", issuer: "Let's Encrypt", expires: "14 days", status: "warning", daysLeft: 14 },
    { id: "4", domain: "old-project.me", issuer: "Cloudflare", expires: "Expired", status: "expired", daysLeft: 0 }
];
export default function CertificatesPage() {
    return (<div style={{ padding: "var(--space-6)", maxWidth: 1200 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <div>
                <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700 }}>Monitored Certificates</h1>
                <p style={{ color: "var(--color-text-secondary)", marginTop: 4 }}>Tracking 4 active SSL/TLS certificates</p>
            </div>
            <button className="btn btn-primary"><Plus size={16} /> Add Domain</button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "var(--space-4)" }}>
            {certs.map(c => (
                <div key={c.id} className="card card-hover" style={{ padding: "var(--space-5)", borderTop: `4px solid ${c.status === "valid" ? "var(--color-success)" : c.status === "warning" ? "var(--color-warning)" : "var(--color-danger)"}` }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--space-4)" }}>
                        <h3 style={{ fontSize: "16px", fontWeight: 700, display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                            {c.status === "valid" ? <Shield size={18} style={{ color: "var(--color-success)" }} /> : <ShieldAlert size={18} style={{ color: c.status === "warning" ? "var(--color-warning)" : "var(--color-danger)" }} />}
                            <span className="mono">{c.domain}</span>
                        </h3>
                        <button className="btn btn-ghost btn-sm" style={{ padding: 0 }}><ExternalLink size={14} /></button>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
                            <span style={{ color: "var(--color-text-secondary)" }}>Issuer</span>
                            <span style={{ fontWeight: 500 }}>{c.issuer}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
                            <span style={{ color: "var(--color-text-secondary)" }}>Expires in</span>
                            <span style={{ fontWeight: 600, color: c.status === "warning" ? "var(--color-warning)" : c.status === "expired" ? "var(--color-danger)" : "inherit" }}>{c.expires}</span>
                        </div>
                        <div className="progress-bg" style={{ marginTop: "var(--space-2)" }}>
                            <div className="progress-bar" style={{ width: `${Math.min(100, (c.daysLeft / 90) * 100)}%`, background: c.status === "valid" ? "var(--color-success)" : c.status === "warning" ? "var(--color-warning)" : "var(--color-danger)" }}></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>);
}
