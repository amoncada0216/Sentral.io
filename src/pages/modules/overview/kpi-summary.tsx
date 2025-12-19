import { Card } from "@/components/ui/card";
import { useCountUp } from "@/hooks/useCountUp";

const data = [
  {
    title: "TOTAL REVENUE",
    prefix: "$",
    numericValue: 45231.89,
    decimals: 2,
    change: "+1.28%",
  },
  {
    title: "ACTIVE USERS",
    prefix: "",
    numericValue: 12476,
    decimals: 2,
    change: "+3.62%",
  },
  {
    title: "OPERATIONAL COST",
    prefix: "$",
    numericValue: 18742.1,
    decimals: 2,
    change: "+1.28%",
  },
  {
    title: "CONVERSION RATE",
    prefix: "",
    numericValue: 3.45,
    decimals: 2,
    change: "−2.1%",
  },
  {
    title: "SLA COMPLIANCE",
    prefix: "",
    numericValue: 99.9,
    decimals: 2,
    change: "+0.8%",
  },
  {
    title: "NET MARGIN",
    prefix: "",
    numericValue: 22.4,
    decimals: 2,
    change: "+1.11%",
  },
];

export default function KpiSummary() {
  return (
    <>
      {data.map((item, index) => {
        const value = useCountUp(item.numericValue, {
          duration: 1.5,
          decimals: item.decimals,
          delay: index * 0.08,
        });

        const isNegative =
          item.change.trim().startsWith("−") ||
          item.change.trim().startsWith("-");

        return (
          <Card
            key={item.title}
            className="w-full rounded-xl border-0 flex flex-col justify-between p-2 gap-2 items-center"
            role="region"
            aria-labelledby={`${item.title}-title`}
            aria-describedby={`${item.title}-value ${item.title}-delta`}
          >
            {/* Title */}
            <div
              id={`${item.title}-title`}
              className="text-xs uppercase tracking-wide text-muted-foreground"
            >
              {item.title}
            </div>

            {/* Value */}
            <div
              id={`${item.title}-value`}
              className="text-2xl font-bold tracking-tight"
              aria-live="polite"
            >
              {item.prefix}
              {value.toLocaleString()}
            </div>

            {/* Delta */}
            <div
              id={`${item.title}-delta`}
              className="flex flex-col items-center text-sm"
            >
              <div
                className={`font-medium ${
                  isNegative ? "text-rose-400" : "text-emerald-400"
                }`}
                aria-label={`${isNegative ? "Decrease" : "Increase"} of ${
                  item.change
                } compared to last month`}
              >
                {item.change}
              </div>
            </div>
          </Card>
        );
      })}
    </>
  );
}
