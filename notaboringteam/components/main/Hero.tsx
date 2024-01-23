import React from "react";
import HeroContent from "../sub/HeroContent";
import Chat from "@/components/sub/Chat"

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px]  md:h-[68%] lg:h-[80%] h-[55%] w-full left-0 z-[1] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
      <Chat/>
    </div>
  );
};

export default Hero;
