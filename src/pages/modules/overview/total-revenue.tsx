export default function TotalRevenue() {
  return (
    <section
      className="w-full rounded-xl bg-muted flex flex-col p-2 items-center"
      role="region"
      aria-labelledby="total-revenue-title"
      aria-describedby="total-revenue-value total-revenue-delta"
    >
      {/* Title */}
      <div
        id="total-revenue-title"
        className="text-xs uppercase tracking-wide text-muted-foreground"
      >
        Total Revenue
      </div>

      {/* Value */}
      <div
        id="total-revenue-value"
        className="text-2xl font-bold tracking-tight"
        aria-live="polite"
      >
        $45,231.89
      </div>

      {/* Delta */}
      <div
        id="total-revenue-delta"
        className="flex flex-col items-center text-sm"
      >
        <div
          className="flex items-center font-medium text-emerald-600"
          aria-label="Increase of 1.28 percent compared to last month"
        >
          +1.28%
        </div>
        <span className="text-xs text-muted-foreground">
          vs last month
        </span>
      </div>
    </section>
  );
}
