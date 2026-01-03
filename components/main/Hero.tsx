import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover "
        // CHANGED: 
        // 250deg = Teal/Cyan (Less "Grassy", more "Tech")
        // saturate(0.8) = Slightly softer color
        style={{ filter: "hue-rotate(250deg) saturate(0.8)" }}
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;