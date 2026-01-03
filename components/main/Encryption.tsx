"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Outcome Driven
          {/* CHANGED: Glossy Gradient - Uses 'via-green-200' for a bright highlight middle */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-green-200 to-green-500 drop-shadow-[0_0_10px_rgba(0,255,157,0.5)]">
            {" "}
            &{" "}
          </span>
          Skill Assurance
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className=" z-10"
          />
        </div>

        {/* CHANGED: GLOSSY BOX STYLING
            1. border-[#00ff9d]: Solid Neon Green border
            2. bg-[#00ff9d15]: Slight green tint background
            3. shadow-[... inset ...]: The 'inset' shadow creates the inner reflection (gloss)
            4. backdrop-blur-sm: Frosted glass effect
        */}
        <div className="Welcome-box px-[15px] py-[4px] z-[20] my-[20px] border border-[#00ff9d] bg-[#00ff9d15] shadow-[0_0_20px_#00ff9d50,inset_0_0_12px_#00ff9d40] backdrop-blur-sm rounded-full">
            <h1 className="text-[12px] font-bold text-[#ccffeb] drop-shadow-[0_0_5px_#00ff9d]">
                Encryption
            </h1>
        </div>
      </div>
      <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Secure your spot for measurable Learning Outcomes Assurance
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="true"
          className="h-full w-full left-0 z-[1] object-cover"
          style={{ filter: "hue-rotate(199deg) saturate(3.4) contrast(1.1)" }}
          src="/encryption.webm/"
        />
      </div>
    </div>
  );
};

export default Encryption;