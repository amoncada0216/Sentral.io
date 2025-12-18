export default function ActiveUsers() {
  return (
    <section
      className="w-full rounded-xl bg-muted flex flex-col p-2 items-center"
      role="region"
      aria-labelledby="active-users-title"
      aria-describedby="active-users-value active-users-delta"
    >
      {/* Title */}
      <div
        id="active-users-title"
        className="text-xs uppercase tracking-wide text-muted-foreground"
      >
        Active Users
      </div>

      {/* Value */}
      <div
        id="active-users-value"
        className="text-2xl font-bold tracking-tight"
        aria-live="polite"
      >
        12,483
      </div>

      {/* Delta */}
      <div
        id="active-users-delta"
        className="flex flex-col items-center text-sm"
      >
        <div
          className="flex items-center font-medium text-emerald-600"
          aria-label="Increase of 3.6 percent compared to last month"
        >
          +3.6%
        </div>
        <span className="text-xs text-muted-foreground">vs last month</span>
      </div>
    </section>
  );
}
