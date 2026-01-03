"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          // CHANGED: Border color to Greenish (#00ff9d with opacity)
          className="Welcome-box py-[8px] px-[7px] border border-[#00ff9d8b] opacity-[0.9]"
        >
          {/* CHANGED: Icon text color to bright green */}
          <SparklesIcon className="text-[#00ff9d] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Delivering Industry-Ready Training
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            {/* CHANGED: Gradient from Purple to Green/Emerald */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            industrial training
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          At TeachToTech, we are committed to delivering industry-relevant training 
          that bridges the gap between academic learning and real-world technology
        </motion.p>
        
        <motion.a
          variants={slideInFromLeft(1)}
          // CHANGED: Replaced 'button-primary' with explicit green styling
          // If you prefer to keep 'button-primary', go to your globals.css and change the background there.
          className="py-2 bg-emerald-600 hover:bg-emerald-500 transition-colors text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;