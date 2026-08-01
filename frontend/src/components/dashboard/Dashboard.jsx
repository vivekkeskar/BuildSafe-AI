import { useEffect, useState } from "react";
import "./Dashboard.css";
import StatCard from "./StatCard";
import { getInspectionHistory } from "../../services/api";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalInspections: 0,
    averageCompliance: 0,
    criticalCount: 0,
    lowCount: 0,
  });

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const history = await getInspectionHistory();

      const totalInspections = history.length;

      const averageCompliance =
        totalInspections === 0
          ? 0
          : Math.round(
              history.reduce(
                (sum, item) => sum + item.compliance,
                0
              ) / totalInspections
            );

      const criticalCount = history.filter(
        (item) => item.risk.level === "Critical"
      ).length;

      const lowCount = history.filter(
        (item) => item.risk.level === "Low"
      ).length;

      setStats({
        totalInspections,
        averageCompliance,
        criticalCount,
        lowCount,
      });

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="dashboard-section">

      <div className="dashboard-title">
        <p className="dashboard-tag">
          LIVE ANALYTICS
        </p>

        <h2>Construction Safety Dashboard</h2>

        <p className="dashboard-description">
          Real-time inspection statistics powered by AI and MongoDB.
        </p>
      </div>

      <div className="dashboard-grid">

        <StatCard
          title="Total Inspections"
          value={stats.totalInspections}
          subtitle="Stored inspections"
          color="orange"
        />

        <StatCard
          title="Compliance"
          value={`${stats.averageCompliance}%`}
          subtitle="Average score"
          color="green"
        />

        <StatCard
          title="Critical Risk"
          value={stats.criticalCount}
          subtitle="Immediate action"
          color="red"
        />

        <StatCard
          title="Safe Inspections"
          value={stats.lowCount}
          subtitle="Low risk"
          color="blue"
        />

      </div>

    </section>
  );
}