"use client";

import { useEffect, useState } from "react";
import {
  Home,
  Crosshair,
  CircleDashed,
  Aperture,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section, header");
    const navLinks = document.querySelectorAll(".nav-link");

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) {
            setActiveSection(id);
          }
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      if (section.id) scrollObserver.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section.id) scrollObserver.unobserve(section);
      });
    };
  }, []);

  const isActive = (section: string) => activeSection === section;

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 glass-dock px-2 py-2 rounded-2xl flex items-center gap-1">
      <Link
        href="#hero"
        className={`nav-link hover-trigger p-3 rounded-xl hover:bg-white/10 transition-all ${
          isActive("hero")
            ? "nav-active text-[#CCFF00]"
            : "text-white/60 hover:text-[#CCFF00]"
        }`}
      >
        <Home className="w-5 h-5" />
      </Link>
      <Link
        href="#services"
        className={`nav-link hover-trigger px-4 py-2 rounded-xl hover:bg-white/10 transition-all text-sm font-medium ${
          isActive("services")
            ? "nav-active text-[#CCFF00]"
            : "text-white hover:text-[#CCFF00]"
        }`}
      >
        Services
      </Link>
      <Link
        href="#work"
        className={`nav-link hover-trigger px-4 py-2 rounded-xl hover:bg-white/10 transition-all text-sm font-medium ${
          isActive("work")
            ? "nav-active text-[#CCFF00]"
            : "text-white hover:text-[#CCFF00]"
        }`}
      >
        Work
      </Link>
      <Link
        href="#about"
        className={`nav-link hover-trigger px-4 py-2 rounded-xl hover:bg-white/10 transition-all text-sm font-medium ${
          isActive("about")
            ? "nav-active text-[#CCFF00]"
            : "text-white hover:text-[#CCFF00]"
        }`}
      >
        Studio
      </Link>
      <div className="w-[1px] h-6 bg-white/20 mx-1"></div>
      <a
        href="mailto:hello@liftoff.design"
        className="hover-trigger px-6 py-2 bg-[#CCFF00] text-black rounded-xl font-bold text-sm hover:scale-105 transition-transform"
      >
        INITIATE
      </a>
    </nav>
  );
}

