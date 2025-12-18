export default function Welcome() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      {/* KPI SUMMARY */}
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
        <div className="bg-muted aspect-video rounded-xl" />
        <div className="bg-muted aspect-video rounded-xl" />
        <div className="bg-muted aspect-video rounded-xl" />
        <div className="bg-muted aspect-video rounded-xl" />
        <div className="bg-muted aspect-video rounded-xl" />
        <div className="bg-muted aspect-video rounded-xl" />
      </div>
      {/* PERFORMANCE OVER TIME */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
        <div className="bg-muted aspect-video rounded-xl" />
        <div className="bg-muted aspect-video rounded-xl" />
      </div>
      {/* RECENT ACTIVITY FEED / ALERTS & INSIGHTS */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
        <div className="bg-muted aspect-video rounded-xl" />
        <div className="bg-muted aspect-video rounded-xl" />
      </div>
    </div>
  );
}
