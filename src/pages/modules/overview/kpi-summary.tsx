import { Card } from "@/components/ui/card";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { useCountUp } from "@/hooks/useCountUp";
import { Line, LineChart } from "recharts";
import monthlyRevenue from "../../../../mock-data/monthly-revenue.json";
import conversionRate from "../../../../mock-data/conversion-rate.json";
import netMargin from "../../../../mock-data/net-margin.json";
import operationalCost from "../../../../mock-data/operational-cost.json";
import slaCompliance from "../../../../mock-data/sla-compliance.json";
import activeUsers from "../../../../mock-data/active-users.json";

import { calcChange } from "@/hooks/calcChange";

const revenueChange = calcChange(monthlyRevenue);
const usersChange = calcChange(activeUsers);
const costChange = calcChange(operationalCost);
const conversionChange = calcChange(conversionRate);
const slaChange = calcChange(slaCompliance);
const marginChange = calcChange(netMargin);

const data = [
  {
    title: "TOTAL REVENUE",
    prefix: "$",
    suffix: "",
    numericValue: revenueChange.value,
    decimals: 2,
    change: revenueChange.change,
  },
  {
    title: "ACTIVE USERS",
    prefix: "",
    suffix: "",
    numericValue: usersChange.value,
    decimals: 0,
    change: usersChange.change,
  },
  {
    title: "OPERATIONAL COST",
    prefix: "$",
    suffix: "",
    numericValue: costChange.value,
    decimals: 2,
    change: costChange.change,
  },
  {
    title: "CONVERSION RATE",
    prefix: "",
    suffix: "%",
    numericValue: conversionChange.value,
    decimals: 2,
    change: conversionChange.change,
  },
  {
    title: "SLA COMPLIANCE",
    prefix: "",
    suffix: "%",
    numericValue: slaChange.value,
    decimals: 2,
    change: slaChange.change,
  },
  {
    title: "NET MARGIN",
    prefix: "",
    suffix: "%",
    numericValue: marginChange.value,
    decimals: 2,
    change: marginChange.change,
  },
];

const chartData = [
  { desktop: 186 },
  { desktop: 305 },
  { desktop: 237 },
  { desktop: 73 },
  { desktop: 209 },
  { desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

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
            className="grid grid-cols-2 rounded-xl border-0 justify-between p-3 items-center"
            role="region"
            aria-labelledby={`${item.title}-title`}
            aria-describedby={`${item.title}-value ${item.title}-delta`}
          >
            {/* LEFT */}
            <div className="flex flex-col gap-1">
              <div
                id={`${item.title}-title`}
                className="text-xs uppercase tracking-wide text-muted-foreground"
              >
                {item.title}
              </div>

              <div
                id={`${item.title}-value`}
                className="text-2xl font-bold tracking-tight"
                aria-live="polite"
              >
                {item.prefix}
                {value.toLocaleString()}
                {item.sufix}
              </div>

              <div
                id={`${item.title}-delta`}
                className={`text-sm font-medium ${
                  isNegative ? "text-rose-400" : "text-emerald-400"
                }`}
              >
                {item.change}
              </div>
            </div>

            {/* RIGHT */}
            <ChartContainer
              className="flex h-full"
              config={chartConfig}
            >
              <LineChart
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <Line
                  dataKey="desktop"
                  type="linear"
                  stroke="var(--color-desktop)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </Card>
        );
      })}
    </>
  );
}
