"use client";

import { Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative py-32 px-6 md:px-20 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 relative z-10">
        <div>
          <h2 className="text-[12vw] leading-none font-bold tracking-tighter mb-10">
            LET&apos;S
            <br />
            <span className="text-[#CCFF00]">TALK</span>
          </h2>
          <div className="flex flex-col gap-2 text-gray-400 mono-font text-sm">
            <p>Have a project in mind?</p>
            <p>Transmission lines are open.</p>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-10">
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">
                Sitemap
              </h4>
              <ul className="space-y-2 text-gray-500 hover:text-white transition-colors">
                <li>
                  <Link href="#" className="hover:text-[#CCFF00]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-[#CCFF00]">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#work" className="hover:text-[#CCFF00]">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-[#CCFF00]">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">
                Socials
              </h4>
              <ul className="space-y-2 text-gray-500">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#CCFF00] flex items-center gap-2"
                  >
                    <Instagram className="w-4 h-4" /> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#CCFF00] flex items-center gap-2"
                  >
                    <Twitter className="w-4 h-4" /> Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#CCFF00] flex items-center gap-2"
                  >
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-20">
            <form className="relative border-b border-white/20 pb-4">
              <input
                type="email"
                placeholder="ENTER_EMAIL_ADDRESS"
                className="w-full bg-transparent outline-none text-xl uppercase font-bold placeholder-gray-700"
              />
              <button
                type="submit"
                className="absolute right-0 bottom-4 text-[#CCFF00] hover:text-white transition-colors uppercase font-bold text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 mono-font">
        <div>© 2025 LIFTOFF DESIGN SYSTEMS</div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <span>PRIVACY_PROTOCOL</span>
          <span>TERMS_OF_ENGAGEMENT</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[20vw] font-bold text-white/5 whitespace-nowrap pointer-events-none z-0 select-none">
        LIFTOFF
      </div>
    </footer>
  );
}

