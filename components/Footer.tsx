"use client";

import { Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative py-24 md:py-32 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          {/* Left Column - CTA Section */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-[10vw] md:text-[8vw] lg:text-[6vw] leading-[0.9] font-bold tracking-tighter mb-6 md:mb-8">
                LET&apos;S
                <br />
                <span className="text-[#CCFF00]">TALK</span>
              </h2>
              <div className="flex flex-col gap-3 text-gray-400 mono-font text-sm md:text-base mb-8 md:mb-0">
                <p>Have a project in mind?</p>
                <p>Transmission lines are open.</p>
              </div>
            </div>

            {/* Email Form - Moved to left column for better flow */}
            <div className="mt-8 lg:mt-0">
              <form className="relative border-b border-white/20 pb-3 group">
                <input
                  type="email"
                  placeholder="ENTER_EMAIL_ADDRESS"
                  className="w-full bg-transparent outline-none text-base md:text-lg uppercase font-bold placeholder-gray-600 focus:placeholder-gray-500 transition-colors mono-font"
                />
                <button
                  type="submit"
                  className="absolute right-0 bottom-3 text-[#CCFF00] hover:text-white transition-colors uppercase font-bold text-xs md:text-sm mono-font"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Links */}
          <div className="flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-12 md:gap-16 mb-8 lg:mb-0">
              <div>
                <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs md:text-sm mono-font">
                  Sitemap
                </h4>
                <ul className="space-y-3 text-gray-500 mono-font text-sm">
                  <li>
                    <Link
                      href="#hero"
                      className="hover:text-[#CCFF00] transition-colors inline-block"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#services"
                      className="hover:text-[#CCFF00] transition-colors inline-block"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#work"
                      className="hover:text-[#CCFF00] transition-colors inline-block"
                    >
                      Work
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#about"
                      className="hover:text-[#CCFF00] transition-colors inline-block"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs md:text-sm mono-font">
                  Socials
                </h4>
                <ul className="space-y-3 text-gray-500 mono-font text-sm">
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#CCFF00] transition-colors flex items-center gap-2 group"
                    >
                      <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />{" "}
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#CCFF00] transition-colors flex items-center gap-2 group"
                    >
                      <Twitter className="w-4 h-4 group-hover:scale-110 transition-transform" />{" "}
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#CCFF00] transition-colors flex items-center gap-2 group"
                    >
                      <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />{" "}
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-gray-600 mono-font">
          <div>© 2025 LIFTOFF DESIGN SYSTEMS</div>
          <div className="flex flex-wrap gap-4 md:gap-6">
            <a
              href="#"
              className="hover:text-[#CCFF00] transition-colors cursor-pointer"
            >
              PRIVACY_PROTOCOL
            </a>
            <a
              href="#"
              className="hover:text-[#CCFF00] transition-colors cursor-pointer"
            >
              TERMS_OF_ENGAGEMENT
            </a>
          </div>
        </div>
      </div>

      {/* Background Decorative Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[18vw] md:text-[16vw] lg:text-[14vw] font-bold text-white/5 whitespace-nowrap pointer-events-none z-0 select-none">
        LIFTOFF
      </div>
    </footer>
  );
}

