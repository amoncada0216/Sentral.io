export default function NetMargin() {
  return (
    <section
      className="w-full rounded-xl bg-muted flex flex-col p-2 items-center"
      role="region"
      aria-labelledby="net-margin-title"
      aria-describedby="net-margin-value net-margin-delta"
    >
      {/* Title */}
      <div
        id="net-margin-title"
        className="text-xs uppercase tracking-wide text-muted-foreground"
      >
        Net Margin
      </div>

      {/* Value */}
      <div
        id="net-margin-value"
        className="text-2xl font-bold tracking-tight"
        aria-live="polite"
      >
        22.4%
      </div>

      {/* Delta */}
      <div
        id="net-margin-delta"
        className="flex flex-col items-center text-sm"
      >
        <div
          className="flex items-center font-medium text-emerald-600"
          aria-label="Increase of 1.1 percent compared to last month"
        >
          +1.1%
        </div>
        <span className="text-xs text-muted-foreground">vs last month</span>
      </div>
    </section>
  );
}
