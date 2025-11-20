import CustomCursor from "@/components/CustomCursor";
import Scanline from "@/components/Scanline";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TickerTape from "@/components/TickerTape";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import MarqueeText from "@/components/MarqueeText";
import Footer from "@/components/Footer";
import TimeDisplay from "@/components/TimeDisplay";

export default function Home() {
  return (
    <>
      {/* SVG Filters */}
      <svg style={{ display: "none" }}>
        <defs>
          <filter id="liquid">
            <feTurbulence
              baseFrequency="0.01 0.05"
              numOctaves={2}
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={20}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <filter id="noise-grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves={3}
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.1" />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Scanline Overlay */}
      <Scanline />

      {/* Fixed Technical Elements */}
      <div className="fixed top-6 left-6 z-40 mix-blend-difference text-black dark:text-white mono-font text-xs hidden md:block">
        <div>COORD: 34.0522° N</div>
        <div>SYS: ONLINE</div>
      </div>
      <div className="fixed top-6 right-6 z-40 mix-blend-difference text-black dark:text-white mono-font text-xs text-right hidden md:block">
        <div>LIFTOFF.OS v2.5</div>
        <TimeDisplay />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Ticker Tape */}
      <TickerTape />

      {/* Intro Statement */}
      <About />

      {/* Services */}
      <Services />

      {/* Work Section */}
      <Work />

      {/* Infinite Text Scroller */}
      <MarqueeText />

      {/* Footer */}
      <Footer />
    </>
  );
}

