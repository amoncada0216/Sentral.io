export default function ConversionRate() {
  return (
    <section
      className="w-full rounded-xl bg-muted flex flex-col p-2 items-center"
      role="region"
      aria-labelledby="conversion-rate-title"
      aria-describedby="conversion-rate-value conversion-rate-delta"
    >
      {/* Title */}
      <div
        id="conversion-rate-title"
        className="text-xs uppercase tracking-wide text-muted-foreground"
      >
        Conversion Rate
      </div>

      {/* Value */}
      <div
        id="conversion-rate-value"
        className="text-2xl font-bold tracking-tight"
        aria-live="polite"
      >
        4.72%
      </div>

      {/* Delta */}
      <div
        id="conversion-rate-delta"
        className="flex flex-col items-center text-sm"
      >
        <div
          className="flex items-center font-medium text-emerald-600"
          aria-label="Increase of 0.34 percent compared to last month"
        >
          +0.34%
        </div>
        <span className="text-xs text-muted-foreground">vs last month</span>
      </div>
    </section>
  );
}
