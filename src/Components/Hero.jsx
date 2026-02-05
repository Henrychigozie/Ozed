import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, Star, ThumbsUp, ChevronRight, Home, Key, 
  Utensils, Bath, ChevronDown, CheckCircle2 
} from "lucide-react";

import FooterSection from "../Components/footer";
import heroimage from "../assets/housewife-young-smiling-woman-with-basin-with-cleansing-appliances.jpg";

const Hero = () => {
  // 1. STATE FOR DROPDOWN AND IMAGE LOADING
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Select a Service");
  const [imageLoaded, setImageLoaded] = useState(false);

  const services = [
    "Residential Deep Clean",
    "End of Tenancy",
    "Commercial Cleaning",
    "Oven / Kitchen Special"
  ];

  useEffect(() => {
    // Fade-in animation observer
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

    // Carousel animation
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
    <div className="bg-white font-sans text-slate-800 h-screen w-full mt-16">
      {/* HERO SECTION */}
      <main className="relative overflow-hidden bg-slate-100">
        {/* 2. OPTIMIZED BACKGROUND IMAGE WITH FADE-IN */}
        <div className="absolute inset-0 z-0 bg-slate-200">
          <img
            src={heroimage}
            alt="Professional cleaning service"
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
                imageLoaded ? "opacity-100" : "opacity-0"
            }`}
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
              <span className="text-[#56ab2f] text-4xl sm:text-5xl font-bold">£30</span>{" "}
              Per Room
            </p>

            <p className="text-lg text-[#0b0642d0] font-medium italic">
              Professional & Reliable Cleaning for Your Home
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <button className="bg-linear-to-t from-[#2c700d] to-[#4a9328] text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg transition hover:brightness-140 active:scale-95">
                Get a Quote
              </button>
              <button className="bg-linear-to-t from-[#1c4b77] to-[#23486a] text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg transition active:scale-95 hover:brightness-140 ">
                Book a Cleaning
              </button>
            </div>

            {/* BADGES */}
            <div className="pt-10 flex flex-wrap justify-center md:justify-start gap-8">
              {[
                { icon: <ShieldCheck />, label: "Fully Insured", desc: "£5m Public Liability" },
                { icon: <Star />, label: "Top Rated", desc: "4.9/5 Average Rating" },
                { icon: <ThumbsUp />, label: "Expert Staff", desc: "DBS Checked & Vetted" },
              ].map((badge, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-xl bg-white shadow flex items-center justify-center text-[#56ab2f]">
                    {React.cloneElement(badge.icon, { size: 22, strokeWidth: 2.5 })}
                  </div>
                  <div>
                    <p className="font-bold text-[#0b0642]">{badge.label}</p>
                    <p className="text-xs text-slate-500 uppercase italic">{badge.desc}</p>
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

   <Link
  to="/about"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="group inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-t from-[#1c4b77] to-[#23486a] text-white text-lg font-medium hover:brightness-110 transition-all shadow-lg active:scale-95"
>
  Discover Our Standards 
  <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
</Link>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICE GRID INTRO */}

<section className="py-16 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-12 fade-in">
      <h2 className="text-2xl md:text-3xl font-bold text-[#0b0642] mb-2">
        Our Professional Services
      </h2>
      <p className="text-slate-500 font-medium">Click a service to explore our expertise and pricing</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { title: "Residential Deep Clean", icon: <Home size={24} />, deal: true },
        { title: "End of Tenancy Clean", icon: <Key size={24} />, deal: false },
        { title: "Kitchen Deep Clean", icon: <Utensils size={24} />, deal: false },
        { title: "Bathroom Deep Clean", icon: <Bath size={24} />, deal: true },
      ].map((service, idx) => (
      <Link
  key={idx}
  to="/service"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="fade-in relative group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-xl hover:border-[#56ab2f30] transition-all duration-300 cursor-pointer text-left active:scale-95"
>
  {/* Icon Container */}
  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-[#2d5a84] group-hover:bg-[#56ab2f] group-hover:text-white transition-all duration-300 shadow-inner">
    {service.icon}
  </div>

  {/* Text */}
  <div className="flex flex-col">
    <span className="font-bold text-[#0b0642] text-lg group-hover:text-[#56ab2f] transition-colors">
      {service.title}
    </span>
    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider flex items-center gap-1">
      View Details <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
    </span>
  </div>

  {service.deal && (
    <span className="absolute -top-2 -right-2 bg-[#e91e63] text-white text-[10px] font-black px-2 py-1 rounded shadow-md italic transform rotate-3">
      DEAL
    </span>
  )}
</Link>
      ))}
    </div>
  </div>
</section>

{/* HOW OZED WORKS SECTION */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="text-center mb-16 fade-in">
      <h2 className="text-3xl md:text-5xl font-extrabold text-[#0b0642] mb-4">
        How Ozed Services Works
      </h2>
      <p className="text-slate-500 text-lg">Professional cleaning in three simple steps</p>
    </div>

    <div className="grid md:grid-cols-3 gap-12 text-center">
      {/* Step 1 */}
      <div className="fade-in space-y-6 group">
        <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto transition-transform group-hover:scale-110 duration-300 shadow-sm border border-slate-100">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3652/3652191.png" 
            alt="Customise" 
            className="w-12 h-12 opacity-80"
          />
        </div>
        <h3 className="text-xl font-bold text-[#0b0642]">
          <span className="text-slate-300 mr-2 text-2xl">1.</span> Customise & Book
        </h3>
        <p className="text-gray-600 leading-relaxed px-4">
          Just specify a few details, pick the date and time, we'll send the right professional.
        </p>
      </div>

      {/* Step 2 */}
      <div className="fade-in space-y-6 group">
        <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto transition-transform group-hover:scale-110 duration-300 shadow-sm border border-slate-100">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/2329/2329013.png" 
            alt="Manage" 
            className="w-12 h-12 opacity-80"
          />
        </div>
        <h3 className="text-xl font-bold text-[#0b0642]">
          <span className="text-slate-300 mr-2 text-2xl">2.</span> Easily manage everything online
        </h3>
        <p className="text-gray-600 leading-relaxed px-4">
          Check prices and availability, re-schedule, re-book or cancel your service any time you like.
        </p>
      </div>

      {/* Step 3 */}
      <div className="fade-in space-y-6 group">
        <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto transition-transform group-hover:scale-110 duration-300 shadow-sm border border-slate-100">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3048/3048122.png" 
            alt="Enjoy" 
            className="w-12 h-12 opacity-80"
          />
        </div>
        <h3 className="text-xl font-bold text-[#0b0642]">
          <span className="text-slate-300 mr-2 text-2xl">3.</span> Enjoy your newfound time!
        </h3>
        <p className="text-gray-600 leading-relaxed px-4">
          Rest, work, play, live... while the professional takes care of everything.
        </p>
      </div>
    </div>

    <div className="mt-16 text-center fade-in">
     <Link 
                to="/service"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-block bg-[#e91e63] hover:bg-[#d81557] text-white px-10 py-4 rounded-lg font-bold text-lg shadow-lg transition-all active:scale-95"
              >
                Book a service
              </Link>
      <p className="mt-4 text-slate-400 text-sm font-medium">Book a service in 30 seconds</p>
    </div>
  </div>
</section>

{/* WHAT OUR CLIENTS SAY SECTION */}
<section className="py-20 bg-slate-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="text-center mb-16 fade-in">
      <h2 className="text-3xl md:text-5xl font-extrabold text-[#0b0642] mb-4">
        What Our Clients Say
      </h2>
      <p className="text-slate-500 text-lg max-w-2xl mx-auto">
        We don't just clean houses; we give people their homes back. Here is why Bexley residents trust Ozed.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          name: "Sarah Jenkins",
          role: "Bexley Homeowner",
          hook: "I finally stopped apologizing for the mess.",
          quote: "Ozed didn't just deep clean the kitchen; they gave me my weekends back with my kids. Walking in and smelling that 'fresh start' is the best part of my Friday.",
          tags: "Deep Clean"
        },
        {
          name: "Marcus Thorne",
          role: "Property Manager",
          hook: "The 'Ozed Glow' is real.",
          quote: "I’ve used dozens of services for my rentals, but these are the first people who actually move the furniture to clean behind it. Absolute professionals.",
          tags: "End of Tenancy"
        },
        {
          name: "Elena Rodriguez",
          role: "Working Professional",
          hook: "A literal weight off my shoulders.",
          quote: "Coming home to a spotless house after a 10-hour shift is a form of self-care. Reliable, discreet, and worth every single penny.",
          tags: "Regular Service"
        }
      ].map((testimonial, idx) => (
        <div 
          key={idx} 
          className="fade-in group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-1 mb-6 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            
            <h4 className="text-xl font-bold text-[#0b0642] mb-3 group-hover:text-[#56ab2f] transition-colors">
              "{testimonial.hook}"
            </h4>
            
            <p className="text-slate-600 leading-relaxed italic mb-8">
              {testimonial.quote}
            </p>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-slate-50">
            <div>
              <p className="font-bold text-[#0b0642]">{testimonial.name}</p>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-tighter">{testimonial.role}</p>
            </div>
            <span className="bg-slate-50 text-[#56ab2f] text-[10px] font-bold px-3 py-1 rounded-full border border-slate-100">
              {testimonial.tags}
            </span>
          </div>
        </div>
      ))}
    </div>

    {/* Elegant Bottom Hook */}
    <div className="mt-16 text-center fade-in">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100 mb-6">
        <span className="flex -space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold overflow-hidden">
               <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
            </div>
          ))}
        </span>
        <p className="text-sm font-semibold text-slate-600 ml-2">
          Join 500+ happy families in Bexley
        </p>
      </div>
    </div>
  </div>
</section>

      {/* CONTACT & ENQUIRY SECTION */}
      <section className="relative py-24 overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Image with same fade-in logic */}
        <div className="absolute inset-0 z-0 bg-slate-900">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury clean interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="fade-in space-y-10 text-white">
              {/* [ ... Left Column Brand Content ... ] */}
              <div className="space-y-4">
                <span className="bg-[#56ab2f] text-white text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">Get in Touch</span>
                <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">Ready to experience <br /> <span className="text-[#56ab2f]">the Ozed standard?</span></h2>
              </div>
              {/* ... existing email/location/status badges ... */}
            </div>

            {/* Right Column: THE PREMIUM FORM */}
            <div className="fade-in bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-[3rem] shadow-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-[#0b0642] mb-8">Request a Quote</h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-[#0b0642] uppercase ml-1">Full Name</label>
                    <input type="text" placeholder="Sarah Jenkins" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-2 focus:ring-[#56ab2f] transition-all outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-[#0b0642] uppercase ml-1">Phone Number</label>
                    <input type="tel" placeholder="07123 456 789" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-2 focus:ring-[#56ab2f] transition-all outline-none" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-[#0b0642] uppercase ml-1">Email Address</label>
                    <input type="email" placeholder="sarah@example.com" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-2 focus:ring-[#56ab2f] transition-all outline-none" />
                  </div>

                  {/* 3. NEW PROFESSIONAL DROPDOWN INTEGRATION */}
                  <div className="space-y-2">
                    <label className="text-xs font-black text-[#0b0642] uppercase ml-1">Service Type</label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl bg-slate-50 border transition-all duration-300 outline-none
                          ${isDropdownOpen ? "bg-white border-[#56ab2f] ring-2 ring-[#56ab2f]" : "border-slate-100"}`}
                      >
                        <span className={`text-sm font-medium ${selectedService === "Select a Service" ? "text-slate-400" : "text-[#0b0642]"}`}>
                          {selectedService}
                        </span>
                        <ChevronDown className={`text-slate-400 transition-transform duration-300 ${isDropdownOpen ? "rotate-180 text-[#56ab2f]" : ""}`} size={18} />
                      </button>

                      {isDropdownOpen && (
                        <>
                          <div className="fixed inset-0 z-20" onClick={() => setIsDropdownOpen(false)} />
                          <div className="absolute top-full left-0 right-0 mt-2 z-30 bg-white border border-slate-100 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2">
                            <div className="py-2">
                              {services.map((service) => (
                                <button
                                  key={service}
                                  type="button"
                                  onClick={() => {
                                    setSelectedService(service);
                                    setIsDropdownOpen(false);
                                  }}
                                  className="w-full text-left px-5 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[#56ab2f] flex items-center justify-between"
                                >
                                  {service}
                                  {selectedService === service && <CheckCircle2 size={14} className="text-[#56ab2f]" />}
                                </button>
                              ))}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-[#0b0642] uppercase ml-1">How can we help?</label>
                  <textarea rows="3" placeholder="Tell us a bit about your property..." className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-2 focus:ring-[#56ab2f] transition-all outline-none resize-none" />
                </div>

                <button className="w-full bg-linear-to-t from-[#2c700d] to-[#4a9328] text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-green-900/20 hover:scale-[1.02] transition-all active:scale-95 flex items-center justify-center gap-3">
                  Send Enquiry
                  <ChevronRight size={22} strokeWidth={3} />
                </button>
                
                <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">🔒 Your data is safe with Ozed Services</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <FooterSection/>
    </div>
  );
};

export default Hero;