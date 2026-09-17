import { ArrowUpRight, CheckCircle2, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import { mockScans } from "../../data/mockData";

export default function RecentScans() {
  return (
    <div className="table-card">
      <div className="card-heading">
        <div><span className="eyebrow">ACTIVITY</span><h3>Recent scans</h3></div>
        <span className="muted">{mockScans.length} recent</span>
      </div>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Target</th><th>Type</th><th>Scanner</th><th>Issues</th><th>Status</th><th /></tr></thead>
          <tbody>
            {mockScans.map((scan) => {
              const issues = scan.critical + scan.high + scan.medium + scan.low;
              return (
                <tr key={scan.id}>
                  <td><strong>{scan.target}</strong><small>{scan.id} · {scan.date}</small></td>
                  <td>{scan.type}</td>
                  <td>{scan.scanner}</td>
                  <td>{issues}</td>
                  <td><span className={scan.status === "Secure" ? "status secure" : "status warning"}>
                    {scan.status === "Secure" ? <CheckCircle2 size={14} /> : <Clock3 size={14} />} {scan.status}
                  </span></td>
                  <td><Link className="table-link" to={`/scans/${scan.id}`}><ArrowUpRight size={16} /></Link></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}