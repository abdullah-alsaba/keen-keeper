import useApp from "../context/useApp";
import { useMemo, useState } from "react";
import callIcon from "../assets/call.png";
import textIcon from "../assets/text.png";
import videoIcon from "../assets/video.png";

export default function Timeline() {
  const { timeline } = useApp();
  const [filter, setFilter] = useState("All");
  const filteredTimeline = useMemo(() => {
    if (filter === "All") {
      return timeline;
    }
    return timeline.filter((entry) => entry.type === filter);
  }, [filter, timeline]);
  const iconMap = {
    Call: callIcon,
    Text: textIcon,
    Video: videoIcon,
  };
  const filterMap = {
    All: "All",
    Call: "Call",
    Text: "Text",
    Video: "Video",
  };

  return (
    <div className="bg-white border border-[#e3ebe7] rounded-3xl p-6">
      <h1 className="text-3xl font-bold text-[#1f332a]">Timeline</h1>
      <div className="mt-5 flex items-center gap-3">
        <p className="text-sm text-[#496157] font-medium">Filter Timeline:</p>
        <select
          className="select h-10 min-h-10 w-[170px] bg-[#eef4f1] border border-[#d4e1db] rounded-xl text-sm"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        >
          {Object.entries(filterMap).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-6 space-y-3">
        {filteredTimeline.map((entry) => (
          <div key={entry.id} className="border border-[#e3ebe7] rounded-2xl p-4 flex items-center gap-4">
            <div className="w-9 h-9 rounded-full bg-[#eef4f1] flex items-center justify-center shrink-0">
              <img src={iconMap[entry.type]} alt={entry.type} className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-[#1f332a] text-sm">{entry.title}</p>
              <p className="text-xs text-[#5f746a] mt-1">{entry.date}</p>
            </div>
          </div>
        ))}
        {filteredTimeline.length === 0 && (
          <p className="text-[#5f746a] py-6 text-center">No interactions yet.</p>
        )}
      </div>
    </div>
  );
}
