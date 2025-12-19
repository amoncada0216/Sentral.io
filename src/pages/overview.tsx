import PerformanceOverTime from "./modules/overview/performance-over-time";
import KpiSummary from "./modules/overview/kpi-summary";
import OperationalHealth from "./modules/overview/operational-health";

export default function Overview() {
  return (
    <div className="flex flex-1 overflow-hidden border-2 border-fuchsia-500 flex-col gap-4 p-4">
      {/* SMALL GRID */}
      <div className="grid gap-4 grid-cols-6">
        <KpiSummary />
      </div>
      {/* BIG GRID */}
      <div className="grid auto-rows-fr flex-1 min-h-0 gap-4 grid-cols-2">
        <PerformanceOverTime />
        <OperationalHealth />
        <PerformanceOverTime />
        <OperationalHealth />
      </div>
    </div>
  );
}
