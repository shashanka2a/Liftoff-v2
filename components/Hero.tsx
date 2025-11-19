"use client";

import { useEffect, useRef } from "react";
import TerrainCanvas from "./TerrainCanvas";

export default function Hero() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && svgRef.current) {
            svgRef.current.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (svgRef.current) {
      observer.observe(svgRef.current);
    }

    return () => {
      if (svgRef.current) {
        observer.unobserve(svgRef.current);
      }
    };
  }, []);

  return (
    <header
      id="hero"
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden"
    >
      <TerrainCanvas />

      {/* Radial Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] z-10 pointer-events-none"></div>

      {/* Central Tech/Rocket Schematic */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-10 pointer-events-none">
        <svg
          width="400"
          height="650"
          viewBox="0 0 200 400"
          className="animate-float"
          ref={svgRef}
        >
          <line
            x1="100"
            y1="0"
            x2="100"
            y2="400"
            stroke="#CCFF00"
            strokeWidth="0.5"
            strokeDasharray="4 4"
          />
          <path
            d="M100 20 L140 120 L140 320 L160 380 L100 380 L40 380 L60 320 L60 120 Z"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
          />
          <circle
            cx="100"
            cy="150"
            r="30"
            stroke="#CCFF00"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="100" cy="150" r="4" fill="#CCFF00" />
          <circle
            cx="100"
            cy="280"
            r="15"
            stroke="white"
            strokeWidth="0.5"
            strokeDasharray="2 2"
          />
          <line
            x1="70"
            y1="150"
            x2="130"
            y2="150"
            stroke="#CCFF00"
            strokeWidth="0.5"
          />
          <line
            x1="100"
            y1="120"
            x2="100"
            y2="180"
            stroke="#CCFF00"
            strokeWidth="0.5"
          />
          <rect
            x="80"
            y="380"
            width="40"
            height="20"
            stroke="white"
            fill="none"
          />
          <line
            x1="80"
            y1="400"
            x2="120"
            y2="420"
            stroke="white"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto mt-[-5vh]">
        <div className="inline-flex items-center gap-2 border border-[#CCFF00]/30 px-4 py-1.5 rounded-full mb-8 bg-[#030303]/80 backdrop-blur-md animate-pulse shadow-[0_0_15px_rgba(204,255,0,0.15)]">
          <span className="w-1.5 h-1.5 bg-[#CCFF00] rounded-full"></span>
          <span className="mono-font text-[10px] md:text-xs text-[#CCFF00] tracking-[0.2em] uppercase font-bold">
            LIFTOFF™ SYSTEM READY
          </span>
        </div>

        <h1 className="text-[12vw] leading-[0.85] font-bold tracking-tighter mix-blend-normal mb-4 relative select-none">
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.5)" }}
          >
            DIGITAL
          </span>
          <br />
          <span className="text-[#CCFF00] drop-shadow-[0_0_30px_rgba(204,255,0,0.5)]">
            PRODUCT
          </span>
          <br />
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.5)" }}
          >
            STUDIO
          </span>
        </h1>

        <h2 className="text-sm md:text-xl font-medium text-gray-400 mt-8 tracking-[0.2em] uppercase display-font max-w-2xl mx-auto leading-relaxed">
          Premium Design &<br />
          Strategic Engineering
        </h2>
      </div>

      {/* Decorative HUD Elements */}
      <div className="absolute left-10 bottom-32 hidden md:flex flex-col gap-2 z-10 opacity-30">
        <div className="w-40 h-[1px] bg-white"></div>
        <div className="w-20 h-[1px] bg-white ml-4"></div>
        <div className="w-10 h-[1px] bg-white ml-8"></div>
      </div>
    </header>
  );
}

