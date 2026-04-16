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
    <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6">
      <section className="bg-white border border-[#e3ebe7] rounded-3xl p-6">
        <img src={friend.picture} alt={friend.name} className="w-24 h-24 rounded-full object-cover" />
        <h1 className="text-3xl font-bold text-[#1f332a] mt-4">{friend.name}</h1>
        <span className={`inline-flex mt-3 px-3 py-1 rounded-full text-sm font-semibold capitalize ${statusMap[friend.status]}`}>
          {friend.status}
        </span>
        <div className="flex flex-wrap gap-2 mt-4">
          {friend.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 rounded-full text-xs bg-[#f0f5f3] text-[#375247]">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-[#53695f] mt-5 leading-7">{friend.bio}</p>
        <p className="text-sm text-[#345145] mt-4">{friend.email}</p>
        <div className="flex flex-wrap gap-3 mt-6">
          <button className="btn h-10 min-h-10 px-5 rounded-full bg-[#1f6a54] border-none text-white hover:bg-[#185240] text-[13px]">
            Snooze 2 Weeks
          </button>
          <button className="btn h-10 min-h-10 px-5 rounded-full bg-[#f3f7f5] border-none text-[#294739] hover:bg-[#e8efec] text-[13px]">
            Archive
          </button>
          <button className="btn h-10 min-h-10 px-5 rounded-full bg-[#fce8e8] border-none text-[#b42318] hover:bg-[#f8dddd] text-[13px]">
            Delete
          </button>
        </div>
      </section>
      <section className="space-y-4">
        <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-4">
          <div className="bg-white border border-[#e3ebe7] rounded-2xl p-4">
            <p className="text-xs text-[#678076]">Days Since Contact</p>
            <p className="text-2xl font-semibold mt-1">{friend.days_since_contact}</p>
          </div>
          <div className="bg-white border border-[#e3ebe7] rounded-2xl p-4">
            <p className="text-xs text-[#678076]">Goal</p>
            <p className="text-2xl font-semibold mt-1">{friend.goal} days</p>
          </div>
          <div className="bg-white border border-[#e3ebe7] rounded-2xl p-4">
            <p className="text-xs text-[#678076]">Next Due Date</p>
            <p className="text-2xl font-semibold mt-1">{friend.next_due_date}</p>
          </div>
        </div>
        <div className="bg-white border border-[#e3ebe7] rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[#1f332a]">Relationship Goal</h2>
            <button className="btn h-8 min-h-8 px-4 rounded-full bg-[#f3f7f5] border-none text-[#294739] text-xs">Edit</button>
          </div>
          <p className="text-[#53695f] mt-3">
            Check in every {friend.goal} days and keep the friendship active.
          </p>
        </div>
        <div className="bg-white border border-[#e3ebe7] rounded-2xl p-5">
          <h2 className="text-lg font-semibold text-[#1f332a]">Quick Check-In</h2>
          <div className="grid grid-cols-3 gap-3 mt-4">
            <button onClick={() => addInteraction("Call", friend.name)} className="btn h-10 min-h-10 bg-[#eef4f1] border-none text-[#1f332a] hover:bg-[#e1ece7] text-[13px]">
              <img src={callIcon} alt="Call" className="w-4 h-4" />
              Call
            </button>
            <button onClick={() => addInteraction("Text", friend.name)} className="btn h-10 min-h-10 bg-[#eef4f1] border-none text-[#1f332a] hover:bg-[#e1ece7] text-[13px]">
              <img src={textIcon} alt="Text" className="w-4 h-4" />
              Text
            </button>
            <button onClick={() => addInteraction("Video", friend.name)} className="btn h-10 min-h-10 bg-[#eef4f1] border-none text-[#1f332a] hover:bg-[#e1ece7] text-[13px]">
              <img src={videoIcon} alt="Video" className="w-4 h-4" />
              Video
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
