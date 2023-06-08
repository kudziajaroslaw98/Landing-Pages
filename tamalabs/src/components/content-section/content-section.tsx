import * as React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
export interface ContentSectionProps {
  header: string;
  boldHeaderWords: number;
  sections: Section[];
  imageSrc: string;
  reverseDirection?: boolean;
}
export interface Section {
  header: string;
  paragraph: string;
}

export const ContentSection = (props: ContentSectionProps) => {
  const headerWords = props.header.split(" ");
  const boldWords = headerWords.splice(0, props.boldHeaderWords);
  return (
    <section
      className={`w-3/4 h-full py-16 mx-auto flex flex-col space-y-12 md:space-y-0 items-center ${
        props.reverseDirection
          ? "md:flex-row-reverse"
          : "md:flex-row md:space-x-8 "
      }`}
    >
      <div className="w-full lg:w-1/2 flex flex-col space-y-8 z-10">
        <h4 className="text-3xl">
          <b>{boldWords.join(" ")}</b> {headerWords.join(" ")}
        </h4>
        <div className="flex flex-wrap space-y-4 lg:flex-col lg:space-x-0 lg:space-y-6">
          {props.sections.map((section, index) => (
            <span key={index} className="flex w-full space-x-4">
              <span className="flex h-8 w-8 px-[1px] py-[2px] check-mark-gradient rounded-md">
                <span className="flex justify-center items-center h-full w-full bg-[#0e1d1c] rounded-md">
                  <CheckIcon className="flex text-[#26a188] w-4/5" />
                </span>
              </span>

              <div className="flex flex-col w-full h-full space-y-4">
                <h5 className="text-lg font-bold">{section.header}</h5>

                <p className="leading-6 text-gray-500 ">{section.paragraph}</p>
              </div>
            </span>
          ))}
        </div>
      </div>

      <div
        className={`relative w-full lg:w-1/2 flex justify-center items-center ${
          props.reverseDirection ? "pr-8" : ""
        }`}
      >
        <img
          className="rounded-2xl shadow-2xl drop-shadow-2xl hue-rotate-[170deg] brightness-[.40]"
          // className="absolute -top-96 left-0 scale-[2] rotate-3 opacity-[0.05] sm:relative sm:top-0 sm:scale-100 sm:rotate-0 sm:opacity-100 rounded-2xl shadow-2xl drop-shadow-2xl"
          src={props.imageSrc}
          alt="Section: Eth Contract Miner"
        />
      </div>
    </section>
  );
};
