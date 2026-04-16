import useApp from "../context/useApp";
import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip } from "recharts";
import callIcon from "../assets/call.png";
import textIcon from "../assets/text.png";
import videoIcon from "../assets/video.png";

export default function Stats() {
  const { statsData } = useApp();
  const colors = ["#1f6a54", "#2f8f72", "#6dc2a8"];
  const iconMap = {
    Call: callIcon,
    Text: textIcon,
    Video: videoIcon,
  };

  return (
    <div className="bg-white border border-[#e3ebe7] rounded-3xl p-6">
      <h1 className="text-3xl font-bold text-[#1f332a]">Friendship Analytics</h1>
      <div className="h-[360px] mt-6">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={statsData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={115}
              innerRadius={65}
              paddingAngle={5}
            >
              {statsData.map((entry, index) => (
                <Cell key={entry.name} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="grid sm:grid-cols-3 gap-3">
        {statsData.map((entry, index) => (
          <div key={entry.name} className="bg-[#f3f7f5] rounded-2xl p-4">
            <div className="flex items-center gap-2">
              <img src={iconMap[entry.name]} alt={entry.name} className="w-4 h-4" />
              <p className="text-sm text-[#5f746a]">{entry.name}</p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-2xl font-semibold text-[#1f332a]">{entry.value}</p>
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: colors[index % colors.length] }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
