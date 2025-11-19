"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Adverzeo",
    tagline: "/// The Art Of Loading Excellence",
    description:
      "Premium marketing platform design.",
    image: "/Adverzeo.png",
    category: "Brand Identity • Web Design • UI/UX",
    client: "ADVERZEO",
    year: "2024",
    stack: "BRAND IDENTITY / WEB DESIGN",
    output: "PLATFORM",
    timeline: "2 Weeks",
    caseId: "ARCHIVE_01",
    layout: "left",
  },
  {
    id: 2,
    title: "Payflow",
    tagline: "/// Seamless Global Finance",
    description:
      "Seamless global finance with zero hidden fees and instant settlements.",
    image: "/payflow.png",
    category: "Fintech • Web App • Design System",
    client: "PAYFLOW",
    year: "2024",
    stack: "WEB APP / DESIGN SYSTEM",
    output: "PLATFORM",
    timeline: "1 Month",
    status: "DEPLOYED",
    layout: "right",
  },
  {
    id: 3,
    title: "InOrbyt",
    tagline: "/// Reward Your Community",
    description:
      "Reward your community. No crypto. No complexity. Just connection.",
    image: "/InOrbyt.png",
    category: "Web3 • Platform Design • Brand Identity",
    client: "INORBYT",
    year: "2024",
    stack: "PLATFORM DESIGN / BRAND IDENTITY",
    output: "PLATFORM",
    timeline: "3 Weeks",
    caseId: "ARCHIVE_03",
    layout: "left",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24">
      <div className="px-6 md:px-20 mb-16">
        <span className="mono-font text-[#CCFF00] text-xs uppercase tracking-widest mb-2 block">
          [02] Flight Log
        </span>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9] display-font">
          SELECTED
          <br />
          <span
            className="text-transparent stroke-text"
            style={{ WebkitTextStroke: "2px #fff", opacity: 0.5 }}
          >
            WORKS
          </span>
        </h2>
      </div>

      <div className="px-0 md:px-20 flex flex-col gap-20">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-white/5 pb-12"
          >
            {project.layout === "left" ? (
              <>
                <div className="md:col-span-7 relative overflow-hidden aspect-[16/9] project-img-container">
                  <div className="w-full h-full bg-[#111]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={2000}
                      height={1125}
                      className="object-cover w-full h-full grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur px-3 py-1 border border-white/20 mono-font text-xs text-[#CCFF00]">
                    CASE :: {project.caseId}
                  </div>
                  <div className="absolute top-4 right-4">
                    <ArrowUpRight className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:translate-x-2 group-hover:-translate-y-2" />
                  </div>
                </div>
                <div className="md:col-span-5 px-6 md:px-0 flex flex-col h-full justify-center">
                  <div className="border-l-2 border-[#CCFF00] pl-6 transition-all duration-500 group-hover:border-white">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="mono-font text-xs text-gray-500">
                        PRJ_0{project.id}
                      </span>
                      <span className="w-8 h-[1px] bg-gray-700"></span>
                      <span className="mono-font text-xs text-gray-400 uppercase">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold mb-2 group-hover:text-[#CCFF00] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="mono-font text-[#CCFF00] text-xs md:text-sm font-bold uppercase tracking-wider mb-4">
                      {project.tagline}
                    </div>
                    <p className="text-gray-400 mb-6 max-w-md leading-relaxed text-sm md:text-base">
                      {project.description}
                    </p>
                    <div className="grid grid-cols-2 gap-y-1 text-xs mono-font text-gray-500 mb-6">
                      <div>CLIENT: {project.client}</div>
                      <div>YEAR: {project.year}</div>
                      <div>STACK: {project.stack}</div>
                      <div>TIMELINE: {project.timeline}</div>
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-white border border-white/20 px-5 py-2 rounded-full uppercase font-bold tracking-widest text-[10px] hover:bg-[#CCFF00] hover:text-black hover:border-[#CCFF00] transition-all w-fit"
                    >
                      Initiate Case Study
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="md:col-span-5 px-6 md:px-0 order-2 md:order-1 md:text-right flex flex-col h-full justify-center">
                  <div className="border-r-0 md:border-r-2 border-[#CCFF00] pr-0 md:pr-6 transition-all duration-500 group-hover:border-white">
                    <div className="flex items-center gap-3 mb-2 justify-start md:justify-end">
                      <span className="mono-font text-xs text-gray-400 uppercase">
                        {project.category}
                      </span>
                      <span className="w-8 h-[1px] bg-gray-700"></span>
                      <span className="mono-font text-xs text-gray-500">
                        PRJ_0{project.id}
                      </span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold mb-2 group-hover:text-[#CCFF00] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="mono-font text-[#CCFF00] text-xs md:text-sm font-bold uppercase tracking-wider mb-4">
                      {project.tagline}
                    </div>
                    <p className="text-gray-400 mb-6 max-w-md ml-auto leading-relaxed text-sm md:text-base">
                      {project.description}
                    </p>
                    <div className="grid grid-cols-2 gap-y-1 text-xs mono-font text-gray-500 mb-6 text-left md:text-right">
                      <div>CLIENT: {project.client}</div>
                      <div>YEAR: {project.year}</div>
                      <div>STACK: {project.stack}</div>
                      <div>TIMELINE: {project.timeline}</div>
                    </div>
                    <div className="flex justify-start md:justify-end">
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-white border border-white/20 px-5 py-2 rounded-full uppercase font-bold tracking-widest text-[10px] hover:bg-[#CCFF00] hover:text-black hover:border-[#CCFF00] transition-all w-fit"
                      >
                        Initiate Case Study
                      </a>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-7 relative overflow-hidden aspect-[16/9] order-1 md:order-2 project-img-container">
                  <div className="w-full h-full bg-[#111]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1974}
                      height={1110}
                      className="object-cover w-full h-full grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur px-3 py-1 border border-white/20 mono-font text-xs text-[#CCFF00]">
                    STATUS :: {project.status}
                  </div>
                  <div className="absolute top-4 left-4">
                    <ArrowUpRight className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:translate-x-2 group-hover:-translate-y-2" />
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

