import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Star,
  ThumbsUp,
  ChevronRight,
  Home,
  Key,
  Utensils,
  Bath,
  ChevronDown,
  CheckCircle2,
  Sparkles,
  CalendarCheck
} from "lucide-react";

import FooterSection from "../Components/footer";
import heroimage from "../assets/image002.png";

const Hero = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Select a Service");
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // State to track which service card details are expanded
  const [expandedService, setExpandedService] = useState(null);

  // Service Data (Mirroring your Service Page)
  const servicesData = [
    {
      title: "Standard Cleaning",
      icon: <Key size={24} />,
      desc: [
        "Dusting and surface wiping",
        "Sweeping, mopping, vacuuming",
        "Kitchen and bathroom cleaning",
        "Trash removal",
        "Interior window cleaning"
      ],
      deal: false,
    },
    {
      title: "Deep Cleaning",
      icon: <Utensils size={24} />,
      desc: [
        "Intensive kitchen and Bathroom scrubbing",
        "Baseboards and door frames",
        "Hard-to-reach areas",
        "Post-construction cleaning"
      ],
      deal: false,
    },
    {
      title: "Move-In/Move-Out Cleaning",
      icon: <Bath size={24} />,
      desc: [
        "Full room cleaning",
        "Cabinets and closets",
        "Deep kitchen and bathroom sanitation",
        "Floor cleaning",
        "Appliances interior cleaning"
      ],
      deal: true,
    },
  ];

  const services = ["Standard Cleaning", "Deep Cleaning", "Move-In/Move-Out Cleaning"];

  const trustAvatars = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=faces",
  ];

  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );
    faders.forEach((el) => observer.observe(el));

    const track = document.querySelector(".carousel-track");
    if (!track) return;
    let index = 0;
    const slides = document.querySelectorAll(".carousel-slide");
    const interval = setInterval(() => {
      index = (index + 1) % slides.length;
      track.style.transform = `translateX(-${index * 100}%)`;
    }, 4500);

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  const toggleDetails = (title) => {
    setExpandedService(expandedService === title ? null : title);
  };

  return (
    <div className="font-sans text-slate-800 w-full mt-16">
      {/* Banner */}
      <div className="bg-[#00245B] py-4 px-6 flex justify-center items-center max-md:text-center">
        <p className="text-white text-sm md:text-base font-normal tracking-wide">
          Special Offer Available! Get Amazing Discount on deep cleaning,
          Move-In/Move-Out cleaning. Book today and secure your deal!
        </p>
      </div>

      {/* HERO SECTION */}
      <main className="relative overflow-hidden bg-slate-100">
        <div className="absolute inset-0 z-0">
          <img
            src={heroimage}
            alt="Professional cleaning service"
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover object-left transition-opacity duration-1000 ease-in-out ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
          <div className={`absolute inset-0 transition-opacity duration-1000 bg-linear-to-r from-slate-100 via-slate-100/40 to-transparent md:w-2/3 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
          <div className="absolute inset-0 bg-[#0b0642]/5 md:hidden" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 min-h-[70vh] md:min-h-[80vh] lg:min-h-screen flex items-center">
          <div className="w-full md:w-5/12 space-y-6 md:space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b0642] leading-tight">
                Expert Cleaning Services in London
              </h1>
              <p className="text-sm md:text-base text-[#0b0642d0] font-medium italic">
                Professional & Reliable Cleaning for Your Home & Office
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#0b0642] font-semibold text-sm">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <CheckCircle2 size={18} className="text-[#56ab2f]" /> Fully Insured Staff
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <CheckCircle2 size={18} className="text-[#56ab2f]" /> Eco-Friendly Products
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <CheckCircle2 size={18} className="text-[#56ab2f]" /> 100% Satisfaction
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <CheckCircle2 size={18} className="text-[#56ab2f]" /> Flexible Scheduling
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start">
              <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="bg-linear-to-t from-[#1c4b77] to-[#23486a] text-white px-8 py-3 rounded-xl font-bold text-sm md:text-base shadow-lg transition active:scale-95 hover:brightness-110 text-center">
                Book a Cleaning
              </Link>
              <Link to="/service" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="bg-white border-2 border-slate-200 text-[#0b0642] px-8 py-3 rounded-xl font-bold text-sm md:text-base transition hover:bg-slate-50 active:scale-95 text-center">
                Our Services
              </Link>
            </div>

            <div className="pt-8 border-t border-slate-300/50 flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div className="flex -space-x-3">
                {trustAvatars.map((url, i) => (
                  <img key={i} src={url} alt="Customer" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
                ))}
              </div>
              <div className="text-center md:text-left">
                <p className="text-xs md:text-sm font-bold text-[#0b0642]">
                  Trusted by <span className="text-[#56ab2f]">500+</span> Happy Clients
                </p>
                <div className="flex justify-center md:justify-start text-yellow-400">
                  {[...Array(5)].map((_, i) => (<Star key={i} size={12} fill="currentColor" />))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ABOUT TEASER */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="order-2 lg:order-1 fade-in">
              <div className="image-frame max-w-md mx-auto lg:mx-0">
                <div className="carousel rounded-xl">
                  <div className="carousel-track">
                    {[
                      "https://images.pexels.com/photos/7546651/pexels-photo-7546651.jpeg?auto=compress&cs=tinysrgb&w=1200",
                      "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1200",
                      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200",
                    ].map((src, i) => (
                      <div key={i} className="carousel-slide">
                        <img src={src} alt="Luxury interior" loading="lazy" className="w-full h-[280px] object-cover rounded-xl filter brightness-95" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8 fade-in">
              <h3 className="text-3xl md:text-4xl font-bold text-[#0b0642]">Why Choose CHIELDENG LIMITED?</h3>
              <p className="text-lg text-gray-700 max-w-xl">Expert cleaning services crafted for refined homes in London. Our discreet professionals deliver impeccable results using premium, eco-conscious products.</p>
              <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="group inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-t from-[#1c4b77] to-[#23486a] text-white text-lg font-medium hover:brightness-110 transition-all shadow-lg active:scale-95">
                Discover Our Standards <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES DROPDOWN SECTION */}
      <section id="services-section" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0b0642] mb-2">Our Professional Services</h2>
            <p className="text-slate-500 font-medium">Click a service to explore our expertise and what's included</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {servicesData.map((service, idx) => (
              <div
                key={idx}
                className="fade-in w-full md:w-[380px] bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                {/* Main clickable area */}
                <div 
                  onClick={() => toggleDetails(service.title)}
                  className="p-8 flex items-center gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors relative"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${expandedService === service.title ? 'bg-[#56ab2f] text-white' : 'bg-slate-50 text-[#2d5a84]'}`}>
                    {service.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className={`font-bold text-lg transition-colors ${expandedService === service.title ? 'text-[#56ab2f]' : 'text-[#0b0642]'}`}>
                      {service.title}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider flex items-center gap-1">
                      {expandedService === service.title ? "Hide Details" : "View Details"}
                      <ChevronDown size={12} className={`transition-transform duration-300 ${expandedService === service.title ? "rotate-180" : ""}`} />
                    </span>
                  </div>
                  {service.deal && (
                    <span className="absolute top-4 right-4 bg-[#e91e63] text-white text-[10px] font-black px-2 py-1 rounded shadow-md italic transform rotate-3">DEAL</span>
                  )}
                </div>

                {/* Dropdown Content */}
                <div 
                  className={`transition-all duration-500 ease-in-out border-t border-slate-50 bg-slate-50/30 ${
                    expandedService === service.title ? "max-h-[500px] opacity-100 py-6 px-8" : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <p className="text-xs font-bold text-[#0b0642] uppercase mb-3 tracking-widest">Included in service:</p>
                  <ul className="space-y-2 mb-6">
                    {service.desc.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 size={14} className="text-[#56ab2f] mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="#"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-[#0b0642] hover:bg-[#1c4b77] text-white rounded-xl text-sm font-bold transition-all"
                  >
                    <CalendarCheck size={16} /> Book {service.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default Hero;




