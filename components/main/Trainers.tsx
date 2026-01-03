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
    specialty: "Data Structures & Algorithms (Java)",
    image: "https://img.freepik.com/premium-photo/young-indian-man-suit-working-laptop-writing-some-note-office_75648-6308.jpg", 
  },
  {
    id: 2,
    name: "Paras Sharma",
    specialty: "Data Structures & Algorithms (C/C++)",
    image: "https://static.vecteezy.com/system/resources/previews/032/168/051/large_2x/entrepreneur-laptop-males-happy-office-happiness-technology-job-young-businessman-men-indian-smile-sitting-photo.jpg",
  },
  {
    id: 3,
    name: "Vipin Soni",
    specialty: "Data Structures & Algorithms (Python)",
    image: "https://img.freepik.com/free-photo/young-indian-man-using-laptop-white-background_75648-10302.jpg",
  },
  {
    id: 4,
    name: "Varun Kumar",
    specialty: "Data Structures & Algorithms (C/C++)",
    image: "https://img.freepik.com/premium-photo/indian-office-laptop-businessman-men_163305-211537.jpg",
  },
  {
    id: 5,
    name: "Anuj Gupta",
    specialty: "Java Spring Boot & Web Development",
    image: "https://t3.ftcdn.net/jpg/05/14/96/62/360_F_514966286_uXqNvMHnKNWcC07IGKsF3nZXlupmrOaP.jpg", 
  },
  {
    id: 6,
    name: "Sushil Kumar",
    specialty: "Java Spring Boot & Web Development",
    image: "https://t4.ftcdn.net/jpg/06/33/33/73/360_F_633337344_1WLesoWNnbfLGCXjTySjrtFDbv29cRF1.jpg",
  },
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
      {/* CHANGED: Text Gradient to Green/Emerald */}
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 py-20">
        Our Trainers
      </h1>
    <div className="flex justify-center items-center py-10 bg-transparent">
      {/* Cinema Frame Container 
        - CHANGED: Shadow color to emerald for green glow
      */}
      <div 
        className="relative w-[90%] max-w-2xl aspect-video bg-black rounded-2xl border-4 border-gray-900 shadow-2xl shadow-emerald-500/10 overflow-hidden group"
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
                  {/* CHANGED: Badge background to Emerald */}
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-bold tracking-wider uppercase bg-emerald-600 rounded-sm">
                    Trainer
                  </span>
                  <h3 className="text-4xl font-black tracking-tight mb-1 font-sans">
                    {trainer.name}
                  </h3>
                  <p className="text-lg text-gray-300 font-light mb-4">
                    {trainer.specialty}
                  </p>
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
              // CHANGED: Active indicator color to Emerald/Bright Green
              className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx ? "w-8 bg-emerald-400" : "w-2 bg-white/30 hover:bg-white"
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