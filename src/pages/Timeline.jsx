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
  const filters = ["All", "Call", "Text", "Video"];

  return (
    <div className="max-w-[980px] mx-auto">
      <h1 className="text-[44px] md:text-[52px] leading-tight font-bold text-[#1f2937]">Timeline</h1>
      <div className="mt-5 w-[230px] relative">
        <select
          className="w-full h-10 pl-3.5 pr-9 rounded-lg border border-[#dfe6e2] bg-[#f8fbf9] text-[14px] text-[#5f746a] appearance-none"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        >
          {filters.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9aa8a2] pointer-events-none">
          ▾
        </span>
      </div>
      <div className="mt-6 space-y-3">
        {filteredTimeline.map((entry) => (
          <div
            key={entry.id}
            className="bg-white border border-[#e1e8e4] rounded-lg px-4 py-3 flex items-center gap-4"
          >
            <div className="w-8 h-8 rounded-full bg-[#f3f7f5] flex items-center justify-center shrink-0">
              <img src={iconMap[entry.type]} alt={entry.type} className="w-4 h-4 opacity-90" />
            </div>
            <div>
              <p className="font-semibold text-[#2f5245] text-[18px] leading-none">{entry.type}</p>
              <p className="text-[15px] text-[#6f8178] mt-1">{entry.title.replace(`${entry.type} with `, `with `)}</p>
              <p className="text-[15px] text-[#71827a] font-semibold">{entry.date}</p>
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
