import { ArrowLeft, BrainCircuit, CheckCircle2, CircleAlert, Wrench } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import { mockScans, mockVulnerabilities } from "../data/mockData";

export default function ScanDetails() {
  const { scanId } = useParams();
  const scan = mockScans.find((item) => item.id === scanId) || mockScans[0];

  return (
    <div className="dashboard-page">
      <Navbar />
      <main className="dashboard-container">
        <Link to="/dashboard" className="back-link"><ArrowLeft size={16} /> Back to dashboard</Link>
        <div className="scan-detail-header">
          <div><div className="eyebrow">{scan.id}</div><h1>{scan.target}</h1><p>{scan.type} · {scan.scanner} · {scan.date}</p></div>
          <span className={scan.status === "Secure" ? "status secure large" : "status warning large"}>{scan.status === "Secure" ? <CheckCircle2 size={16} /> : <CircleAlert size={16} />}{scan.status}</span>
        </div>

        <div className="severity-grid detail-severity">
          {[
            ["Critical", scan.critical, "critical"],
            ["High", scan.high, "high"],
            ["Medium", scan.medium, "medium"],
            ["Low", scan.low, "low"],
          ].map(([label, value, tone]) => <div className="severity-card compact" key={label}><div className={`severity-bar ${tone}`} /><div><span>{label}</span><strong>{value}</strong></div></div>)}
        </div>

        <div className="detail-grid">
          <div className="table-card">
            <div className="card-heading"><div><span className="eyebrow">FINDINGS</span><h3>Detected security issues</h3></div></div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>ID</th><th>Component</th><th>Severity</th><th>Recommended fix</th></tr></thead>
                <tbody>{mockVulnerabilities.map((v) => <tr key={v.id}><td><strong>{v.id}</strong><small>{v.package}</small></td><td>{v.component}</td><td><span className={`severity-text ${v.severity.toLowerCase()}`}>{v.severity}</span></td><td>{v.fix}</td></tr>)}</tbody>
              </table>
            </div>
          </div>

          <aside className="detail-side">
            <div className="ai-card">
              <div className="ai-title"><div className="ai-icon"><BrainCircuit size={22} /></div><div><span className="eyebrow">AI ANALYSIS</span><h3>What does this mean?</h3></div></div>
              <p>The scanner findings are interpreted with their affected component and severity so developers can understand why the issue matters and what to review next.</p>
              <div className="recommendation"><Wrench size={18} /><div><strong>Suggested remediation</strong><p>Patch vulnerable packages, review security contexts and rescan the artifact after changes.</p></div></div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}