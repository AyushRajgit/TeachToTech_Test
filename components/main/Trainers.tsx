"use client";

import React, { useState, useEffect, useRef } from 'react';

interface Trainer {
  id: number;
  name: string;
  specialty: string;
  image: string;
}

// Mock Data
const trainerData: Trainer[] = [
  {
    id: 1,
    name: "Ayush Raj",
    specialty: "Strength & Conditioning",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80", 
  },
  {
    id: 2,
    name: "Paras Sharma",
    specialty: "Yoga & Flexibility",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
  },
  {
    id: 3,
    name: "Vipin Soni",
    specialty: "HIIT Specialist",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
  },
  {
    id: 4,
    name: "Emily Blunt",
    specialty: "Pilates Instructor",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80",
  },
  {
    id: 5,
    name: "Alex Morgan",
    specialty: "Strength & Conditioning",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80", 
  },
  {
    id: 6,
    name: "Sarah Jenkins",
    specialty: "Yoga & Flexibility",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
  },
  {
    id: 7,
    name: "Mike Ross",
    specialty: "HIIT Specialist",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80",
  },
  {
    id: 8,
    name: "Emily Blunt",
    specialty: "Pilates Instructor",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80",
  }
];

const Trainers: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  
  // Slower delay for better readability (4 seconds)
  const delay = 4000; 

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    if (!isPaused) {
      timeoutRef.current = window.setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === trainerData.length - 1 ? 0 : prevIndex + 1
        );
      }, delay);
    }
    return () => {
      resetTimeout();
    };
  }, [currentIndex, isPaused]);

  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="trainers"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Our Trainers
      </h1>
    <div className="flex justify-center items-center py-10 bg-transparent">
      {/* Cinema Frame Container 
        - Creates a dark border
        - Adds a glow effect (shadow-cyan-500/20) for that futuristic screen look
      */}
      <div 
        className="relative w-[90%] max-w-2xl aspect-video bg-black rounded-2xl border-4 border-gray-900 shadow-2xl shadow-cyan-500/10 overflow-hidden group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* Slider Track */}
        <div 
          className="flex h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{ transform: `translateX(${-currentIndex * 100}%)` }}
        >
          {trainerData.map((trainer) => (
            <div className="min-w-full h-full relative" key={trainer.id}>
              {/* Image takes full height/width */}
              <img 
                src={trainer.image} 
                alt={trainer.name} 
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Cinematic Gradient Overlay (Bottom Up) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              {/* Text Content - Floating at bottom left */}
              <div className="absolute bottom-0 left-0 p-8 w-full text-white">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-bold tracking-wider uppercase bg-cyan-600 rounded-sm">
                    Trainer
                  </span>
                  <h3 className="text-4xl font-black tracking-tight mb-1 font-sans">
                    {trainer.name}
                  </h3>
                  <p className="text-lg text-gray-300 font-light mb-4">
                    {trainer.specialty}
                  </p>
                  
                  {/* Action Button */}
                  {/* <button className="px-6 py-2 bg-white text-black font-bold text-sm uppercase tracking-wide rounded hover:bg-cyan-400 transition-colors">
                    O
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Bar Indicators (Top of Screen) */}
        <div className="absolute top-4 right-4 flex space-x-1 z-10">
          {trainerData.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx ? "w-8 bg-cyan-400" : "w-2 bg-white/30 hover:bg-white"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Trainers;