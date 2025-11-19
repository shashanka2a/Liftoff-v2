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
    link: "https://www.adverzeo.online/",
  },
  {
    id: 2,
    title: "Payflow",
    tagline: "/// Seamless Global Finance",
    description:
      "Global fintech platform with instant settlements.",
    image: "/payflow.png",
    category: "Fintech • Web App • Design System",
    client: "PAYFLOW",
    year: "2024",
    stack: "WEB APP / DESIGN SYSTEM",
    output: "PLATFORM",
    timeline: "1 Month",
    status: "DEPLOYED",
    layout: "right",
    link: "https://www.payflow.cash/",
  },
  {
    id: 3,
    title: "ThirdWeb",
    tagline: "/// Exceptional Web3 Experiences",
    description:
      "Web3 platform development and strategy.",
    image: "/ThirdWeb.png",
    category: "Web3 • Development • Strategy",
    client: "THIRDWEB",
    year: "2024",
    stack: "WEB3 / DEVELOPMENT",
    output: "PLATFORM",
    timeline: "Ongoing",
    caseId: "ARCHIVE_03",
    layout: "left",
    link: "https://thirdweb.academy/",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-12 sm:py-16 md:py-24">
      <div className="px-4 sm:px-6 md:px-20 mb-8 sm:mb-12 md:mb-16">
        <span className="mono-font text-[#CCFF00] text-xs uppercase tracking-widest mb-2 block">
          [03] Flight Log
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9] display-font">
          SELECTED
          <br />
          <span
            className="text-transparent stroke-text"
            style={{ WebkitTextStroke: "2px #fff", opacity: 0.5 }}
          >
            WORK
          </span>
        </h2>
      </div>

      <div className="px-0 md:px-20 flex flex-col gap-12 sm:gap-16 md:gap-20">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center border-b border-white/5 pb-8 sm:pb-12"
          >
            {project.layout === "left" ? (
              <>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:col-span-7 relative overflow-hidden aspect-[16/9] project-img-container block cursor-pointer touch-manipulation"
                  aria-label={`View ${project.title} project`}
                >
                  <div className="w-full h-full bg-[#111]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={2000}
                      height={1125}
                      className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-black/80 backdrop-blur px-2 sm:px-3 py-1 border border-white/20 mono-font text-[10px] sm:text-xs text-[#CCFF00]">
                    CASE :: {project.caseId}
                  </div>
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                    <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:translate-x-2 group-hover:-translate-y-2" />
                  </div>
                </a>
                <div className="md:col-span-5 px-4 sm:px-6 md:px-0 flex flex-col h-full justify-center mt-4 sm:mt-0">
                  <div className="border-l-2 border-[#CCFF00] pl-4 sm:pl-6 transition-all duration-500 group-hover:border-white">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                      <span className="mono-font text-[10px] sm:text-xs text-gray-500">
                        PRJ_0{project.id}
                      </span>
                      <span className="w-6 sm:w-8 h-[1px] bg-gray-700"></span>
                      <span className="mono-font text-[10px] sm:text-xs text-gray-400 uppercase break-words">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 group-hover:text-[#CCFF00] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="mono-font text-[#CCFF00] text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider mb-3 sm:mb-4">
                      {project.tagline}
                    </div>
                    <p className="text-gray-400 mb-4 sm:mb-6 max-w-md leading-relaxed text-sm md:text-base">
                      {project.description}
                    </p>
                    <div className="grid grid-cols-2 gap-y-1 gap-x-2 sm:gap-x-0 text-[10px] sm:text-xs mono-font text-gray-500 mb-4 sm:mb-6">
                      <div className="break-words">CLIENT: {project.client}</div>
                      <div>YEAR: {project.year}</div>
                      <div className="break-words">STACK: {project.stack}</div>
                      <div>TIMELINE: {project.timeline}</div>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 text-white border border-white/20 px-4 sm:px-5 py-2.5 sm:py-2 rounded-full uppercase font-bold tracking-widest text-[10px] hover:bg-[#CCFF00] hover:text-black hover:border-[#CCFF00] transition-all w-fit touch-manipulation min-h-[44px]"
                    >
                      View Live Project
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="md:col-span-5 px-4 sm:px-6 md:px-0 order-2 md:order-1 md:text-right flex flex-col h-full justify-center mt-4 sm:mt-0">
                  <div className="border-r-0 md:border-r-2 border-[#CCFF00] pr-0 md:pr-6 transition-all duration-500 group-hover:border-white">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 justify-start md:justify-end">
                      <span className="mono-font text-[10px] sm:text-xs text-gray-400 uppercase break-words">
                        {project.category}
                      </span>
                      <span className="w-6 sm:w-8 h-[1px] bg-gray-700"></span>
                      <span className="mono-font text-[10px] sm:text-xs text-gray-500">
                        PRJ_0{project.id}
                      </span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 group-hover:text-[#CCFF00] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="mono-font text-[#CCFF00] text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider mb-3 sm:mb-4">
                      {project.tagline}
                    </div>
                    <p className="text-gray-400 mb-4 sm:mb-6 max-w-md ml-auto leading-relaxed text-sm md:text-base">
                      {project.description}
                    </p>
                    <div className="grid grid-cols-2 gap-y-1 gap-x-2 sm:gap-x-0 text-[10px] sm:text-xs mono-font text-gray-500 mb-4 sm:mb-6 text-left md:text-right">
                      <div className="break-words">CLIENT: {project.client}</div>
                      <div>YEAR: {project.year}</div>
                      <div className="break-words">STACK: {project.stack}</div>
                      <div>TIMELINE: {project.timeline}</div>
                    </div>
                    <div className="flex justify-start md:justify-end">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 text-white border border-white/20 px-4 sm:px-5 py-2.5 sm:py-2 rounded-full uppercase font-bold tracking-widest text-[10px] hover:bg-[#CCFF00] hover:text-black hover:border-[#CCFF00] transition-all w-fit touch-manipulation min-h-[44px]"
                      >
                        View Live Project
                      </a>
                    </div>
                  </div>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:col-span-7 relative overflow-hidden aspect-[16/9] order-1 md:order-2 project-img-container block cursor-pointer touch-manipulation"
                  aria-label={`View ${project.title} project`}
                >
                  <div className="w-full h-full bg-[#111]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1974}
                      height={1110}
                      className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black/80 backdrop-blur px-2 sm:px-3 py-1 border border-white/20 mono-font text-[10px] sm:text-xs text-[#CCFF00]">
                    STATUS :: {project.status}
                  </div>
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                    <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:translate-x-2 group-hover:-translate-y-2" />
                  </div>
                </a>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

