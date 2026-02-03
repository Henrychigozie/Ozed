import React, { useState, useEffect } from "react";
import { ShieldCheck, Star, ThumbsUp, ChevronRight } from "lucide-react";

import heroimage from "../assets/housewife-young-smiling-woman-with-basin-with-cleansing-appliances.jpg";

const Hero = ({ onNavigate = () => {} }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    /* Fade-in animation */
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

    /* Carousel animation */
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

  return (
    <div className="bg-white font-sans text-slate-800 h-fit w-full">
      {/* HERO SECTION */}
      <main className="relative overflow-hidden bg-linear-to-r from-slate-50 to-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroimage}
            alt="Professional cleaning service"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-b from-white/90 via-white/30 to-white/30 md:bg-linear-to-l md:from-transparent md:via-white/50 md:to-white" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 min-h-[70vh] md:min-h-[80vh] lg:min-h-screen flex items-center">
          <div className="w-full md:w-1/2 space-y-6 md:space-y-8 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0b0642] leading-tight">
              Expert Deep Cleaning Services in Bexley, UK
            </h1>

            <p className="text-2xl sm:text-3xl text-[#0b0642e5] font-semibold">
              Only{" "}
              <span className="text-[#56ab2f] text-4xl sm:text-5xl font-bold">
                £30
              </span>{" "}
              Per Room
            </p>

            <p className="text-lg text-[#0b0642d0] font-medium italic">
              Professional & Reliable Cleaning for Your Home
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <button className="bg-linear-to-t from-[#2c700d] to-[#4a9328] text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg transition active:scale-95">
                Get a Quote
              </button>
              <button className="bg-linear-to-t from-[#1c4b77] to-[#23486a] text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg transition active:scale-95">
                Book a Cleaning
              </button>
            </div>

            {/* BADGES */}
            <div className="pt-10 flex flex-wrap justify-center md:justify-start gap-8">
              {[
                {
                  icon: <ShieldCheck />,
                  label: "Fully Insured",
                  desc: "£5m Public Liability",
                },
                {
                  icon: <Star />,
                  label: "Top Rated",
                  desc: "4.9/5 Average Rating",
                },
                {
                  icon: <ThumbsUp />,
                  label: "Expert Staff",
                  desc: "DBS Checked & Vetted",
                },
              ].map((badge, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-xl bg-white shadow flex items-center justify-center text-[#56ab2f]">
                    {React.cloneElement(badge.icon, {
                      size: 22,
                      strokeWidth: 2.5,
                    })}
                  </div>
                  <div>
                    <p className="font-bold text-[#0b0642]">{badge.label}</p>
                    <p className="text-xs text-slate-500 uppercase italic">
                      {badge.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* ABOUT TEASER */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Image Carousel */}
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
                        <img
                          src={src}
                          alt="Luxury home interior"
                          loading="lazy"
                          className="w-full h-[280px] object-cover rounded-xl filter brightness-95 contrast-105 saturate-90"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2 space-y-8 fade-in">
              <h3 className="text-3xl md:text-4xl font-bold text-[#0b0642]">
                Why Choose Ozed?
              </h3>

              <p className="text-lg text-gray-700 max-w-xl">
                Expert deep-cleaning services crafted for refined homes in
                Bexley. Our discreet professionals deliver impeccable results
                using premium, eco-conscious products.
              </p>

       <button
  onClick={() => {
    onNavigate("about");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }}
  className="group inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-t from-[#1c4b77] to-[#23486a] text-white text-lg font-medium hover:brightness-110 transition-all shadow-lg active:scale-95"
>
  Discover Our Standards 
  <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
</button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
