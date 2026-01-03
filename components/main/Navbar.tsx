"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#10b981]/20 bg-[#000000ee] border-b border-[#00ff9d33] z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/TeachToTech_Logo.png"
            alt="logo"
            width={45}
            height={45}
            className="cursor-pointer hover:animate-slowspin rounded-full"
          />

          <span className="font-bold ml-[13px] hidden md:block text-white">
            TeachToTech
          </span>
        </a>

        {/* Desktop Menu - Hidden on Mobile */}
        <div className="hidden md:flex w-[600px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center gap-7 justify-between w-full h-auto border border-[#00ff9d61] bg-black mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer hover:text-[#00ff9d] transition-colors font-medium">
              Home
            </a>
            <a href="#skills" className="cursor-pointer hover:text-[#00ff9d] transition-colors font-medium">
              Technologies
            </a>
            <a href="#about" className="cursor-pointer hover:text-[#00ff9d] transition-colors font-medium">
              About
            </a>
            <a href="#projects" className="cursor-pointer hover:text-[#00ff9d] transition-colors font-medium">
              Services
            </a>
            <a href="#trainers" className="cursor-pointer hover:text-[#00ff9d] transition-colors font-medium">
              Trainers
            </a>
            <a href="#contact" className="cursor-pointer hover:text-[#00ff9d] transition-colors font-medium">
              Contact
            </a>
          </div>
        </div>

        {/* Socials - Hidden on Mobile */}
        <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social) => (
            <a
              href={social.link}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
              // Added a container with specific dimensions for consistent glow rendering
              className="w-[24px] h-[24px] flex items-center justify-center"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                // UPDATED CLASSNAME: Added base subtle glow and intense hover glow
                className="cursor-pointer transition-all duration-300 drop-shadow-[0_0_5px_#00ff9d55] hover:drop-shadow-[0_0_15px_#00ff9d] hover:brightness-125"
              />
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-200 focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#00ff9d]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white hover:text-[#00ff9d] transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Shift (Slide-in) */}
      <div
        className={`fixed top-[65px] left-0 w-full h-screen bg-black border-t border-[#00ff9d33] transition-transform duration-300 ease-in-out z-40 md:hidden flex flex-col items-center gap-8 pt-10 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <a href="#about-me" onClick={() => setIsOpen(false)} className="text-gray-200 text-xl font-bold cursor-pointer hover:text-[#00ff9d]">Home</a>
        <a href="#skills" onClick={() => setIsOpen(false)} className="text-gray-200 text-xl font-bold cursor-pointer hover:text-[#00ff9d]">Technologies</a>
        <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-200 text-xl font-bold cursor-pointer hover:text-[#00ff9d]">About</a>
        <a href="#projects" onClick={() => setIsOpen(false)} className="text-gray-200 text-xl font-bold cursor-pointer hover:text-[#00ff9d]">Services</a>
        <a href="#trainers" onClick={() => setIsOpen(false)} className="text-gray-200 text-xl font-bold cursor-pointer hover:text-[#00ff9d]">Trainers</a>
        <a href="#contact" onClick={() => setIsOpen(false)} className="text-gray-200 text-xl font-bold cursor-pointer hover:text-[#00ff9d]">Contact</a>

        <div className="flex flex-row gap-5 mt-5">
          {Socials.map((social) => (
            <a
              href={social.link}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
              // Added container for mobile too
              className="w-[40px] h-[40px] flex items-center justify-center"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={50}
                height={50}
                // UPDATED CLASSNAME: Matching the new glow effect for mobile versions
                className="cursor-pointer transition-all duration-300 drop-shadow-[0_0_5px_#00ff9d55] hover:drop-shadow-[0_0_15px_#00ff9d] hover:brightness-125"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;