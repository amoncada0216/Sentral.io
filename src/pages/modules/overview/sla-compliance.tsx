export default function SlaCompliance() {
  return (
    <section
      className="w-full rounded-xl bg-muted flex flex-col p-2 items-center"
      role="region"
      aria-labelledby="sla-compliance-title"
      aria-describedby="sla-compliance-value sla-compliance-delta"
    >
      {/* Title */}
      <div
        id="sla-compliance-title"
        className="text-xs uppercase tracking-wide text-muted-foreground"
      >
        SLA Compliance
      </div>

      {/* Value */}
      <div
        id="sla-compliance-value"
        className="text-2xl font-bold tracking-tight"
        aria-live="polite"
      >
        98.6%
      </div>

      {/* Delta */}
      <div
        id="sla-compliance-delta"
        className="flex flex-col items-center text-sm"
      >
        <div
          className="flex items-center font-medium text-emerald-600"
          aria-label="Increase of 0.8 percent compared to last month"
        >
          +0.8%
        </div>
        <span className="text-xs text-muted-foreground">vs last month</span>
      </div>
    </section>
  );
}
