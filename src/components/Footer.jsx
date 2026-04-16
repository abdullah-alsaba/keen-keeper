import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";

export default function Footer() {
  const socials = [
    { name: "Instagram", icon: instagram },
    { name: "Facebook", icon: facebook },
    { name: "X", icon: twitter },
  ];

  return (
    <footer className="bg-[#1f5f4b] text-white mt-10">
      <div className="w-full max-w-[1200px] mx-auto px-6 py-10 text-center">
        <h2 className="text-[48px] md:text-[56px] leading-none font-bold tracking-tight">KeenKeeper</h2>
        <p className="text-[#c9d9d3] text-[14px] mt-4 max-w-[760px] mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <p className="mt-6 text-[22px] font-semibold">Social Links</p>
        <div className="flex justify-center gap-4 mt-3">
          {socials.map((item) => (
            <button
              key={item.name}
              aria-label={item.name}
              className="w-12 h-12 rounded-full bg-white text-[#1f5f4b] flex items-center justify-center hover:bg-[#e9f4ef] transition"
            >
              <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
            </button>
          ))}
        </div>
        <div className="mt-7 border-t border-[#2c705a]" />
        <div className="mt-5 flex flex-col md:flex-row items-center justify-between gap-4 text-[#9fbbb0] text-[13px]">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
