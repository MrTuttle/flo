import React from "react";
import TitleCut from "./TitleCut";
import TitleRevealCut from "./TitleRevealCut";
interface Props {
  children: string;
}

const ParagrapheColones = ({ children }: Props) => {
  return (
    <div className="bg-darkflo pt-20 px-20 md:px-30 lg:px-40 xl:px-80 flex flex-col justify-center gap-4 min-h-svh">
      {/* <div className=" overflow-clip border border-red-500 text-white text-4xl sm:text-6xl md:text-7xl sm:mb-20">
        <h1 className="title">
          J’imagine et conçois pour vous des sites agréables à consulter
        </h1>
      </div> */}
      {/* <TitleCut /> */}
      <p className=" underline underline-offset-4 w-auto  text-white text-xs p-1 mb-5">
        TitleCut : Xperimental animation-timeline css
      </p>
      <div className="sm:mb-5">
        <TitleRevealCut>J’imagine et conçois</TitleRevealCut>
        <TitleRevealCut>pour vous des sites</TitleRevealCut>
        <TitleRevealCut>agréables à consulter</TitleRevealCut>
      </div>
      <div className="column-1 sm:columns-2 lg:columns-3 2xl:columns-4">
        <p className="text-white">{children}</p>
      </div>
    </div>
  );
};

export default ParagrapheColones;
