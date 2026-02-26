import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Mail, Menu, X, Phone } from "lucide-react";
import Logo from "../assets/logo1.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll animation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 flex items-center justify-between px-4 sm:px-6 py-4 w-full mx-auto z-50 transition-all duration-500 animate-[fadeDown_.6s_ease-out]
      ${scrolled ? "bg-white/95 backdrop-blur shadow-md" : "bg-white "}`}
    >
      {/* Logo Section */}
      <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer shrink-0">
        <div className="relative flex items-center justify-center">
          <img
            src={Logo}
            alt="Chieldeng Logo"
            className="w-13 h-13 object-cover group-hover:border-[#4a9328] transition-colors duration-300"
          />
        </div>

        <div className="flex flex-col">
          <div className="flex items-center">
            <NavLink
              to="/"
              className="text-[#2d5a84] font-black text-xl sm:text-2xl tracking-[calc(-0.05em)] leading-none group-hover:text-[#56ab2f] transition-colors duration-300 max-sm:text-[15px]"
            >
              CHIELDENG LIMITED
            </NavLink>
            <span className="w-1.5 h-1.5 bg-[#56ab2f] rounded-full ml-0.5 mt-1.5 sm:mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100" />
          </div>
          <div className="overflow-hidden">
            <span className="text-[8px] sm:text-[9px] block leading-none font-bold text-slate-400 uppercase tracking-[0.3em] translate-y-0 group-hover:-translate-y-full transition-transform duration-500">
              Cleaning Service
            </span>
          </div>
        </div>
      </div>

      {/* Desktop Nav Links - Hidden on Mobile/Tablet, visible on LG up */}
      <div className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium text-slate-600">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "text-[#56ab2f] border-b-2 border-[#56ab2f]" : "hover:text-[#56ab2f]"} cursor-pointer transition-colors pb-1`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive ? "text-[#56ab2f] border-b-2 border-[#56ab2f]" : "hover:text-[#56ab2f]"} cursor-pointer transition-colors pb-1`
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/service"
          className={({ isActive }) =>
            `${isActive ? "text-[#56ab2f] border-b-2 border-[#56ab2f]" : "hover:text-[#56ab2f]"} cursor-pointer transition-colors pb-1`
          }
        >
          Services
        </NavLink>
        {/* <NavLink 
          to="/contact"
          className={({ isActive }) =>
            `${isActive ? "text-[#56ab2f] border-b-2 border-[#56ab2f]" : "hover:text-[#56ab2f]"} cursor-pointer transition-colors pb-1`
          }
        >
          Contact
        </NavLink> */}

        <div className="flex items-center gap-3 ml-2">
          <a
            href="tel:01234567890"
            className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold text-[#2d5a84] bg-white border border-slate-200 hover:bg-slate-50 transition"
          >
            <Phone size={14} className="mr-2" />
            Call
          </a>
          <NavLink
            target="_blank"
            to="https://chieldenglimited.bookingkoala.com/booknow"
            className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold text-white bg-linear-to-t from-[#2c700d] to-[#4a9328] hover:from-[#4a9328] hover:to-[#3c7a20] transition whitespace-nowrap"
          >
            Book a Service
          </NavLink>
        </div>

        {/* Email Section - Hidden on smaller desktops */}
      </div>

      {/* Mobile/Tablet Hamburger Toggle */}
      <div className="lg:hidden flex items-center gap-4">
        {/* Compact Book Button for Tablet */}
        <NavLink
            to="#"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg text-xs font-bold text-white bg-[#56ab2f] uppercase tracking-wider"
          >
            Book Now
        </NavLink>
        <button
          className="text-slate-700 focus:outline-none transition-transform active:scale-95"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile/Tablet Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-slate-100 z-50 transition-all duration-300 ease-in-out overflow-y-auto ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-5 py-8 px-6 text-center font-medium text-slate-700">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `${isActive ? "text-[#56ab2f] text-lg font-bold" : "text-lg hover:text-[#56ab2f]"} transition-colors w-full`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `${isActive ? "text-[#56ab2f] text-lg font-bold" : "text-lg hover:text-[#56ab2f]"} transition-colors w-full`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/service"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `${isActive ? "text-[#56ab2f] text-lg font-bold" : "text-lg hover:text-[#56ab2f]"} transition-colors w-full`
            }
          >
            Services
          </NavLink>
          {/* <NavLink 
            to="/contact" 
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `${isActive ? "text-[#56ab2f] text-lg font-bold" : "text-lg hover:text-[#56ab2f]"} transition-colors w-full`
            }
          >
            Contact
          </NavLink> */}

          <div className="w-full flex flex-col sm:flex-row gap-3 mt-4">
            <a
              href="tel:01234567890"
              onClick={() => setIsOpen(false)}
              className="flex-1 inline-flex justify-center items-center px-6 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#2d5a84] font-bold hover:bg-slate-100 transition"
            >
              <Phone size={18} className="mr-3" />
              Call Now
            </a>
            <NavLink
              target="_blank"
              to="https://chieldenglimited.bookingkoala.com/booknow"
              onClick={() => setIsOpen(false)}
              className="flex-1 inline-flex justify-center items-center px-6 py-3 rounded-xl bg-[#56ab2f] text-white font-bold shadow-lg shadow-emerald-200/50 hover:opacity-90 transition"
            >
              Book a Service
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
