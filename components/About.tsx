export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 md:px-20 max-w-7xl mx-auto relative"
    >
      <div className="tech-grid absolute top-0 right-0 w-64 h-64 opacity-20 z-[-1]"></div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
        <div className="md:col-span-4 lg:col-span-5">
          <span className="mono-font text-[#CCFF00] text-xs md:text-sm uppercase tracking-widest mb-4 md:mb-6 block">
            [01] Mission
          </span>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight display-font">
            We architect digital<br />
            futures.
          </h3>
        </div>
        <div className="md:col-span-8 lg:col-span-7 flex items-center">
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed md:leading-tight font-light text-gray-300">
            Traditional agencies build websites. We engineer{" "}
            <span className="text-white font-medium border-b-2 border-[#CCFF00] pb-1">
              digital ecosystems
            </span>{" "}
            that propel brands beyond the atmosphere.
          </p>
        </div>
      </div>
    </section>
  );
}

