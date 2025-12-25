import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
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

        <div className="w-[600px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center gap-7 justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              Home
            </a>
            <a href="#skills" className="cursor-pointer">
              Technologies
            </a>
            <a href="#projects" className="cursor-pointer">
              About
            </a>
            <a href="#projects" className="cursor-pointer">
              Services
            </a>
            <a href="#projects" className="cursor-pointer">
              Trainers
            </a>
            <a href="#projects" className="cursor-pointer">
              Contact
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
