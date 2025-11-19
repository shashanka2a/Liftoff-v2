import { Crosshair, CircleDashed, Aperture } from "lucide-react";

export default function TickerTape() {
  return (
    <div className="w-full bg-[#CCFF00] text-black py-3 overflow-hidden border-y border-black relative z-30">
      <div className="marquee-strip flex whitespace-nowrap">
        <div className="animate-marquee flex gap-8 items-center mono-font text-sm font-bold uppercase tracking-widest">
          <span>/// Strategy Initialized</span>
          <Crosshair className="w-4 h-4" />
          <span>Visual Systems Online</span>
          <CircleDashed className="w-4 h-4" />
          <span>Deploying Assets</span>
          <Aperture className="w-4 h-4" />
          <span>/// Strategy Initialized</span>
          <Crosshair className="w-4 h-4" />
          <span>Visual Systems Online</span>
          <CircleDashed className="w-4 h-4" />
          <span>Deploying Assets</span>
          <Aperture className="w-4 h-4" />
          <span>/// Strategy Initialized</span>
          <Crosshair className="w-4 h-4" />
          <span>Visual Systems Online</span>
          <CircleDashed className="w-4 h-4" />
          <span>Deploying Assets</span>
          <Aperture className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}

