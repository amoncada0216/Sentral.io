import PerformanceOverTime from "./modules/overview/performance-over-time";
import KpiSummary from "./modules/overview/kpi-summary";

export default function Overview() {
  return (
    <div className="flex flex-1 overflow-hidden border-2 border-fuchsia-500 flex-col gap-4 p-4">
      {/* SMALL GRID */}
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
        <KpiSummary />
      </div>
      {/* BIG GRID */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-1 xl:grid-cols-2 border border-red-500">
        <PerformanceOverTime />
        <div className="bg-muted aspect-video rounded-xl" />
        <div className="bg-muted aspect-video rounded-xl" />
        <div className="bg-muted aspect-video rounded-xl" />
      </div>
    </div>
  );
}
