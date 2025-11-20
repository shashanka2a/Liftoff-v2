"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Layers, 
  Smartphone, 
  Globe, 
  Menu, 
  X, 
  Play, 
  ShieldCheck, 
  HardHat,
  Glasses,
  BrainCircuit,
  Cpu,
  ScanFace,
  QrCode,
  Zap,
  BarChart3,
  Construction,
  CheckCircle2,
  Activity,
  Map,
  Sun,
  Moon
} from 'lucide-react';

// --- Utility Hook for Scroll Animations ---
const useOnScreen = (options: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Only trigger once
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return [ref, isVisible] as const;
};

// --- Components ---

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const FadeIn = ({ children, delay = 0, className = "" }: FadeInProps) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar = ({ isDark, toggleTheme }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? (isDark ? 'py-3 bg-[#091f31]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl' : 'py-3 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-lg')
          : 'py-6 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer relative z-50">
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_-5px_rgba(91,81,255,0.5)] bg-gradient-to-br from-[#5b51ff] to-[#c8a2ff]`}>
              <Layers className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span className={`text-xl font-bold tracking-tight font-mono ${isDark ? 'text-white' : 'text-[#091f31]'}`}>
                BOREALIS<span className="text-[#5b51ff]">XR</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Products', 'Solutions', 'Mission', 'Contact'].map((item) => (
              <a key={item} href="#" className={`text-sm font-medium transition-colors relative group ${isDark ? 'text-slate-400 hover:text-[#c8a2ff]' : 'text-slate-600 hover:text-[#5b51ff]'}`}>
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5b51ff] transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button 
                onClick={toggleTheme} 
                className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-white/10 text-slate-300' : 'hover:bg-slate-100 text-slate-600'}`}
            >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button className={`font-medium text-sm transition-colors ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-[#091f31]'}`}>Sign In</button>
            <button className="bg-[#5b51ff] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#4a42d4] transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_-10px_rgba(91,81,255,0.5)]">
              Request Demo
            </button>
          </div>

          <div className="flex items-center gap-4 md:hidden">
             <button 
                onClick={toggleTheme} 
                className={`p-2 rounded-full transition-colors ${isDark ? 'text-slate-300' : 'text-slate-600'}`}
            >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`relative z-50 p-2 -mr-2 ${isDark ? 'text-white' : 'text-[#091f31]'}`}>
                {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden pt-24 px-6 flex flex-col ${isDark ? 'bg-[#091f31]' : 'bg-white'}`}>
         {['Products', 'Solutions', 'Mission', 'Contact'].map((item, i) => (
            <a key={item} href="#" className={`text-3xl font-light py-4 border-b transition-colors ${isDark ? 'text-white border-white/5 hover:text-[#c8a2ff]' : 'text-[#091f31] border-slate-200 hover:text-[#5b51ff]'}`} style={{transitionDelay: `${i*50}ms`}}>
              {item}
            </a>
          ))}
      </div>
    </>
  );
};

interface HeroProps {
  isDark: boolean;
}

const Hero = ({ isDark }: HeroProps) => {
  return (
    <section className={`relative min-h-[100dvh] flex items-center justify-center pt-32 pb-20 overflow-hidden transition-colors duration-500 ${isDark ? 'bg-[#091f31]' : 'bg-slate-50'}`}>
      {/* Blueprint Grid Background */}
      <div 
        className={`absolute inset-0 bg-[linear-gradient(to_right,var(--line)_1px,transparent_1px),linear-gradient(to_bottom,var(--line)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10`} 
        style={{ '--line': isDark ? 'rgba(200,162,255,0.08)' : 'rgba(91,81,255,0.05)' } as React.CSSProperties}
      />
      
      {/* Ambient Glows */}
      <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[128px] -z-10 transition-colors duration-500 ${isDark ? 'bg-[#5b51ff]/20' : 'bg-[#5b51ff]/10'}`} />
      <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[128px] -z-10 transition-colors duration-500 ${isDark ? 'bg-[#c8a2ff]/10' : 'bg-[#c8a2ff]/20'}`} />
      
      <div className="max-w-7xl mx-auto px-6 text-center z-10 w-full">
        <FadeIn delay={0}>
          <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md shadow-[0_0_15px_-5px_rgba(91,81,255,0.3)]
             ${isDark ? 'bg-[#5b51ff]/10 border-[#5b51ff]/20 text-[#c8a2ff]' : 'bg-white border-[#5b51ff]/20 text-[#5b51ff]'}`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5b51ff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5b51ff]"></span>
            </span>
            Live Site Intelligence
          </div>
        </FadeIn>
        
        <FadeIn delay={100}>
          <h1 className={`text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-[1.05] mb-8 font-display ${isDark ? 'text-white' : 'text-[#091f31]'}`}>
            The Future is <br />
            <span className="bg-gradient-to-r from-[#5b51ff] via-[#c8a2ff] to-[#5b51ff] text-transparent bg-clip-text drop-shadow-xl">Virtually Zero.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            We combine AI, VR, and AR to eliminate incidents and rework. 
            The first operating system for the <span className={isDark ? 'text-white font-medium' : 'text-[#091f31] font-medium'}>connected jobsite</span>.
          </p>
        </FadeIn>

        <FadeIn delay={300} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button className="w-full sm:w-auto px-8 py-4 bg-[#5b51ff] text-white rounded-full font-bold hover:bg-[#4a42d4] transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(91,81,255,0.6)] flex items-center justify-center gap-3 group">
            Start Platform Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className={`w-full sm:w-auto px-8 py-4 bg-transparent border rounded-full font-bold transition-all flex items-center justify-center gap-3 backdrop-blur-sm group 
             ${isDark ? 'text-white border-white/10 hover:bg-white/5' : 'text-[#091f31] border-slate-300 hover:bg-slate-100'}`}>
            <Play className={`w-4 h-4 group-hover:scale-110 transition-transform ${isDark ? 'fill-white text-white' : 'fill-[#091f31] text-[#091f31]'}`} />
            Watch Showreel
          </button>
        </FadeIn>

        {/* Hero Visual: AR HUD Interface */}
        <FadeIn delay={500} className="mt-20 relative perspective-1000">
          <div className="relative mx-auto max-w-6xl">
            <div className={`relative rounded-3xl border backdrop-blur-2xl p-2 shadow-2xl ring-1 ring-white/10 overflow-hidden md:rotate-x-12 transition-all duration-1000 hover:rotate-x-0 group
               ${isDark ? 'bg-[#091f31]/60 border-white/10' : 'bg-white/60 border-slate-200'}`}>
              
              {/* Gloss Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent rounded-3xl pointer-events-none z-20" />
              
              <div className={`rounded-2xl aspect-[16/9] md:aspect-[21/9] relative flex overflow-hidden transition-all
                  ${isDark 
                     ? 'bg-[#020617] group-hover:shadow-[inset_0_0_100px_rgba(91,81,255,0.1)]' 
                     : 'bg-slate-50 group-hover:shadow-[inset_0_0_100px_rgba(91,81,255,0.05)]'}`}>
                 
                 {/* Background Schematic */}
                 <div className="absolute inset-0 opacity-30" style={{ 
                     backgroundImage: `radial-gradient(${isDark ? '#5b51ff' : '#091f31'} 1px, transparent 1px)`, 
                     backgroundSize: '30px 30px' 
                 }}></div>

                 {/* Map Layer */}
                 <div className="absolute inset-0 flex items-center justify-center">
                     <div className={`w-[120%] h-[120%] border-[0.5px] rounded-full absolute animate-[spin_60s_linear_infinite] ${isDark ? 'border-[#5b51ff]/20' : 'border-[#5b51ff]/10'}`}></div>
                     <div className={`w-[80%] h-[80%] border-[0.5px] border-dashed rounded-full absolute animate-[spin_40s_linear_infinite_reverse] ${isDark ? 'border-[#c8a2ff]/20' : 'border-[#5b51ff]/20'}`}></div>
                 </div>

                 {/* UI Elements */}
                 <div className="absolute top-6 left-6 z-30">
                     <div className={`flex items-center gap-3 backdrop-blur-md border p-2 pr-4 rounded-lg ${isDark ? 'bg-[#091f31]/80 border-white/10' : 'bg-white/80 border-slate-200'}`}>
                         <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_red]"></div>
                         <div className={`font-mono text-xs tracking-wider ${isDark ? 'text-[#c8a2ff]' : 'text-[#5b51ff]'}`}>LIVE FEED • CAM-04</div>
                     </div>
                 </div>

                 {/* Central Focus */}
                 <div className="absolute inset-0 flex items-center justify-center z-30">
                     <div className="relative">
                         <Construction className={`w-24 h-24 ${isDark ? 'text-[#5b51ff]/20' : 'text-[#091f31]/10'}`} />
                         <div className={`absolute -top-8 -right-8 w-16 h-16 border-t-2 border-r-2 rounded-tr-2xl ${isDark ? 'border-[#5b51ff]/50' : 'border-[#091f31]/30'}`}></div>
                         <div className={`absolute -bottom-8 -left-8 w-16 h-16 border-b-2 border-l-2 rounded-bl-2xl ${isDark ? 'border-[#5b51ff]/50' : 'border-[#091f31]/30'}`}></div>
                         <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                             <div className={`px-3 py-1 border rounded text-[10px] font-mono tracking-widest backdrop-blur-md
                                ${isDark ? 'bg-[#5b51ff]/20 border-[#5b51ff]/30 text-[#c8a2ff]' : 'bg-white/80 border-[#5b51ff]/30 text-[#5b51ff]'}`}>
                                 SCANNING STRUCTURAL INTEGRITY
                             </div>
                         </div>
                     </div>
                 </div>

                 {/* Side Data Panels (Hidden on Mobile) */}
                 <div className={`hidden md:block absolute right-6 top-6 bottom-6 w-64 backdrop-blur-md border rounded-xl p-4 z-30 ${isDark ? 'bg-[#091f31]/80 border-white/10' : 'bg-white/80 border-slate-200'}`}>
                     <div className={`text-xs font-mono mb-4 uppercase border-b pb-2 ${isDark ? 'text-slate-500 border-white/10' : 'text-slate-400 border-slate-200'}`}>Site Metrics</div>
                     <div className="space-y-4">
                         {[
                             { label: 'Worker Count', val: '234', trend: '+12%', color: isDark ? 'text-white' : 'text-[#091f31]' },
                             { label: 'Air Quality', val: '98 AQI', trend: 'Good', color: 'text-[#c8a2ff]' },
                             { label: 'Heavy Machinery', val: 'Active', trend: 'Zone B', color: 'text-[#5b51ff]' }
                         ].map((metric, i) => (
                             <div key={i} className="group/item">
                                 <div className="flex justify-between text-xs text-slate-400 mb-1">{metric.label}</div>
                                 <div className={`text-lg font-mono font-bold ${metric.color} flex justify-between items-center`}>
                                     {metric.val}
                                     <span className={`text-[10px] opacity-60 px-1.5 py-0.5 rounded ${isDark ? 'bg-white/5' : 'bg-slate-100'}`}>{metric.trend}</span>
                                 </div>
                                 <div className={`w-full h-0.5 mt-2 overflow-hidden ${isDark ? 'bg-white/10' : 'bg-slate-200'}`}>
                                     <div className="h-full bg-[#5b51ff] w-2/3 group-hover/item:w-full transition-all duration-500"></div>
                                 </div>
                             </div>
                         ))}
                     </div>
                 </div>

              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

interface StatCardProps {
  value: string;
  label: string;
  sub: string;
  delay: number;
  isDark: boolean;
}

const StatCard = ({ value, label, sub, delay, isDark }: StatCardProps) => (
  <FadeIn delay={delay} className={`group relative p-8 border-l first:border-l-0 transition-colors duration-500
      ${isDark ? 'border-white/5 bg-[#091f31] hover:bg-[#0b2440]' : 'border-slate-200 bg-white hover:bg-slate-50'}`}>
    <div className="absolute inset-0 bg-gradient-to-b from-[#5b51ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10 flex flex-col items-center text-center">
        <div className={`text-4xl md:text-5xl font-bold mb-3 tracking-tight font-display group-hover:scale-110 transition-transform duration-500 ease-out ${isDark ? 'text-white' : 'text-[#091f31]'}`}>{value}</div>
        <div className="text-sm font-bold text-[#5b51ff] uppercase tracking-widest mb-3">{label}</div>
        <div className={`text-xs max-w-[200px] leading-relaxed transition-colors ${isDark ? 'text-slate-500 group-hover:text-slate-400' : 'text-slate-500 group-hover:text-slate-600'}`}>{sub}</div>
    </div>
  </FadeIn>
);

interface FeatureGridProps {
  isDark: boolean;
}

const FeatureGrid = ({ isDark }: FeatureGridProps) => {
  const products = [
    { id: "XRD", name: "Borealis XRD", icon: BarChart3, desc: "Enterprise dashboard for onboarding, certification tracking, and workforce analytics." },
    { id: "XRC", name: "Borealis XRC", icon: Smartphone, desc: "Mobile site access with geofencing, QR check-in, and emergency mustering." },
    { id: "XRT", name: "Borealis XRT", icon: Glasses, desc: "VR training simulations that build muscle memory for high-risk scenarios." },
    { id: "XRI", name: "Borealis XRI", icon: BrainCircuit, desc: "AI-powered safety orientation and HoloGPT chat assistance for field queries." },
    { id: "XRV", name: "Borealis XRV", icon: ScanFace, desc: "AR overlays visualizing BIM models directly onto the physical jobsite." },
    { id: "XRAI", name: "SafetyBot AI", icon: Cpu, desc: "24/7 intelligent agent monitoring site protocols and compliance data." },
  ];

  return (
    <section className={`py-32 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-[#091f31]' : 'bg-slate-50'}`}>
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-[#5b51ff]/50 to-transparent`} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24 text-center max-w-3xl mx-auto">
            <FadeIn>
                <h2 className={`text-4xl md:text-5xl font-bold mb-8 font-display ${isDark ? 'text-white' : 'text-[#091f31]'}`}>The Complete <span className="text-[#5b51ff]">Jobsite Ecosystem</span></h2>
            </FadeIn>
            <FadeIn delay={100}>
                <p className={`text-lg md:text-xl leading-relaxed font-light ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    A unified platform connecting field workers, safety managers, and project executives. 
                    From onboarding to onsite execution, we close the loop on safety.
                </p>
            </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => {
            const IconComponent = p.icon;
            return (
             <FadeIn key={i} delay={i * 100} className="group relative h-full">
                <div className="absolute -inset-0.5 bg-gradient-to-b from-[#5b51ff]/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl blur transition duration-500" />
                <div className={`relative h-full border rounded-2xl p-8 transition-colors duration-300 flex flex-col
                    ${isDark ? 'bg-[#0b2440] border-white/10 hover:bg-[#0e2d50]' : 'bg-white border-slate-200 hover:border-[#5b51ff]/30 shadow-sm hover:shadow-lg'}`}>
                    <div className="flex justify-between items-start mb-8">
                        <div className={`w-14 h-14 rounded-xl border flex items-center justify-center transition-transform duration-300 shadow-lg group-hover:scale-110
                            ${isDark ? 'bg-[#091f31] border-white/10 text-[#c8a2ff]' : 'bg-slate-50 border-slate-100 text-[#5b51ff]'}`}>
                            <IconComponent className="w-7 h-7" strokeWidth={1.5} />
                        </div>
                        <span className={`text-[10px] font-mono border px-2 py-1 rounded tracking-wider transition-colors
                            ${isDark ? 'text-slate-500 border-white/10 bg-white/5 group-hover:text-white' : 'text-slate-400 border-slate-200 bg-slate-100 group-hover:text-[#091f31]'}`}>
                            {p.id}
                        </span>
                    </div>
                    <h3 className={`text-xl font-bold mb-4 font-display ${isDark ? 'text-white' : 'text-[#091f31]'}`}>{p.name}</h3>
                    <p className={`leading-relaxed text-sm flex-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{p.desc}</p>
                    <div className="mt-6 pt-6 border-t border-white/5 flex items-center text-[#5b51ff] text-sm font-bold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        Learn more <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                </div>
             </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

interface ContentBlockProps {
  reverse?: boolean;
  title: string;
  subtitle: string;
  desc: string;
  list: string[];
  type: 'mobile' | 'vr';
  isDark: boolean;
}

const ContentBlock = ({ reverse, title, subtitle, desc, list, type, isDark }: ContentBlockProps) => {
  return (
    <section className={`py-32 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-[#091f31]' : 'bg-white'}`}>
       {/* Decorative BG Elements */}
       <div className={`absolute top-1/2 ${reverse ? 'left-0' : 'right-0'} -translate-y-1/2 w-[800px] h-[800px] blur-[120px] rounded-full pointer-events-none transition-colors duration-500 ${isDark ? 'bg-[#5b51ff]/10' : 'bg-[#5b51ff]/5'}`} />
       <div 
            className={`absolute inset-0 bg-[linear-gradient(var(--dot)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(circle_600px_at_center,black,transparent)] pointer-events-none`} 
            style={{ '--dot': isDark ? '#ffffff05' : '#00000005' } as React.CSSProperties}
       />

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        <div className={`flex-1 ${reverse ? 'lg:order-2' : ''}`}>
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[#5b51ff]"></div>
                <h3 className={`font-bold tracking-widest uppercase text-sm font-mono ${isDark ? 'text-[#c8a2ff]' : 'text-[#5b51ff]'}`}>{subtitle}</h3>
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-8 leading-tight font-display ${isDark ? 'text-white' : 'text-[#091f31]'}`}>
              {title}
            </h2>
            <p className={`text-lg mb-10 leading-relaxed font-light ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {desc}
            </p>
            
            <ul className="space-y-5">
              {list.map((item, i) => (
                <li key={i} className={`flex items-start gap-4 group ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center border transition-colors ${isDark ? 'bg-[#5b51ff]/20 border-[#5b51ff]/50 group-hover:bg-[#5b51ff]/40' : 'bg-[#5b51ff]/10 border-[#5b51ff]/30 group-hover:bg-[#5b51ff]/20'}`}>
                      <CheckCircle2 className={`w-3 h-3 ${isDark ? 'text-[#c8a2ff]' : 'text-[#5b51ff]'}`} />
                  </div>
                  <span className={`${isDark ? 'group-hover:text-white' : 'group-hover:text-[#091f31]'} transition-colors`}>{item}</span>
                </li>
              ))}
            </ul>
            
            <button className="mt-10 text-[#5b51ff] border-b border-[#5b51ff] pb-1 hover:text-[#c8a2ff] hover:border-[#c8a2ff] transition-colors text-sm font-bold uppercase tracking-widest">
                Explore Features
            </button>
          </FadeIn>
        </div>

        <div className={`flex-1 w-full ${reverse ? 'lg:order-1' : ''}`}>
          <FadeIn delay={200} className="relative flex justify-center perspective-1000">
             {type === 'mobile' ? (
                // High-Fidelity Mobile Visual
                <div className={`relative w-[320px] h-[640px] rounded-[50px] shadow-2xl border-[8px] ring-1 overflow-hidden transform rotate-y-12 hover:rotate-y-0 transition-transform duration-700 ease-out
                    ${isDark ? 'bg-[#091f31] border-[#1a2c42] ring-white/20' : 'bg-white border-slate-100 ring-slate-200'}`}>
                    {/* Dynamic Island */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20"></div>
                    
                    {/* Status Bar */}
                    <div className={`absolute top-4 px-8 w-full flex justify-between text-[10px] font-medium z-10 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        <span>9:41</span>
                        <div className="flex gap-1">
                            <Zap className={`w-3 h-3 ${isDark ? 'fill-white' : 'fill-slate-900'}`} />
                            <span>5G</span>
                        </div>
                    </div>

                    {/* App Header */}
                    <div className={`absolute top-0 left-0 right-0 h-28 z-0 flex flex-col justify-end px-6 pb-4 border-b ${isDark ? 'bg-gradient-to-b from-[#0b2440] to-[#091f31] border-white/5' : 'bg-slate-50 border-slate-200'}`}>
                        <div className="flex justify-between items-end">
                            <div>
                                <div className="text-[#5b51ff] text-xs uppercase tracking-wider mb-1">Site Access</div>
                                <div className={`font-bold text-xl ${isDark ? 'text-white' : 'text-[#091f31]'}`}>Borealis XRC</div>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-[#5b51ff] flex items-center justify-center shadow-[0_0_10px_rgba(91,81,255,0.4)]">
                                <CheckCircle2 className="w-5 h-5 text-white" />
                            </div>
                        </div>
                    </div>

                    {/* App Content */}
                    <div className={`p-6 pt-32 space-y-4 h-full ${isDark ? 'bg-[#091f31]' : 'bg-white'}`}>
                        {/* QR Code Card */}
                        <div className={`p-4 rounded-2xl shadow-lg text-center relative overflow-hidden group ${isDark ? 'bg-white' : 'bg-slate-50 border border-slate-200'}`}>
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#5b51ff] to-[#c8a2ff] animate-pulse"></div>
                            <QrCode className="w-32 h-32 text-slate-900 mx-auto mb-2 mix-blend-multiply" />
                            <div className="text-slate-900 font-mono font-bold text-xs tracking-widest">REF: #8842-AX</div>
                            <div className="text-xs text-slate-500 mt-1">Scan at Turnstile A</div>
                        </div>

                        {/* Permit Status */}
                        <div className="text-xs text-slate-500 font-mono uppercase mt-6 mb-2 pl-1">Today's Permits</div>
                        {[1, 2].map(i => (
                            <div key={i} className={`p-3 rounded-xl border flex gap-3 items-center group transition-colors
                                ${isDark ? 'bg-[#0b2440] border-white/10 hover:border-[#5b51ff]/30' : 'bg-white border-slate-200 hover:border-[#5b51ff]/30 shadow-sm'}`}>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors
                                    ${isDark ? 'bg-[#091f31] text-[#c8a2ff] group-hover:bg-[#5b51ff]/20' : 'bg-slate-100 text-[#5b51ff] group-hover:bg-[#5b51ff]/10'}`}>
                                    <HardHat className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className={`text-sm font-medium ${isDark ? 'text-white' : 'text-[#091f31]'}`}>High Altitude L{i}</div>
                                    <div className="text-[10px] text-[#5b51ff] bg-[#5b51ff]/10 px-1.5 py-0.5 rounded inline-block mt-1">ACTIVE • 4h REMAINING</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Nav */}
                    <div className={`absolute bottom-0 w-full h-20 backdrop-blur border-t flex justify-around items-center px-6 pb-4
                        ${isDark ? 'bg-[#091f31]/90 border-white/5' : 'bg-white/90 border-slate-200'}`}>
                         <div className="flex flex-col items-center gap-1 text-[#5b51ff]">
                            <Smartphone className="w-5 h-5" />
                         </div>
                         <div className="flex flex-col items-center gap-1 text-slate-400 hover:text-[#5b51ff] transition-colors">
                            <Map className="w-5 h-5" />
                         </div>
                         <div className="flex flex-col items-center gap-1 text-slate-400 hover:text-[#5b51ff] transition-colors">
                            <Activity className="w-5 h-5" />
                         </div>
                    </div>
                </div>
             ) : (
                // VR Schematic Visual
                <div className="relative w-full aspect-square max-w-lg group">
                    <div className={`absolute inset-0 bg-gradient-to-tr from-[#c8a2ff]/20 to-[#5b51ff]/20 rounded-3xl blur-3xl -z-10 opacity-50 group-hover:opacity-80 transition-opacity duration-1000`} />
                    
                    <div className={`relative h-full w-full rounded-3xl border overflow-hidden shadow-2xl ${isDark ? 'bg-[#091f31] border-white/10' : 'bg-white border-slate-200'}`}>
                         {/* Simulation Header */}
                         <div className={`p-6 border-b flex justify-between items-center backdrop-blur-sm ${isDark ? 'bg-[#0b2440]/50 border-white/10' : 'bg-slate-50/50 border-slate-200'}`}>
                            <div className="flex gap-3 items-center">
                                <div className="relative flex h-3 w-3">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                </div>
                                <span className={`font-mono text-xs tracking-widest ${isDark ? 'text-white' : 'text-[#091f31]'}`}>LIVE SIMULATION // XRT-04</span>
                            </div>
                            <div className="text-slate-500 font-mono text-xs">00:14:22</div>
                         </div>
                         
                         {/* 3D Viewport */}
                         <div className={`flex-1 h-[calc(100%-80px)] relative flex items-center justify-center 
                             ${isDark ? 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0b2440] via-[#091f31] to-[#091f31]' : 'bg-slate-50'}`}>
                             
                             {/* Grid Floor */}
                             <div className="absolute inset-0" style={{
                                 backgroundImage: `linear-gradient(0deg, transparent 24%, ${isDark ? 'rgba(255, 255, 255, .05)' : 'rgba(9, 31, 49, .05)'} 25%, ${isDark ? 'rgba(255, 255, 255, .05)' : 'rgba(9, 31, 49, .05)'} 26%, transparent 27%, transparent 74%, ${isDark ? 'rgba(255, 255, 255, .05)' : 'rgba(9, 31, 49, .05)'} 75%, ${isDark ? 'rgba(255, 255, 255, .05)' : 'rgba(9, 31, 49, .05)'} 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, ${isDark ? 'rgba(255, 255, 255, .05)' : 'rgba(9, 31, 49, .05)'} 25%, ${isDark ? 'rgba(255, 255, 255, .05)' : 'rgba(9, 31, 49, .05)'} 26%, transparent 27%, transparent 74%, ${isDark ? 'rgba(255, 255, 255, .05)' : 'rgba(9, 31, 49, .05)'} 75%, ${isDark ? 'rgba(255, 255, 255, .05)' : 'rgba(9, 31, 49, .05)'} 76%, transparent 77%, transparent)`,
                                 backgroundSize: '50px 50px',
                                 transform: 'perspective(500px) rotateX(60deg) translateY(100px) scale(2)',
                                 opacity: 0.3
                             }}></div>

                             {/* Central Object (Abstract Glasses) */}
                             <div className={`relative z-10 p-12 rounded-full border backdrop-blur-sm animate-pulse-slow
                                 ${isDark ? 'border-[#5b51ff]/30 bg-[#5b51ff]/10' : 'border-[#5b51ff]/20 bg-[#5b51ff]/5'}`}>
                                 <Glasses className={`w-24 h-24 drop-shadow-[0_0_15px_rgba(91,81,255,0.5)] ${isDark ? 'text-[#c8a2ff]' : 'text-[#5b51ff]'}`} strokeWidth={1} />
                             </div>
                             
                             {/* Floating UI Nodes */}
                             <div className={`absolute top-1/4 left-1/4 border px-3 py-1 rounded text-[10px] font-mono shadow-lg animate-bounce
                                 ${isDark ? 'bg-[#091f31] border-white/20 text-[#5b51ff]' : 'bg-white border-slate-200 text-[#5b51ff]'}`}>
                                 EYE TRACKING: ON
                             </div>
                             <div className={`absolute bottom-1/3 right-1/4 border px-3 py-1 rounded text-[10px] font-mono shadow-lg
                                 ${isDark ? 'bg-[#091f31] border-white/20 text-[#c8a2ff]' : 'bg-white border-slate-200 text-[#5b51ff]'}`} style={{animationDelay: '1s'}}>
                                 HAPTIC FEEDBACK: 85%
                             </div>
                         </div>
                    </div>
                </div>
             )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

interface StatsSectionProps {
  isDark: boolean;
}

const StatsSection = ({ isDark }: StatsSectionProps) => (
  <section className={`border-y relative transition-colors duration-500 ${isDark ? 'border-white/5 bg-[#091f31]' : 'border-slate-200 bg-slate-50'}`}>
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
      <StatCard value="4X" label="Faster" sub="Training completion rate vs classroom" delay={0} isDark={isDark} />
      <StatCard value="3.7X" label="Connection" sub="Increase in emotional retention" delay={100} isDark={isDark} />
      <StatCard value="Zero" label="Incidents" sub="The ultimate goal for every project" delay={200} isDark={isDark} />
      <StatCard value="$65B" label="Savings" sub="Potential recovered rework costs" delay={300} isDark={isDark} />
    </div>
  </section>
);

interface CTAProps {
  isDark: boolean;
}

const CTA = ({ isDark }: CTAProps) => {
  return (
    <section className={`py-32 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-[#091f31]' : 'bg-slate-50'}`}>
      <div 
        className={`absolute inset-0 bg-[radial-gradient(circle_at_center,var(--grad-start)_0%,var(--grad-end)_60%)] opacity-40`} 
        style={{ 
          '--grad-start': isDark ? '#5b51ff' : '#c8a2ff', 
          '--grad-end': isDark ? '#091f31' : '#f8fafc' 
        } as React.CSSProperties}
      />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <FadeIn>
          <h2 className={`text-5xl md:text-7xl font-bold mb-8 tracking-tight font-display ${isDark ? 'text-white' : 'text-[#091f31]'}`}>
            Welcome to <br/> what's next.
          </h2>
          <p className={`text-xl mb-12 max-w-2xl mx-auto font-light ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Join the leaders in construction who are building safer, smarter, and faster with Borealis XR.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-12 py-5 bg-[#5b51ff] text-white rounded-full font-bold text-lg hover:bg-[#4a42d4] transition-all hover:scale-105 shadow-[0_0_30px_rgba(91,81,255,0.4)]">
              Request a Demo
            </button>
            <button className={`w-full sm:w-auto px-12 py-5 bg-transparent border rounded-full font-bold text-lg transition-all backdrop-blur-sm
                ${isDark ? 'text-white border-white/20 hover:bg-white/5' : 'text-[#091f31] border-slate-300 hover:bg-slate-100'}`}>
              Contact Sales
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

interface FooterProps {
  isDark: boolean;
}

const Footer = ({ isDark }: FooterProps) => {
  return (
    <footer className={`border-t pt-24 pb-12 transition-colors duration-500 ${isDark ? 'bg-[#091f31] border-white/10 text-slate-400' : 'bg-white border-slate-200 text-slate-600'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
             <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#5b51ff] to-[#c8a2ff]">
                  <Layers className="w-4 h-4 text-white" />
                </div>
                <span className={`text-xl font-bold uppercase font-mono ${isDark ? 'text-white' : 'text-[#091f31]'}`}>BOREALIS</span>
             </div>
             <p className="text-sm leading-relaxed max-w-sm mb-8">
                Borealis is harnessing the superhuman power of artificial intelligence, virtual reality, and augmented reality to deliver the next dimension of safety and performance.
             </p>
             <div className="flex gap-4">
                 {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                     <a key={social} href="#" className={`w-10 h-10 rounded-full flex items-center justify-center transition-all
                        ${isDark ? 'bg-white/5 hover:bg-white/10 hover:text-white' : 'bg-slate-100 hover:bg-slate-200 hover:text-[#5b51ff]'}`}>
                        <span className="sr-only">{social}</span>
                        <Globe className="w-4 h-4" />
                     </a>
                 ))}
             </div>
          </div>
          
          <div className="md:col-span-2">
              <h4 className={`font-bold mb-6 ${isDark ? 'text-white' : 'text-[#091f31]'}`}>Products</h4>
              <ul className="space-y-4 text-sm">
                {['XRD Dashboard', 'XRC Access', 'XRT Training', 'XRI Safety AI'].map(item => (
                    <li key={item}><a href="#" className="hover:text-[#5b51ff] transition-colors">{item}</a></li>
                ))}
              </ul>
          </div>
          
          <div className="md:col-span-2">
              <h4 className={`font-bold mb-6 ${isDark ? 'text-white' : 'text-[#091f31]'}`}>Company</h4>
              <ul className="space-y-4 text-sm">
                {['Mission', 'Careers', 'Blog', 'Contact'].map(item => (
                    <li key={item}><a href="#" className="hover:text-[#5b51ff] transition-colors">{item}</a></li>
                ))}
              </ul>
          </div>

          <div className="md:col-span-3">
             <h4 className={`font-bold mb-6 ${isDark ? 'text-white' : 'text-[#091f31]'}`}>Stay Updated</h4>
             <div className="flex gap-2">
                 <input type="email" placeholder="Enter email" className={`border rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-[#5b51ff] 
                    ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-[#091f31]'}`} />
                 <button className="bg-[#5b51ff] text-white px-4 py-2 rounded-lg hover:bg-[#4a42d4] transition-colors"><ArrowRight className="w-4 h-4" /></button>
             </div>
          </div>
        </div>
        
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs border-white/5">
            <p>© 2025 Borealis XR. All rights reserved.</p>
            <div className="flex gap-6">
                <a href="#" className={`hover:text-[#5b51ff] transition-colors`}>Privacy Policy</a>
                <a href="#" className={`hover:text-[#5b51ff] transition-colors`}>Terms of Service</a>
                <a href="#" className={`hover:text-[#5b51ff] transition-colors`}>Cookie Settings</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App Component ---
export default function BorealisPage() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  useEffect(() => {
    // Add dynamic styles
    const styleId = 'borealis-dynamic-styles';
    let styleElement = document.getElementById(styleId) as HTMLStyleElement;
    
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }
    
    styleElement.textContent = `
      /* Custom Scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: ${isDark ? '#091f31' : '#f8fafc'};
      }
      ::-webkit-scrollbar-thumb {
        background: #5b51ff;
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #4a42d4;
      }
    `;
    
    return () => {
      const element = document.getElementById(styleId);
      if (element) element.remove();
    };
  }, [isDark]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        
        .font-display {
          font-family: 'Space Grotesk', sans-serif;
        }
        
        .animate-pulse-slow {
            animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .perspective-1000 {
            perspective: 1000px;
        }

        @keyframes pulse {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.15; }
        }
      `}} />

      <div className={`min-h-screen font-sans selection:bg-[#5b51ff]/30 selection:text-[#5b51ff] overflow-x-hidden transition-colors duration-500 ${isDark ? 'bg-[#091f31] text-slate-200' : 'bg-slate-50 text-slate-900'}`}>
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        
        <main>
          <Hero isDark={isDark} />
          <StatsSection isDark={isDark} />
          <FeatureGrid isDark={isDark} />
          <ContentBlock 
              isDark={isDark}
              type="mobile"
              subtitle="Borealis XRC"
              title="The Ultimate Workforce Management Solution"
              desc="Manage and maintain a secure project site with real-time data. Includes geofencing, QR code check-ins, and automated time tracking."
              list={["Precise Geofencing", "QR Code Site Access", "Emergency Notifications"]}
          />
          <ContentBlock 
              isDark={isDark}
              reverse 
              type="vr"
              subtitle="Borealis XRT"
              title="Immersive XR Training"
              desc="Train your workers in safe, controlled, true-to-life VR environments. Reduce risks and costs while increasing emotional connection to the content."
              list={["True-to-life Simulations", "Multi-user Group Training", "AI Safety Personas"]}
          />
          <CTA isDark={isDark} />
        </main>
        
        <Footer isDark={isDark} />
      </div>
    </>
  );
}

