"use client";

import { useEffect, useState } from "react";
import { Home, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const sections = document.querySelectorAll("section, header, footer");
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
            // If footer is visible, highlight "about" (Studio link)
            if (id === "footer") {
              setActiveSection("about");
            } else {
              setActiveSection(id);
            }
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

  const navLinkClass = (isActiveLink: boolean) => {
    const base = "nav-link hover-trigger px-2 sm:px-4 py-2 rounded-lg sm:rounded-xl transition-all text-xs sm:text-sm font-medium touch-manipulation min-h-[44px] flex items-center justify-center";
    const hover = "hover:bg-black/10 dark:hover:bg-white/10";
    const active = isActiveLink ? "nav-active text-[#CCFF00]" : "";
    const inactive = "text-black/80 dark:text-white hover:text-[#CCFF00]";
    return `${base} ${hover} ${active || inactive}`;
  };

  const iconLinkClass = (isActiveLink: boolean) => {
    const base = "nav-link hover-trigger p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center";
    const hover = "hover:bg-black/10 dark:hover:bg-white/10";
    const active = isActiveLink ? "nav-active text-[#CCFF00]" : "";
    const inactive = "text-black/60 dark:text-white/60 hover:text-[#CCFF00]";
    return `${base} ${hover} ${active || inactive}`;
  };

  return (
    <nav className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 glass-dock px-1.5 sm:px-2 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl flex items-center gap-0.5 sm:gap-1 max-w-[95vw] overflow-x-auto">
      <Link
        href="#hero"
        className={iconLinkClass(isActive("hero"))}
      >
        <Home className="w-4 h-4 sm:w-5 sm:h-5" />
      </Link>
      <Link
        href="#services"
        className={navLinkClass(isActive("services"))}
      >
        Services
      </Link>
      <Link
        href="#work"
        className={navLinkClass(isActive("work"))}
      >
        Work
      </Link>
      <Link
        href="#about"
        className={navLinkClass(isActive("about"))}
      >
        Studio
      </Link>
      <div className="w-[1px] h-4 sm:h-6 mx-0.5 sm:mx-1 bg-black/20 dark:bg-white/20"></div>
      <button
        onClick={toggleTheme}
        className="hover-trigger p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center hover:text-[#CCFF00] hover:bg-black/10 dark:hover:bg-white/10 text-black/60 dark:text-white/60"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
        ) : (
          <Moon className="w-4 h-4 sm:w-5 sm:h-5" />
        )}
      </button>
      <a
        href="mailto:hello@liftoff.design"
        className="hover-trigger px-3 sm:px-6 py-2 bg-[#CCFF00] text-black rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm hover:scale-105 transition-transform touch-manipulation min-h-[44px] flex items-center justify-center whitespace-nowrap"
      >
        INITIATE
      </a>
    </nav>
  );
}

