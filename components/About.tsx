export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 md:px-20 max-w-7xl mx-auto relative"
    >
      <div className="tech-grid absolute top-0 right-0 w-64 h-64 opacity-20 z-[-1]"></div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <span className="mono-font text-[#CCFF00] text-xs uppercase tracking-widest mb-2 block">
            [01] Mission Profile
          </span>
          <h3 className="text-2xl font-bold">
            We architect digital<br />
            futures.
          </h3>
        </div>
        <div className="md:col-span-8">
          <p className="text-3xl md:text-5xl leading-tight font-light text-gray-300">
            Traditional agencies build websites. We engineer{" "}
            <span className="text-white font-medium border-b border-[#CCFF00]">
              digital ecosystems
            </span>{" "}
            that propel brands beyond the atmosphere.
          </p>
        </div>
      </div>
    </section>
  );
}

