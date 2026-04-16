import { useNavigate } from "react-router-dom";

export default function FriendCard({ friend }) {
  const navigate = useNavigate();

  const statusMap = {
    overdue: "bg-[#fce8e8] text-[#b42318]",
    "almost due": "bg-[#fff5db] text-[#b76e00]",
    "on-track": "bg-[#e9f7ee] text-[#15803d]",
  };

  return (
    <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="bg-white border border-[#e3ebe7] rounded-2xl p-5 hover:shadow-md transition cursor-pointer"
    >
      <div className="flex items-start justify-between">
        <img src={friend.picture} alt={friend.name} className="w-14 h-14 rounded-full object-cover" />
        <span className={`px-2 py-1 rounded-full text-xs font-semibold capitalize ${statusMap[friend.status]}`}>
          {friend.status}
        </span>
      </div>
      <h2 className="mt-4 text-[18px] font-semibold text-[#1c2b24]">{friend.name}</h2>
      <p className="text-sm text-[#5f746a] mt-1">{friend.days_since_contact} days since contact</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {friend.tags.map((t, i) => (
          <span key={i} className="px-2 py-1 text-xs rounded-full bg-[#f0f5f3] text-[#375247]">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
