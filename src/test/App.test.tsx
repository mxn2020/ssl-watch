import { describe, it, expect } from "vitest"; import { render, screen } from "@testing-library/react"; import { MemoryRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar"; import CertificatesPage from "../pages/CertificatesPage"; import ScannerPage from "../pages/ScannerPage"; import AlertsPage from "../pages/AlertsPage";
function wrap(ui: React.ReactElement) { return render(<MemoryRouter>{ui}</MemoryRouter>); }

describe("Pages", () => {
    it("Sidebar renders", () => { wrap(<Sidebar />); expect(screen.getByText("SSL Watch")).toBeInTheDocument(); });
    it("CertificatesPage renders", () => { wrap(<CertificatesPage />); expect(screen.getByText("Monitored Certificates")).toBeInTheDocument(); });
    it("ScannerPage renders", () => { wrap(<ScannerPage />); expect(screen.getByText("Domain Scanner")).toBeInTheDocument(); });
    it("AlertsPage renders", () => { wrap(<AlertsPage />); expect(screen.getAllByText("Alerts Setup")[0]).toBeInTheDocument(); });
});
