import useApp from "../context/useApp";
import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip } from "recharts";

function StatsTooltip({ active, payload }) {
  if (!active || !payload || payload.length === 0) {
    return null;
  }
  const item = payload[0];
  return (
    <div className="bg-white border border-[#dbe5e0] rounded-md px-3 py-2 text-sm text-[#26493d] shadow-sm">
      {item.name}: {item.value}
    </div>
  );
}

export default function Stats() {
  const { statsData } = useApp();
  const colorMap = {
    Text: "#7C3AED",
    Call: "#1f5f4b",
    Video: "#35A56B",
  };
  const totalInteractions = statsData.reduce((sum, item) => sum + item.value, 0);
  const visibleStats = statsData.filter((item) => item.value > 0);

  return (
    <div className="max-w-[980px] mx-auto">
      <h1 className="text-4xl sm:text-5xl leading-tight font-bold text-[#1f2937]">
        Friendship Analytics
      </h1>
      {totalInteractions === 0 ? (
        <div className="h-[280px] mt-6 flex items-center justify-center bg-[#f7faf8] border border-[#e3ebe7] rounded-lg">
          <p className="text-[#5f746a] text-base">No interaction data yet.</p>
        </div>
      ) : (
        <>
          <div className="mt-6 bg-white border border-[#e3ebe7] rounded-lg px-4 sm:px-5 pt-5 pb-4">
            <p className="text-lg sm:text-xl font-semibold text-[#3b6154]">By Interaction Type</p>
            <div className="h-[260px] sm:h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={visibleStats}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="46%"
                  outerRadius={74}
                  innerRadius={52}
                  paddingAngle={4}
                  stroke="#f8fbf9"
                  strokeWidth={6}
                >
                  {visibleStats.map((entry) => (
                    <Cell key={entry.name} fill={colorMap[entry.name]} />
                  ))}
                </Pie>
                <Tooltip content={<StatsTooltip />} />
              </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 -mt-4 sm:-mt-5 pb-1">
              {visibleStats.map((entry) => (
                <div key={entry.name} className="flex items-center gap-1.5">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: colorMap[entry.name] }}
                  />
                  <span className="text-[12px] text-[#5d7067]">{entry.name}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
