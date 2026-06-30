import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", earnings: 3000 },
  { day: "Tue", earnings: 4800 },
  { day: "Wed", earnings: 4300 },
  { day: "Thu", earnings: 6200 },
  { day: "Fri", earnings: 4500 },
  { day: "Sat", earnings: 5900 },
  { day: "Sun", earnings: 6100 },
];

export default function EarningsChart() {
  return (
    <div
      className="
        w-full
        max-w-full
        sm:max-w-xl
        lg:max-w-3xl
        xl:max-w-4xl
        bg-white
        rounded-2xl
        border
        border-gray-200
        shadow-sm
        p-4
        sm:p-6
      "
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-lg sm:text-xl font-semibold">
          Earnings Overview
        </h2>

        <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none">
          <option>This Week</option>
          <option>This Month</option>
        </select>
      </div>

      {/* Chart */}
      <div className="w-full h-[220px] sm:h-[280px] lg:h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -15,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="earning" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ff5a76" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#ff5a76" stopOpacity={0.03} />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              stroke="#ececec"
            />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => `₹${value / 1000}K`}
            />

            <Tooltip
              cursor={false}
              contentStyle={{
                borderRadius: "12px",
                border: "none",
                backgroundColor: "#111827",
                color: "#fff",
              }}
              formatter={(value) => [`₹${value.toLocaleString()}`, "Revenue"]}
            />

            <Area
              type="monotone"
              dataKey="earnings"
              stroke="#ff5a76"
              strokeWidth={3}
              fill="url(#earning)"
              dot={{
                r: 4,
                fill: "#ff5a76",
              }}
              activeDot={{
                r: 6,
                fill: "#ff5a76",
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}