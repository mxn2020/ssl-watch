import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import CertificatesPage from "./pages/CertificatesPage";
import ScannerPage from "./pages/ScannerPage";
import AlertsPage from "./pages/AlertsPage";

export default function App() {
  return (<BrowserRouter>
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ marginLeft: "var(--sidebar-width)", flex: 1, minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<CertificatesPage />} />
          <Route path="/scanner" element={<ScannerPage />} />
          <Route path="/alerts" element={<AlertsPage />} />
          <Route path="/settings" element={<CertificatesPage />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>);
}
