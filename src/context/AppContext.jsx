import { createContext, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [friends, setFriends] = useState([]);
  const [friendsLoading, setFriendsLoading] = useState(true);
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    let mounted = true;
    import("../data/friends.json")
      .then((module) => {
        if (!mounted) {
          return;
        }
        setFriends(module.default);
      })
      .finally(() => {
        if (mounted) {
          setFriendsLoading(false);
        }
      });
    return () => {
      mounted = false;
    };
  }, []);

  const addInteraction = (type, name) => {
    const date = new Date();
    const entry = {
      id: Date.now(),
      type,
      title: `${type} with ${name}`,
      date: date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    };

    setTimeline((prev) => [entry, ...prev]);
    toast.success(`${type} logged with ${name}`);
  };

  const statsData = useMemo(() => {
    const counts = { Call: 0, Text: 0, Video: 0 };
    timeline.forEach((entry) => {
      if (counts[entry.type] !== undefined) {
        counts[entry.type] += 1;
      }
    });
    return [
      { name: "Call", value: counts.Call },
      { name: "Text", value: counts.Text },
      { name: "Video", value: counts.Video },
    ];
  }, [timeline]);

  return (
    <AppContext.Provider
      value={{ friends, friendsLoading, timeline, addInteraction, statsData }}
    >
      {children}
    </AppContext.Provider>
  );
}
export { AppContext };
