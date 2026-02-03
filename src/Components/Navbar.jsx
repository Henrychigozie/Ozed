import React, { useState } from "react";
import { Mail, Menu, X, Phone } from "lucide-react";

const Navbar = ({ onNavigate = () => {}, currentPage = "home" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (page) => {
    setIsOpen(false);
    onNavigate(page);
    if (typeof window !== "undefined") window.scrollTo(0, 0);
  };

  return (
    <nav className="relative flex items-center justify-between px-4 sm:px-6 py-4 max-w-7xl mx-auto z-30">
      <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer shrink-0">
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-[#56ab2f] blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full" />

          <div className="relative bg-linear-to-br from-[#56ab2f] to-[#4a9328] p-1.5 sm:p-2 rounded-xl shadow-sm group-hover:shadow-emerald-200 group-hover:-rotate-12 transition-all duration-500 ease-out">
            <div className="border-[2.5px] border-white w-4 h-4 sm:w-5 sm:h-5 rounded-md flex items-center justify-center">
              <div className="bg-white w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full animate-pulse" />
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center">
            <button
              onClick={() => handleNavigate("home")}
              className="text-[#2d5a84] font-black text-xl sm:text-2xl tracking-[calc(-0.05em)] leading-none group-hover:text-[#56ab2f] transition-colors duration-300"
            >
              OZED
            </button>
            <span className="w-1.5 h-1.5 bg-[#56ab2f] rounded-full ml-0.5 mt-1.5 sm:mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100" />
          </div>

          <div className="overflow-hidden">
            <span className="text-[8px] sm:text-[9px] block leading-none font-bold text-slate-400 uppercase tracking-[0.3em] translate-y-0 group-hover:-translate-y-full transition-transform duration-500">
              Cleaning Service
            </span>
          </div>
        </div>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
        <button
          onClick={() => handleNavigate("home")}
          className={`${currentPage === "home" ? "text-[#56ab2f] border-b-2 border-[#56ab2f]" : "hover:text-[#56ab2f]"} cursor-pointer transition-colors`}
        >
          Home
        </button>
        <button
          onClick={() => handleNavigate("about")}
          className={`${currentPage === "about" ? "text-[#56ab2f] border-b-2 border-[#56ab2f]" : "hover:text-[#56ab2f]"} cursor-pointer transition-colors`}
        >
          About Us
        </button>
        <button className="hover:text-[#56ab2f] cursor-pointer transition-colors">
          Services
        </button>
        <button className="hover:text-[#56ab2f] cursor-pointer transition-colors">
          Pricing
        </button>
        <button className="hover:text-[#56ab2f] cursor-pointer transition-colors">
          Contact
        </button>

        <div className="flex items-center gap-3 ml-2">
          <a
            href="tel:01234567890"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold text-[#2d5a84] bg-white border border-slate-200 hover:bg-slate-50 transition"
          >
            <Phone size={14} className="mr-2" />
            Call
          </a>
          <a
            href="#book"
            className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold text-white bg-linear-to-t from-[#2c700d] to-[#4a9328] hover:from-[#4a9328] hover:to-[#3c7a20] transition"
          >
            Book a Service
          </a>
        </div>

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
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-slate-200 z-50 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
      >
        <div className="flex flex-col items-center gap-6 py-8 px-6 text-center font-medium text-slate-700">
          <button
            onClick={() => handleNavigate("home")}
            className="text-[#56ab2f] text-lg hover:text-[#4a9328] transition-colors cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => handleNavigate("about")}
            className="text-lg hover:text-[#56ab2f] transition-colors cursor-pointer"
          >
            About Us
          </button>
          <button className="text-lg hover:text-[#56ab2f] transition-colors cursor-pointer">
            Services
          </button>
          <button className="text-lg hover:text-[#56ab2f] transition-colors cursor-pointer">
            Pricing
          </button>
          <button className="text-lg hover:text-[#56ab2f] transition-colors cursor-pointer">
            Contact
          </button>

          <button
            href="tel:01234567890"
            onClick={() => {
              setIsOpen(false); /* link handled by browser via a tags */
            }}
            className="w-full inline-flex justify-center items-center px-6 py-3 rounded-md bg-white border border-slate-200 text-[#2d5a84] font-semibold hover:bg-slate-50 transition"
          >
            <Phone size={16} className="mr-3" />
            Call
          </button>
          <button
            onClick={() => {
              setIsOpen(false); /* keep anchor behavior if needed */
            }}
            className="w-full inline-flex justify-center items-center px-6 py-3 rounded-md bg-linear-to-t from-[#2c700d] to-[#4a9328] text-white font-semibold hover:opacity-90 transition"
          >
            Book a Service
          </button>

          <div className="flex items-center gap-3 text-slate-500 mt-4 pt-4 border-t border-slate-100 w-full justify-center">
            <Mail size={16} />
            <span className="text-sm">info@ozedcleaning.co.uk</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
