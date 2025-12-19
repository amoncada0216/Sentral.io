export function calcChange(series: { numericValue: number }[]) {
  const last = series.at(-1)?.numericValue ?? 0;
  const prev = series.at(-2)?.numericValue ?? last;

  const change = prev === 0 ? 0 : ((last - prev) / prev) * 100;

  return {
    value: last,
    change: `${change.toFixed(1)}%`,
    isNegative: change < 0,
  };
}
