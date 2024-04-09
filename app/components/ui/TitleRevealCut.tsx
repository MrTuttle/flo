import React from "react";
// NOT SAFARI COMPATIBLE AT THIS TIME //

interface Props {
  children: string;
}

const TitleRevealCut = ({ children }: Props) => {
  return (
    <div className="  overflow-clip text-white text-4xl h-[2.7rem] sm:text-6xl sm:h-[4.2rem] md:text-7xl md:h-[5rem]">
      <h1 className="title py-0 my-0">{children}</h1>
    </div>
  );
};

export default TitleRevealCut;

/* see https: //scroll-driven-animations.style/ */
// NEED THESE CSS APPLIED
// @keyframes reveal {
//   from {
//     transform: translateY(200px);
//   }
//   to {
//     transform: translateY(0px);
//   }
// }
// .title {
//  animation: reveal ease-in-out;
//  animation-timeline: view(block);
//  animation-range-start: cover 0%;
//  animation-range-end: cover 45%;
// }
