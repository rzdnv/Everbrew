import { LogoBrandWhite } from "@/assets/logo";
import { ChevronRight } from "lucide-react";
import { FaInstagram, FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="font-mono bg-aqua-deep-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-14 text-center md:text-left">
        {/* BRAND LOGO */}
        <div className="flex justify-center md:justify-start items-center">
          <a href="#home" className="flex items-center gap-2">
            <img
              src={LogoBrandWhite}
              alt="EVERBREW Logo"
              className="w-2/3 mx-auto md:w-3/4 object-contain"
            />
          </a>
        </div>

        {/* NAVIGATION + SUPPORT */}
        <div className="flex flex-col sm:flex-row gap-10 justify-around items-start">
          {/* NAVIGATION */}
          <div>
            <h3 className="font-bold text-2xl mb-4">Navigasi</h3>
            <ul className="space-y-2">
              <li>
                <a className="hover:underline" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#history">
                  History
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#gallery">
                  Gallery
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#menu">
                  Menu
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#review">
                  Review
                </a>
              </li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="font-bold text-2xl mb-4">Support</h3>
            <ul className="space-y-2">
              <li>FAQ</li>
              <li>Returns & Exchanges</li>
            </ul>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-bold text-2xl mb-4">Join Our Email List</h3>
          <p className="text-sm text-gray-200 mb-4 max-w-sm">
            Stay updated with all the latest products and exciting offers.
          </p>

          <div className="flex items-center bg-white rounded-full overflow-hidden p-2 mb-6 w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-transparent border-none outline-none px-4 py-3 text-slate-950 placeholder:text-slate-600"
            />
            <button className="px-4 text-slate-600 hover:text-almond-950 transition">
              <ChevronRight size={22} />
            </button>
          </div>

          <div className="flex mt-4 items-center justify-center md:justify-start gap-4 text-4xl">
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
            <FaTiktok className="hover:text-gray-600 cursor-pointer" />
            <FaYoutube className="hover:text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-10 pt-4 text-center text-sm">
        © 2025 EVERYBREW | All Rights Reserved
      </div>
    </footer>
  );
}
