import React, { useEffect } from "react";
import { ShieldCheck, Leaf, Calendar, Award, Sparkles } from "lucide-react";

const AboutUs = () => {
  useEffect(() => {
    /* Re-using your fade-in animation logic */
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
      { threshold: 0.15 }
    );
    faders.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white font-sans text-slate-800 overflow-hidden">
      {/* 1. TOP HEADER SECTION */}
      <section className="relative py-20 bg-[#0b0642] text-white">
        <div className="absolute inset-0 opacity-20">
            {/* Background texture or pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            About <span className="text-[#56ab2f]">Ozed</span> Cleaning
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto italic font-light">
            Redefining clean for refined homes in Bexley.
          </p>
        </div>
      </section>

      {/* 2. WHO WE ARE & PICTURE */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b0642]">Who We Are</h2>
            <div className="w-20 h-1.5 bg-[#56ab2f] rounded-full"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              At <strong className="text-[#0b0642]">Ozed Cleaning Service</strong>, we aren't just a general maintenance company—we are specialized deep-cleaning experts. Serving Bexley and surrounding areas, we’ve built our reputation on the belief that a clean home is the foundation of a happy life.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our agency focuses <span className="font-bold underline decoration-[#56ab2f]">solely on domestic deep cleaning</span>, ensuring that every corner of your living space receives the professional attention it deserves.
            </p>
          </div>
          <div className="fade-in">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4239128/pexels-photo-4239128.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Spotless Kitchen Interior" 
                className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
                <p className="text-[#56ab2f] font-bold text-3xl">100%</p>
                <p className="text-slate-500 text-sm uppercase font-bold tracking-widest">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR COMMITMENT (GRID CARDS) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b0642]">Our Commitment</h2>
            <p className="mt-4 text-gray-600">We don’t just "tidy up." We restore.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Professionalism",
                desc: "Our team arrives on time, in uniform, and fully equipped for the task.",
                icon: <Award className="w-8 h-8" />
              },
              {
                title: "Reliability",
                desc: "Count on a consistent, high-quality result every single time we visit.",
                icon: <ShieldCheck className="w-8 h-8" />
              },
              {
                title: "Expertise",
                desc: "Advanced techniques to handle even the toughest cleaning challenges.",
                icon: <Sparkles className="w-8 h-8" />
              }
            ].map((card, i) => (
              <div key={i} className="fade-in bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border-b-4 border-[#56ab2f]">
                <div className="text-[#56ab2f] mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-[#0b0642] mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US (LIST + IMAGE) */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 fade-in">
             <img 
                src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Pristine Living Room" 
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover max-sm:hidden"
              />
          </div>
          <div className="order-1 lg:order-2 fade-in space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b0642]">Why Bexley Chooses Ozed</h2>
            
            <div className="space-y-6">
              {[
                { label: "Experienced Professionals", icon: <Award className="text-[#56ab2f]"/>, text: "Only vetted, trained cleaners enter your home." },
                { label: "Eco-Friendly Focus", icon: <Leaf className="text-[#56ab2f]"/>, text: "Products safe for your family, pets, and the planet." },
                { label: "Flexible Scheduling", icon: <Calendar className="text-[#56ab2f]"/>, text: "We work around your busy life, not the other way around." },
                { label: "Fully Insured", icon: <ShieldCheck className="text-[#56ab2f]"/>, text: "Peace of mind with £5m public liability coverage." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-[#0b0642]">{item.label}</h4>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full sm:w-auto bg-linear-to-t from-[#1c4b77] to-[#23486a] text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition active:scale-95">
              Book Your Deep Clean
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;