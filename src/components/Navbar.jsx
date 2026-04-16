import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const links = [
  { to: "/", label: "Home", icon: "M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" },
  {
    to: "/timeline",
    label: "Timeline",
    icon: "M5 7h14M5 12h14M5 17h14",
  },
  {
    to: "/stats",
    label: "Stats",
    icon: "M5 19V9m7 10V5m7 14v-7",
  },
];

export default function Navbar() {
  return (
    <header className="bg-white border-b border-[#e5ebe8]">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-[70px] flex items-center justify-between">
        <img src={logo} alt="KeenKeeper" className="h-8 w-auto" />
        <nav className="flex items-center gap-1.5">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `h-9 px-3.5 rounded-full flex items-center gap-1.5 text-[13px] font-semibold transition ${
                  isActive
                    ? "bg-[#1f6a54] text-white"
                    : "text-[#385346] hover:bg-[#eaf2ee]"
                }`
              }
            >
              <svg
                viewBox="0 0 24 24"
                className="w-[14px] h-[14px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d={link.icon} />
              </svg>
              <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
