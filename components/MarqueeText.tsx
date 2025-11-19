export default function MarqueeText() {
  return (
    <div className="py-20 overflow-hidden border-y border-white/10 bg-[#0A0A0A]">
      <div className="marquee-container" style={{ transform: "rotate(-2deg) scale(1.1)" }}>
        <div className="marquee-strip flex whitespace-nowrap">
          <div className="animate-marquee flex gap-20 items-center text-8xl font-bold text-white/10 uppercase display-font">
            <span>Create</span>
            <span>Launch</span>
            <span>Scale</span>
            <span>Dominate</span>
            <span>Create</span>
            <span>Launch</span>
            <span>Scale</span>
            <span>Dominate</span>
          </div>
        </div>
      </div>
    </div>
  );
}

