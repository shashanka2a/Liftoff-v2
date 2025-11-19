"use client";

import { useEffect, useRef } from "react";
import { Cpu, Fingerprint } from "lucide-react";

export default function Services() {
  const svgRefs = useRef<(SVGSVGElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const svg = entry.target.querySelector(".draw-svg");
            if (svg) svg.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll("#services .group");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section id="services" className="py-20 px-6 md:px-20 border-t border-white/10">
      <div className="flex justify-between items-end mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter display-font">
          CAPABILITIES
        </h2>
        <div className="hidden md:block text-right">
          <div className="mono-font text-xs text-[#CCFF00] mb-1">
            SYS.CHECK: OK
          </div>
          <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-[#CCFF00] w-2/3 animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[600px]">
        {/* Card 1: Product */}
        <div className="group relative bg-[#0A0A0A] border border-white/10 p-8 rounded-none md:col-span-1 hover:bg-[#CCFF00] hover:text-black transition-all duration-500 overflow-hidden hover-trigger flex flex-col justify-between">
          <div className="absolute top-0 right-0 p-4 opacity-50">
            <Cpu className="w-6 h-6" />
          </div>

          <div className="w-full h-48 flex items-center justify-center my-auto relative z-10">
            <svg
              viewBox="0 0 100 100"
              className="w-32 h-32 draw-svg group-hover:scale-110 transition-transform duration-500"
            >
              <rect
                x="20"
                y="20"
                width="60"
                height="60"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <rect
                x="35"
                y="35"
                width="30"
                height="30"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <line
                x1="20"
                y1="20"
                x2="35"
                y2="35"
                stroke="currentColor"
                strokeWidth="1"
              />
              <line
                x1="80"
                y1="20"
                x2="65"
                y2="35"
                stroke="currentColor"
                strokeWidth="1"
              />
              <line
                x1="20"
                y1="80"
                x2="35"
                y2="65"
                stroke="currentColor"
                strokeWidth="1"
              />
              <line
                x1="80"
                y1="80"
                x2="65"
                y2="65"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2 uppercase">Product Design</h3>
            <p className="text-sm opacity-70 mono-font">
              UI/UX / Design Systems / Prototyping
            </p>
          </div>

          <div className="corner-marker corner-tl"></div>
          <div className="corner-marker corner-tr"></div>
          <div className="corner-marker corner-bl"></div>
          <div className="corner-marker corner-br"></div>
        </div>

        {/* Card 2: Brand */}
        <div className="group relative bg-[#0A0A0A] border border-white/10 p-8 rounded-none md:col-span-1 hover:bg-[#CCFF00] hover:text-black transition-all duration-500 overflow-hidden hover-trigger flex flex-col justify-between">
          <div className="absolute top-0 right-0 p-4 opacity-50">
            <Fingerprint className="w-6 h-6" />
          </div>

          <div className="w-full h-48 flex items-center justify-center my-auto relative z-10">
            <svg
              viewBox="0 0 100 100"
              className="w-40 h-40 draw-svg group-hover:rotate-90 transition-transform duration-700"
            >
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <circle
                cx="50"
                cy="50"
                r="30"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <path
                d="M50 10 L50 90 M10 50 L90 50"
                stroke="currentColor"
                strokeWidth="1"
              />
              <circle
                cx="50"
                cy="50"
                r="10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2 uppercase">Brand Identity</h3>
            <p className="text-sm opacity-70 mono-font">
              Logo / Strategy / Art Direction
            </p>
          </div>
          <div className="corner-marker corner-tl"></div>
          <div className="corner-marker corner-tr"></div>
          <div className="corner-marker corner-bl"></div>
          <div className="corner-marker corner-br"></div>
        </div>

        {/* Card 3: Tech Stacked */}
        <div className="md:col-span-1 flex flex-col gap-4 h-full">
          <div className="group relative flex-1 bg-[#0A0A0A] border border-white/10 p-6 hover:bg-[#CCFF00] hover:text-black transition-all duration-500 hover-trigger flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold uppercase">Development</h3>
              <p className="text-xs opacity-70 mono-font mt-1">
                Frontend / WebGL / Creative Coding
              </p>
            </div>
            <svg viewBox="0 0 50 50" className="w-12 h-12 draw-svg">
              <path
                d="M10 25 L20 35 L40 15"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="group relative flex-1 bg-[#0A0A0A] border border-white/10 p-6 hover:bg-[#CCFF00] hover:text-black transition-all duration-500 hover-trigger flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold uppercase">Growth</h3>
              <p className="text-xs opacity-70 mono-font mt-1">
                SEO / Analytics / Campaigns
              </p>
            </div>
            <svg viewBox="0 0 50 50" className="w-12 h-12 draw-svg">
              <path
                d="M10 40 L20 30 L30 35 L45 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

