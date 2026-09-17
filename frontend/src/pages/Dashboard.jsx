import { Activity, ArrowRight, GitBranch, ShieldCheck } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import SeverityCards from "../components/dashboard/SeverityCards";
import SecurityChart from "../components/dashboard/SecurityChart";
import RecentScans from "../components/dashboard/RecentScans";
import AIRecommendations from "../components/dashboard/AIRecommendations";

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <Navbar />
      <main className="dashboard-container">
        <div className="dashboard-header">
          <div>
            <div className="eyebrow">SECURITY POSTURE</div>
            <h1>Security Dashboard</h1>
            <p>Centralized visibility into vulnerabilities, misconfigurations, runtime findings and remediation guidance.</p>
          </div>
          <div className="dashboard-actions">
            <span className="connection"><span /> Scanner services online</span>
            <a href="/#scan" className="button button-primary"><ShieldCheck size={17} /> New scan</a>
          </div>
        </div>

        <div className="posture-banner">
          <div className="posture-status"><div className="status-ring"><Activity size={22} /></div><div><span>Current security posture</span><strong>Needs attention</strong></div></div>
          <div className="posture-stats"><span><b>107</b> total findings</span><span><b>17</b> high priority</span><span>Last scan <b>10:42 AM</b></span></div>
        </div>

        <SeverityCards />

        <div className="dashboard-two-col">
          <SecurityChart />
          <AIRecommendations />
        </div>

        <RecentScans />

        <div className="cicd-card">
          <div className="cicd-icon"><GitBranch size={24} /></div>
          <div><span className="eyebrow">SHIFT-LEFT SECURITY</span><h3>Connect security checks to your CI/CD pipeline.</h3><p>Use GitHub Actions to trigger security analysis during development and deployment.</p></div>
          <button className="button button-secondary">View integration <ArrowRight size={16} /></button>
        </div>
      </main>
    </div>
  );
}