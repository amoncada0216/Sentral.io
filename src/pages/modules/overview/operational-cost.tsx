export default function OperationalCost() {
  return (
    <section
      className="w-full rounded-xl bg-muted flex flex-col p-2 items-center"
      role="region"
      aria-labelledby="operational-cost-title"
      aria-describedby="operational-cost-value operational-cost-delta"
    >
      {/* Title */}
      <div
        id="operational-cost-title"
        className="text-xs uppercase tracking-wide text-muted-foreground"
      >
        Operational Cost
      </div>

      {/* Value */}
      <div
        id="operational-cost-value"
        className="text-2xl font-bold tracking-tight"
        aria-live="polite"
      >
        $18,742.10
      </div>

      {/* Delta */}
      <div
        id="operational-cost-delta"
        className="flex flex-col items-center text-sm"
      >
        <div
          className="flex items-center font-medium text-rose-600"
          aria-label="Decrease of 2.1 percent compared to last month"
        >
          −2.1%
        </div>
        <span className="text-xs text-muted-foreground">vs last month</span>
      </div>
    </section>
  );
}
