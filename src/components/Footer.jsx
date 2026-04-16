import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import logoXL from "../assets/logo-xl.png";

export default function Footer() {
  return (
    <footer className="bg-[#1f6a54] text-white mt-10">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        <img src={logoXL} alt="KeenKeeper" className="h-10 mx-auto" />
        <div className="flex justify-center gap-4 mt-4">
          <img src={facebook} alt="facebook" className="w-5 h-5" />
          <img src={instagram} alt="instagram" className="w-5 h-5" />
          <img src={twitter} alt="twitter" className="w-5 h-5" />
        </div>
        <p className="text-xs mt-4 text-[#d8ebe3]">
          © 2026 KeenKeeper. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
