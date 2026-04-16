import FriendCard from "../components/FriendCard";
import Loader from "../components/Loader";
import useApp from "../context/useApp";

export default function Home() {
  const { friends, friendsLoading } = useApp();
  const summary = {
    total: friends.length,
    overdue: friends.filter((friend) => friend.status === "overdue").length,
    almostDue: friends.filter((friend) => friend.status === "almost due").length,
    onTrack: friends.filter((friend) => friend.status === "on-track").length,
  };

  return (
    <div className="space-y-8">
      <section className="bg-white border border-[#e4ebe7] rounded-3xl px-5 sm:px-9 py-9">
        <div className="max-w-[720px] mx-auto text-center">
          <h1 className="text-[30px] sm:text-[34px] font-bold text-[#1f332a]">
            Friends to keep close in your life
          </h1>
          <p className="text-[#5f746a] mt-3">
            Keep track of every relationship and never miss a meaningful check-in.
          </p>
          <button className="btn h-10 min-h-10 px-5 rounded-full bg-[#1f6a54] hover:bg-[#185240] text-white border-none mt-6 text-[13px] font-semibold">
            <span className="text-lg leading-none">+</span>
            Add a Friend
          </button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
          <div className="bg-[#f3f7f5] rounded-2xl p-3.5 text-center">
            <p className="text-xs text-[#5f746a]">Total Friends</p>
            <p className="text-[24px] font-semibold text-[#1f332a] mt-1">{summary.total}</p>
          </div>
          <div className="bg-[#f3f7f5] rounded-2xl p-3.5 text-center">
            <p className="text-xs text-[#5f746a]">Overdue</p>
            <p className="text-[24px] font-semibold text-[#b42318] mt-1">{summary.overdue}</p>
          </div>
          <div className="bg-[#f3f7f5] rounded-2xl p-3.5 text-center">
            <p className="text-xs text-[#5f746a]">Almost Due</p>
            <p className="text-[24px] font-semibold text-[#b76e00] mt-1">{summary.almostDue}</p>
          </div>
          <div className="bg-[#f3f7f5] rounded-2xl p-3.5 text-center">
            <p className="text-xs text-[#5f746a]">On Track</p>
            <p className="text-[24px] font-semibold text-[#15803d] mt-1">{summary.onTrack}</p>
          </div>
        </div>
      </section>

      <section>
        {friendsLoading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {friends.map((friend) => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
