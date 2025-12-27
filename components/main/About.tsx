"use client";

import React from 'react';

export default function About() {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-transparent" id = "about">
      
      {/* BACKGROUND GLOWS (Blue vs Pink Contrast) */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      {/* Changed to Pink for that "Little bit pinkish" vibe */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* TOP SECTION: Split Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          
          {/* Left Side: Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-pink-500/30 bg-blue-900/20 backdrop-blur-sm">
              <span className="text-sm font-bold tracking-widest text-pink-300 uppercase">
                Our Mission
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-white">
              Forging the <br />
              {/* Gradient: Sky -> Blue -> Pink */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-pink-500">
                Next Generation
              </span>
            </h2>
            
            <p className="text-lg text-blue-100/80 mb-6 leading-relaxed">
              At <span className="text-white font-semibold">TeachToTech</span>, we don&apos;t just teach code; we architect the future. We believe technology is the ultimate frontier, and we are the navigators charting the course for the next wave of innovators.
            </p>
            
            <p className="text-lg text-blue-100/80 mb-8 leading-relaxed">
              From absolute zero to deployment hero, our curriculum is designed to withstand the pressure of real-world challenges. Join us, and let&apos;s build a smarter world together.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {/* Button Gradient: Blue to Pink */}
              <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-pink-600 text-white font-bold tracking-wide hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all transform hover:-translate-y-1">
                 Meet the Team
              </button>
            </div>
          </div>

          {/* Right Side: Image Composition */}
          <div className="w-full lg:w-1/2 relative group">
            {/* Main Image Frame with Pink/Purple Glow Border */}
            <div className="relative rounded-2xl overflow-hidden border border-indigo-500/30 shadow-[0_0_50px_rgba(79,70,229,0.2)]">
               {/* Indigo overlay to bridge Blue and Pink */}
               <div className="absolute inset-0 bg-indigo-900/20 mix-blend-overlay z-10"></div>
               <img 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200" 
                 alt="Team working" 
                 className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
               />
            </div>

            {/* Floating Glass Stats Card */}
            <div className="absolute -bottom-10 -left-10 bg-indigo-950/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl max-w-xs z-20 hidden md:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-pink-500/20 rounded-lg">
                  <svg className="w-6 h-6 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-white">5,000+</h4>
                  <p className="text-xs text-indigo-200 uppercase tracking-wider">Students Trained</p>
                </div>
              </div>
              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-[85%] bg-gradient-to-r from-blue-400 to-pink-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: 3 Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            // Hover effect shifts to Pinkish-Purple
            <div key={idx} className="group p-8 rounded-3xl bg-blue-950/20 border border-indigo-500/20 backdrop-blur-sm hover:bg-indigo-900/40 hover:border-pink-500/40 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-blue-500/20 to-pink-500/20 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-indigo-200/70 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// Helper Data for the 3 Cards
const features = [
  {
    title: "Code",
    description: "Our course material isn't just up-to-date; it's from the future. We constantly update our stack to match industry horizons.",
    icon: (
      // Sky Blue Icon
      <svg className="w-7 h-7 text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    ),
  },
  {
    title: "Compete",
    description: "Learn from industry titans who have orbited the biggest tech giants. Direct guidance to help you navigate your career trajectory.",
    icon: (
      // Pink Icon for balance
      <svg className="w-7 h-7 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
    ),
  },
  {
    title: "Collaborate",
    description: "Join a network of alumni that spans across continents and companies. Your connection to the TeachToTech galaxy never fades.",
    icon: (
      // Purple/Indigo Icon
      <svg className="w-7 h-7 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
  },
];