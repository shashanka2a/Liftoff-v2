"use client";

import { Instagram, Twitter, Linkedin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [emailFocused, setEmailFocused] = useState(false);

  return (
    <footer className="relative py-24 md:py-32 px-6 md:px-20 overflow-hidden border-t border-white/5">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 opacity-[0.02] z-0">
        <div className="tech-grid w-full h-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          {/* Left Column - CTA Section */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-[9vw] md:text-[7vw] lg:text-[5.5vw] leading-[0.9] font-bold tracking-tighter mb-6 md:mb-8 display-font">
                LET&apos;S
                <br />
                <span className="text-[#CCFF00] drop-shadow-[0_0_20px_rgba(204,255,0,0.3)]">
                  TALK
                </span>
              </h2>
              <div className="flex flex-col gap-3 text-gray-400 mono-font text-xs md:text-sm mb-10 md:mb-0">
                <p className="leading-relaxed">Have a project in mind?</p>
                <p className="leading-relaxed">Transmission lines are open.</p>
              </div>
            </div>

            {/* Email Form - Enhanced with better UX */}
            <div className="mt-8 lg:mt-0">
              <form
                className="relative group"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div
                  className={`relative border-b transition-all duration-300 ${
                    emailFocused
                      ? "border-[#CCFF00] shadow-[0_1px_0_0_rgba(204,255,0,0.3)]"
                      : "border-white/20 group-hover:border-white/30"
                  }`}
                >
                  <input
                    type="email"
                    placeholder="ENTER_EMAIL_ADDRESS"
                    onFocus={() => setEmailFocused(true)}
                    onBlur={() => setEmailFocused(false)}
                    className="w-full bg-transparent outline-none text-sm md:text-base uppercase font-bold placeholder-gray-600 focus:placeholder-gray-400 transition-all duration-300 mono-font py-3 pr-24"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 bottom-3 text-[#CCFF00] hover:text-white transition-all duration-300 uppercase font-bold text-xs mono-font flex items-center gap-1 group/btn hover:gap-2"
                  >
                    Subscribe
                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column - Links */}
          <div className="flex flex-col justify-between lg:pl-8 lg:border-l lg:border-white/10">
            <div className="grid grid-cols-2 gap-12 md:gap-16 mb-8 lg:mb-0">
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-1 h-4 bg-[#CCFF00]"></div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm md:text-base mono-font">
                    Sitemap
                  </h4>
                </div>
                <ul className="space-y-3 text-gray-500 mono-font text-xs md:text-sm">
                  <li>
                    <Link
                      href="#hero"
                      className="hover:text-[#CCFF00] transition-all duration-300 inline-block hover:translate-x-1 group"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-0 group-hover:w-2 h-[1px] bg-[#CCFF00] transition-all duration-300"></span>
                        Home
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#services"
                      className="hover:text-[#CCFF00] transition-all duration-300 inline-block hover:translate-x-1 group"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-0 group-hover:w-2 h-[1px] bg-[#CCFF00] transition-all duration-300"></span>
                        Services
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#work"
                      className="hover:text-[#CCFF00] transition-all duration-300 inline-block hover:translate-x-1 group"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-0 group-hover:w-2 h-[1px] bg-[#CCFF00] transition-all duration-300"></span>
                        Work
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#about"
                      className="hover:text-[#CCFF00] transition-all duration-300 inline-block hover:translate-x-1 group"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-0 group-hover:w-2 h-[1px] bg-[#CCFF00] transition-all duration-300"></span>
                        About
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-1 h-4 bg-[#CCFF00]"></div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm md:text-base mono-font">
                    Socials
                  </h4>
                </div>
                <ul className="space-y-3 text-gray-500 mono-font text-xs md:text-sm">
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#CCFF00] transition-all duration-300 flex items-center gap-2 group"
                    >
                      <div className="w-5 h-5 flex items-center justify-center border border-white/20 group-hover:border-[#CCFF00] group-hover:bg-[#CCFF00]/10 transition-all duration-300">
                        <Instagram className="w-3 h-3 group-hover:scale-110 transition-transform" />
                      </div>
                      <span>Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#CCFF00] transition-all duration-300 flex items-center gap-2 group"
                    >
                      <div className="w-5 h-5 flex items-center justify-center border border-white/20 group-hover:border-[#CCFF00] group-hover:bg-[#CCFF00]/10 transition-all duration-300">
                        <Twitter className="w-3 h-3 group-hover:scale-110 transition-transform" />
                      </div>
                      <span>Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#CCFF00] transition-all duration-300 flex items-center gap-2 group"
                    >
                      <div className="w-5 h-5 flex items-center justify-center border border-white/20 group-hover:border-[#CCFF00] group-hover:bg-[#CCFF00]/10 transition-all duration-300">
                        <Linkedin className="w-3 h-3 group-hover:scale-110 transition-transform" />
                      </div>
                      <span>LinkedIn</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Enhanced */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="text-xs text-gray-600 mono-font">
            © 2025 LIFTOFF DESIGN SYSTEMS
          </div>
          <div className="flex flex-wrap gap-6 text-xs text-gray-600 mono-font">
            <a
              href="#"
              className="hover:text-[#CCFF00] transition-colors duration-300 relative group"
            >
              PRIVACY_PROTOCOL
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#CCFF00] group-hover:w-full transition-all duration-300"></span>
            </a>
            <span className="text-white/20">/</span>
            <a
              href="#"
              className="hover:text-[#CCFF00] transition-colors duration-300 relative group"
            >
              TERMS_OF_ENGAGEMENT
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#CCFF00] group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </div>

      {/* Background Decorative Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[18vw] md:text-[16vw] lg:text-[14vw] font-bold text-white/5 whitespace-nowrap pointer-events-none z-0 select-none display-font">
        LIFTOFF
      </div>
    </footer>
  );
}

