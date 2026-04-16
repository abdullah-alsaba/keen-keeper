import { useParams } from "react-router-dom";
import useApp from "../context/useApp";
import Loader from "../components/Loader";
import callIcon from "../assets/call.png";
import textIcon from "../assets/text.png";
import videoIcon from "../assets/video.png";
import NotFound from "./NotFound";

export default function FriendDetails() {
  const { id } = useParams();
  const { friends, friendsLoading, addInteraction } = useApp();
  const friend = friends.find((item) => item.id === Number(id));
  const statusMap = {
    overdue: "bg-[#fce8e8] text-[#b42318]",
    "almost due": "bg-[#fff5db] text-[#b76e00]",
    "on-track": "bg-[#e9f7ee] text-[#15803d]",
  };

  if (friendsLoading) {
    return <Loader />;
  }

  if (!friend) {
    return <NotFound />;
  }

  return (
    <div className="max-w-[1040px] mx-auto grid lg:grid-cols-[320px_1fr] gap-4">
      <section>
        <div className="bg-white border border-[#dde5e1] rounded-md px-6 py-5 text-center">
          <img
            src={friend.picture}
            alt={friend.name}
            className="w-16 h-16 rounded-full object-cover mx-auto"
          />
          <h1 className="text-2xl md:text-[28px] leading-none font-semibold text-[#1f332a] mt-4">
            {friend.name}
          </h1>
          <span
            className={`inline-flex mt-3 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wide ${statusMap[friend.status]}`}
          >
            {friend.status}
          </span>
          <div className="flex flex-wrap justify-center gap-1 mt-2">
            {friend.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-[2px] rounded-full text-[10px] bg-[#f0f5f3] text-[#375247]"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-[#70877d] mt-3 text-sm italic">"{friend.bio}"</p>
          <p className="text-xs text-[#72877d] mt-2">Preferred: email</p>
        </div>
        <div className="mt-2 space-y-2">
          <button className="w-full h-11 border border-[#dde5e1] rounded-md bg-white text-[#2f4a3f] text-sm font-medium">
            Snooze 2 Weeks
          </button>
          <button className="w-full h-11 border border-[#dde5e1] rounded-md bg-white text-[#2f4a3f] text-sm font-medium">
            Archive
          </button>
          <button className="w-full h-11 border border-[#f1dddd] rounded-md bg-white text-[#d84848] text-sm font-medium">
            Delete
          </button>
        </div>
      </section>
      <section className="space-y-4">
        <div className="grid sm:grid-cols-3 gap-3">
          <div className="bg-white border border-[#dde5e1] rounded-md p-4 text-center">
            <p className="text-[28px] md:text-[38px] leading-none font-semibold text-[#27493e]">
              {friend.days_since_contact}
            </p>
            <p className="text-sm text-[#657d73] mt-2">Days Since Contact</p>
          </div>
          <div className="bg-white border border-[#dde5e1] rounded-md p-4 text-center">
            <p className="text-[28px] md:text-[38px] leading-none font-semibold text-[#27493e]">{friend.goal}</p>
            <p className="text-sm text-[#657d73] mt-2">Goal (Days)</p>
          </div>
          <div className="bg-white border border-[#dde5e1] rounded-md p-4 text-center">
            <p className="text-[24px] md:text-[38px] leading-none font-semibold text-[#27493e] break-words">
              {new Date(friend.next_due_date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <p className="text-sm text-[#657d73] mt-2">Next Due</p>
          </div>
        </div>
        <div className="bg-white border border-[#dde5e1] rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-[#1f332a]">Relationship Goal</h2>
            <button className="btn h-8 min-h-8 px-4 rounded-md bg-[#f3f6f4] border border-[#dde5e1] text-[#294739] text-xs">
              Edit
            </button>
          </div>
          <p className="text-[#53695f] mt-3 text-[18px]">
            Connect every <span className="font-semibold">{friend.goal} days</span>
          </p>
        </div>
        <div className="bg-white border border-[#dde5e1] rounded-md p-4">
          <h2 className="text-xl font-semibold text-[#1f332a]">Quick Check-In</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
            <button
              onClick={() => addInteraction("Call", friend.name)}
              className="h-[68px] border border-[#dde5e1] rounded-md bg-[#f5f7f6] text-[#1f332a] text-base flex flex-col justify-center items-center gap-1"
            >
              <img src={callIcon} alt="Call" className="w-4 h-4" />
              Call
            </button>
            <button
              onClick={() => addInteraction("Text", friend.name)}
              className="h-[68px] border border-[#dde5e1] rounded-md bg-[#f5f7f6] text-[#1f332a] text-base flex flex-col justify-center items-center gap-1"
            >
              <img src={textIcon} alt="Text" className="w-4 h-4" />
              Text
            </button>
            <button
              onClick={() => addInteraction("Video", friend.name)}
              className="h-[68px] border border-[#dde5e1] rounded-md bg-[#f5f7f6] text-[#1f332a] text-base flex flex-col justify-center items-center gap-1"
            >
              <img src={videoIcon} alt="Video" className="w-4 h-4" />
              Video
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
