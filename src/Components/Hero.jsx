import React, { useState } from "react";
import { Mail, ShieldCheck, Star, ThumbsUp, Menu, X } from "lucide-react";
import heroimage from "../assets/housewife-young-smiling-woman-with-basin-with-cleansing-appliances.jpg";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white font-sans text-slate-800 h-fit w-full">
      {/* --- NAVIGATION --- */}
      <nav className="relative flex items-center justify-between px-4 sm:px-6 py-4 max-w-7xl mx-auto z-30">
        <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer flex-shrink-0">
          {/* Modernized Icon Container - Smaller on mobile */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-[#56ab2f] blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full" />
            
            <div className="relative bg-gradient-to-br from-[#56ab2f] to-[#4a9328] p-1.5 sm:p-2 rounded-xl shadow-sm group-hover:shadow-emerald-200 group-hover:-rotate-12 transition-all duration-500 ease-out">
              <div className="border-[2.5px] border-white w-4 h-4 sm:w-5 sm:h-5 rounded-md flex items-center justify-center">
                <div className="bg-white w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full animate-pulse" />
              </div>
            </div>
          </div>

          {/* Brand Text Stack - Smaller text on mobile */}
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="text-[#2d5a84] font-black text-xl sm:text-2xl tracking-[calc(-0.05em)] leading-none group-hover:text-[#56ab2f] transition-colors duration-300">
                OZED
              </span>
              <span className="w-1.5 h-1.5 bg-[#56ab2f] rounded-full ml-0.5 mt-1.5 sm:mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100" />
            </div>
            
            <div className="overflow-hidden">
              <span className="text-[8px] sm:text-[9px] block leading-none font-bold text-slate-400 uppercase tracking-[0.3em] translate-y-0 group-hover:-translate-y-full transition-transform duration-500">
                Cleaning Service
              </span>
              <span className="text-[8px] sm:text-[9px] block leading-none font-bold text-[#56ab2f] uppercase tracking-[0.3em] translate-y-full group-hover:-translate-y-full transition-transform duration-500">
                Professional
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
          <a className="text-[#56ab2f] border-b-2 border-[#56ab2f] cursor-pointer">Home</a>
          <a className="hover:text-[#56ab2f] cursor-pointer transition-colors">About Us</a>
          <a className="hover:text-[#56ab2f] cursor-pointer transition-colors">Services</a>
          <a className="hover:text-[#56ab2f] cursor-pointer transition-colors">Pricing</a>
          <a className="hover:text-[#56ab2f] cursor-pointer transition-colors">Contact</a>
          <div className="flex items-center gap-2 text-slate-400 text-sm ml-4">
            <Mail size={14} />
            <span>info@ozedcleaning.co.uk</span>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            className="text-slate-700 focus:outline-none transition-transform active:scale-95"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-slate-200 z-50 transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center gap-6 py-8 px-6 text-center font-medium text-slate-700">
            <a
              className="text-[#56ab2f] text-lg hover:text-[#4a9328] transition-colors cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              className="text-lg hover:text-[#56ab2f] transition-colors cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>
            <a
              className="text-lg hover:text-[#56ab2f] transition-colors cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              className="text-lg hover:text-[#56ab2f] transition-colors cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <a
              className="text-lg hover:text-[#56ab2f] transition-colors cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <div className="flex items-center gap-3 text-slate-500 mt-4 pt-4 border-t border-slate-100 w-full justify-center">
              <Mail size={16} />
              <span className="text-sm">info@ozedcleaning.co.uk</span>
            </div>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <main className="h-screen relative overflow-hidden bg-gradient-to-r from-slate-50 to-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroimage}
            alt="Professional cleaning service"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/40 to-white/40 md:bg-gradient-to-l md:from-transparent md:via-white/50 md:to-white" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24 md:py-28 min-h-[85vh] sm:min-h-[80vh] md:min-h-[80vh] lg:min-h-screen flex items-center">
          <div className="w-full md:w-1/2 space-y-8 md:space-y-10 text-center md:text-left">
            <h1 className="text-4xl max-sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#0b0642] leading-tight">
              Expert Deep Cleaning Services in Bexley, UK
            </h1>

            <p className="text-3xl sm:text-4xl md:text-4xl text-[#0b0642e5] font-semibold">
              Only{" "}
              <span className="text-[#56ab2f] text-5xl max-sm:text-4xl md:text-6xl font-bold">
                £30
              </span>{" "}
              Per Room
            </p>

            <p className="text-xl sm:text-2xl md:text-xl text-[#0b0642d0] font-medium italic">
              Professional & Reliable Cleaning for Your Home
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-6 justify-center md:justify-start">
              <button className="w-full sm:w-auto bg-gradient-to-t from-[#2c700d] to-[#4a9328] hover:from-[#4a9328] hover:to-[#3c7a20] text-white px-10 py-4 rounded-lg font-bold text-xl shadow-lg shadow-green-200 transition active:scale-95">
                Get a Quote
              </button>
              <button className="w-full sm:w-auto bg-gradient-to-t from-[#1c4b77] to-[#23486a] hover:from-[#23486a] hover:to-[#1b3a55] text-white px-10 py-4 rounded-lg font-bold text-xl shadow-lg shadow-blue-200 transition active:scale-95">
                Book a Cleaning
              </button>
            </div>

            {/* BADGES - Larger and more spaced on mobile */}
            <div className="pt-12 sm:pt-16 flex flex-wrap justify-center md:justify-start items-center gap-8 sm:gap-12">
              {[
                { icon: <ShieldCheck />, label: "Fully Insured", desc: "£5m Public Liability" },
                { icon: <Star />, label: "Top Rated", desc: "4.9/5 Average Rating" },
                { icon: <ThumbsUp />, label: "Expert Staff", desc: "DBS Checked & Vetted" }
              ].map((badge, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 group cursor-default min-w-[180px]"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#56ab2f] opacity-20 blur-lg group-hover:opacity-40 transition-opacity rounded-full"></div>
                    <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-slate-100 shadow-md group-hover:shadow-emerald-200 group-hover:-translate-y-1 transition-all duration-300">
                      <div className="text-[#56ab2f]">
                        {React.cloneElement(badge.icon, { size: 28, strokeWidth: 2.5 })}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <span className="text-base sm:text-lg font-extrabold text-[#0b0642ef] tracking-tight leading-none group-hover:text-[#56ab2f] transition-colors">
                      {badge.label}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-500 font-semibold tracking-wide uppercase italic">
                      {badge.desc}
                    </span>
                    <div className="h-[2px] w-0 bg-[#56ab2f]/40 group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Curved Wave Shape */}
      <div className="relative w-full h-24 sm:h-32 -mt-16 sm:-mt-20 z-20 overflow-hidden bg-transparent">
        <svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 left-0 w-full h-full fill-white"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,176C384,192,480,192,576,176C672,160,768,128,864,122.7C960,117,1056,139,1152,144C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <div className="absolute inset-0 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)] pointer-events-none" />
      </div>
    </div>
  );
};

export default Hero;