import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Critical", value: 3 },
  { name: "High", value: 14 },
  { name: "Medium", value: 38 },
  { name: "Low", value: 52 },
];

export default function SecurityChart() {
  return (
    <div className="chart-card">
      <div className="card-heading">
        <div><span className="eyebrow">OVERVIEW</span><h3>Findings by severity</h3></div>
        <span className="muted">Current posture</span>
      </div>
      <div className="chart-body">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" innerRadius={66} outerRadius={94} paddingAngle={3}>
              {data.map((entry, index) => <Cell key={entry.name} fill={["#ef4444", "#f59e0b", "#3b82f6", "#64748b"][index]} />)}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="legend">
          {data.map((item, index) => (
            <div key={item.name}><i style={{ background: ["#ef4444", "#f59e0b", "#3b82f6", "#64748b"][index] }} /> {item.name}<strong>{item.value}</strong></div>
          ))}
        </div>
      </div>
    </div>
  );
}