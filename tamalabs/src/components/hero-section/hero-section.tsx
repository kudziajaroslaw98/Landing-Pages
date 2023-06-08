import * as React from "react";
import { Button } from "../shared";

export const HeroSection = () => {
  return (
    <div className="h-[50rem] w-full space-y-12 md:space-y-20 flex flex-col my-[5rem] md:my-[8rem]">
      <h5 className="w-fit text-[#54feb0] text-lg sm:text-xl font-medium font-lato relative">
        <span className="z-10 font-nunito relative">
          High Speed Functions To Hit Your Mark
        </span>
        <span className="flex absolute right-0 top-0 bg-gradient-to-l from-[#26a188] to-[#0a1414] h-[3rem] w-[3rem] p-[2px] translate-x-1/2 -translate-y-[20%] rounded-full z-0">
          <span className="w-full h-full bg-[#0a1414] rounded-full"></span>
        </span>
      </h5>

      <h2 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl uppercase leading-tight max-w-[25rem] sm:max-w-[30rem] md:max-w-[40rem] xl:max-w-[50rem] font-black font-lato">
        <span className="flex relative z-10">
          Automation tools to gain the edge
          <span className="absolute left-[2px] top-0 text-[#26a188] -z-10">
            Automation tools to gain the edge
          </span>
        </span>
      </h2>

      <Button label="Explore Function" />
    </div>
  );
};
