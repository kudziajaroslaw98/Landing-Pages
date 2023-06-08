import * as React from "react";
import "./App.css";
import { Button } from "./components/shared";
import { Nav } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { ContentSection } from "./components/content-section";
// @ts-ignore
import SectionPicture from "./images/hero-section.jpg";
// @ts-ignore
import SectionPicture2 from "./images/hero-section2.jpg";

function App() {
  const firstSection = {
    header: "Eth Contract Minter",
    boldHeaderWords: 2,
    imageSrc: SectionPicture,
    sections: [
      {
        header: "Eth Contract Minter",
        paragraph:
          "There are many variations of passages of Lorem Ipsum available,but the majority have suffered. Variations of passages of Lorem Ipsum available.",
      },
      {
        header: "Custom Gas",
        paragraph:
          "There are many variations of passages of Lorem Ipsum available,but the majority have suffered. Variations of passages of Lorem Ipsum available.",
      },
    ],
  };
  const secondSection = {
    header: "Opensea Mass Bidding",
    boldHeaderWords: 2,
    imageSrc: SectionPicture2,
    sections: [
      {
        header: "Automated Bidding Across",
        paragraph:
          "There are many variations of passages of Lorem Ipsum available,but the majority have suffered. Variations of passages of Lorem Ipsum available.",
      },
      {
        header: "Entire NFT Collections",
        paragraph:
          "There are many variations of passages of Lorem Ipsum available,but the majority have suffered.",
      },
      {
        header: "Filter By Token Id, Traits",
        paragraph:
          "There are many variations of passages of Lorem Ipsum available,but the majority. Many variations.",
      },
    ],
  };
  return (
    <div className="w-full h-full min-h-screen bg-[#091313] text-[#ffffff] font-nunito overflow-clip">
      <div className="w-full h-full min-h-screen md:max-w-screen-2xl mx-auto hero-image bg-cover bg-center bg-no-repeat">
        <header className="h-32 w-3/4 mx-auto flex justify-between items-center">
          <h1 className="font-roboto text-2xl font-bold uppercase tracking-widest">
            LogoType
          </h1>

          <Nav />

          <Button label={"Join us"} />
        </header>

        <div className="w-3/4 mx-auto">
          <HeroSection></HeroSection>
        </div>
      </div>

      <main className="h-full w-full bg-[#09090c]">
        <div className="h-full w-full md:max-w-screen-2xl mx-auto">
          <h3 className="w-full max-w-[100vw] overflow-clip md:overflow-visible h-64 flex justify-center items-center text-4xl uppercase font-roboto tracking-wider font-black relative">
            <span className="z-20">Bot Functions</span>
            <span className="overflow-clip whitespace-nowrap absolute top-26 left-92 text-7xl md:text-[9rem] xl:text-[14rem] tracking-widest text-[#0a1414] text-stroke-width z-10">
              Bot Functions
            </span>
          </h3>

          <ContentSection
            header={firstSection.header}
            imageSrc={firstSection.imageSrc}
            boldHeaderWords={firstSection.boldHeaderWords}
            sections={firstSection.sections}
          ></ContentSection>

          <ContentSection
            header={secondSection.header}
            reverseDirection={true}
            imageSrc={secondSection.imageSrc}
            boldHeaderWords={secondSection.boldHeaderWords}
            sections={secondSection.sections}
          ></ContentSection>

          <ContentSection
            header={firstSection.header}
            imageSrc={firstSection.imageSrc}
            boldHeaderWords={firstSection.boldHeaderWords}
            sections={firstSection.sections}
          ></ContentSection>

          <ContentSection
            header={firstSection.header}
            imageSrc={firstSection.imageSrc}
            boldHeaderWords={firstSection.boldHeaderWords}
            sections={firstSection.sections}
          ></ContentSection>

          <ContentSection
            header={firstSection.header}
            imageSrc={firstSection.imageSrc}
            boldHeaderWords={firstSection.boldHeaderWords}
            sections={firstSection.sections}
          ></ContentSection>

          <ContentSection
            header={firstSection.header}
            imageSrc={firstSection.imageSrc}
            boldHeaderWords={firstSection.boldHeaderWords}
            sections={firstSection.sections}
          ></ContentSection>
        </div>
      </main>
    </div>
  );
}

export default App;
