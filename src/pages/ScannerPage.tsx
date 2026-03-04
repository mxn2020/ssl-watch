import { useState } from "react";
import { Search, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { Button, Card, Input } from "@geenius-ui/react-css";

export default function ScannerPage() {
    const [url, setUrl] = useState("");
    const [scanning, setScanning] = useState(false);
    const [result, setResult] = useState<any>(null);

    const handleScan = () => {
        if (!url) return;
        setScanning(true); setResult(null);
        setTimeout(() => {
            setResult({
                domain: url, valid: true, issuer: "Let's Encrypt Authority X3", validFrom: "2026-01-01", validTo: "2026-04-01", protocol: "TLS 1.3", sans: [url, `www.${url}`]
            });
            setScanning(false);
        }, 1500);
    };

    return (<div style={{ padding: "var(--space-6)", maxWidth: 800 }}>
        <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, marginBottom: "var(--space-6)" }}>Domain Scanner</h1>

        <Card padding="xl" style={{ marginBottom: "var(--space-6)" }}>
            <h2 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "var(--space-3)", marginTop: 0 }}>Scan a domain for SSL/TLS issues</h2>
            <div style={{ display: "flex", gap: "var(--space-3)" }}>
                <Input value={url} onChange={e => setUrl(e.target.value)} placeholder="e.g. openclaw.dev" style={{ flex: 1, fontFamily: "var(--font-mono)" }} autoFocus />
                <Button variant="primary" onClick={handleScan} disabled={scanning} icon={scanning ? <Loader2 className="spin" size={18} /> : <Search size={18} />} style={{ paddingLeft: 24, paddingRight: 24 }}>
                    Scan Now
                </Button>
            </div>
        </Card>

        {result && (
            <Card padding="xl">
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginBottom: "var(--space-6)" }}>
                    {result.valid ? <CheckCircle2 size={32} style={{ color: "var(--color-success)" }} /> : <XCircle size={32} style={{ color: "var(--color-danger)" }} />}
                    <div>
                        <h2 style={{ fontSize: "20px", fontWeight: 700, fontFamily: "var(--font-mono)", margin: 0 }}>{result.domain}</h2>
                        <p style={{ color: "var(--color-success)", fontWeight: 600, margin: '4px 0 0 0' }}>Connection is secure</p>
                    </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)" }}>
                    <div>
                        <div style={{ color: "var(--color-text-secondary)", fontSize: "13px", marginBottom: 4 }}>Issuer</div>
                        <div style={{ fontWeight: 500 }}>{result.issuer}</div>
                    </div>
                    <div>
                        <div style={{ color: "var(--color-text-secondary)", fontSize: "13px", marginBottom: 4 }}>Protocol</div>
                        <div style={{ fontWeight: 500, fontFamily: "var(--font-mono)" }}>{result.protocol}</div>
                    </div>
                    <div>
                        <div style={{ color: "var(--color-text-secondary)", fontSize: "13px", marginBottom: 4 }}>Valid From</div>
                        <div className="mono" style={{ color: "var(--color-text-secondary)" }}>{result.validFrom}</div>
                    </div>
                    <div>
                        <div style={{ color: "var(--color-text-secondary)", fontSize: "13px", marginBottom: 4 }}>Valid To</div>
                        <div className="mono" style={{ color: "var(--color-text-secondary)" }}>{result.validTo}</div>
                    </div>
                </div>
            </Card>
        )}
        <style>{`@keyframes spin { 100% { transform: rotate(360deg); } } .spin { animation: spin 1s linear infinite; }`}</style>
    </div>);
}
