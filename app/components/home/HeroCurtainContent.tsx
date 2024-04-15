import React from "react";

import { Outfit } from "next/font/google";
const outfit = Outfit({ subsets: ["latin"], display: "swap" });

const HeroCurtainContent = () => {
  const boxsizes = `1ch`;
  // const borders = `solid rgb(13,164,255) 4px`;

  // const boxesStyle = `animate-grow hover:transition-all ease-in-out hover:duration-500 flex border-[2px] w-[3ch] h-[3ch] sm:w-[3ch] sm:h-[3ch] border-darkflo dark:border-white items-center justify-center hover:bg-darkflo hover:border-[10px] dark:text-white hover:text-white dark:hover:bg-white dark:hover:text-darkflo cursor-pointer dark:bg-darkflo `;
  const boxesStyle = `animate-grow hover:transition-all ease-in-out hover:duration-500 flex  w-[3ch] h-[3ch] sm:w-[3ch] sm:h-[3ch] border-darkflo dark:border-white items-center justify-center hover:bg-white/40  dark:text-white dark:hover:bg-white dark:hover:text-darkflo cursor-pointer dark:bg-darkflo `;
  // const conditionnalBoxesStyle = `animate-grow hover:transition-all ease-in-out hover:duration-500 hidden sm:flex w-[2ch] h-[2ch] sm:w-[3ch] sm:h-[3ch] border-darkflo dark:border-white items-center justify-center`;
  const conditionnalBoxesStyle = `animate-grow hover:transition-all ease-in-out hover:duration-500 hidden sm:flex w-[2ch] h-[2ch] sm:w-[3ch] sm:h-[3ch] border-darkflo dark:border-white items-center justify-center`;
  const lineContainer = `font-semibold text-2xl sm:text-4xl flex gap-1 sm:gap-3 *:shadow *:border-t *:border-t-white *:rounded-xl`;
  const borders = `solid rgb(69,7,26) 4px`;
  const wordA = ["M", "Y", "", ""];
  const wordB = ["N", "A", "M", "E"];
  const wordC = ["I", "S", "", "F", "L", "O"];
  const wordD = ["I", "S", "", ""];
  const wordE = ["", "F", "L", "O"];
  return (
    <div className={outfit.className} style={{ padding: 100 }}>
      <div className=" flex flex-col gap-1 sm:gap-3 items-center text-darkflo dark:text-white ">
        <div className={lineContainer}>
          <div id="conditionnalBox" className={conditionnalBoxesStyle}>
            <p></p>
          </div>
          {wordA.map((e, index) => (
            <div id="wordA" key={index} className={boxesStyle}>
              <p>{e}</p>
            </div>
          ))}
        </div>
        <div className={lineContainer}>
          {wordB.map((e, index) => (
            <div id="wordA" key={index} className={boxesStyle}>
              <p>{e}</p>
            </div>
          ))}
          <div id="conditionnalBox" className={conditionnalBoxesStyle}>
            <p></p>
          </div>
        </div>
        <div className={lineContainer}>
          <div id="conditionnalBox" className={conditionnalBoxesStyle}>
            <p></p>
          </div>
          {wordD.map((e, index) => (
            <div id="wordA" key={index} className={boxesStyle}>
              <p>{e}</p>
            </div>
          ))}
        </div>
        <div className={lineContainer}>
          <div id="conditionnalBox" className={conditionnalBoxesStyle}>
            <p></p>
          </div>
          {wordE.map((e, index) => (
            <div id="wordA" key={index} className={boxesStyle}>
              <p>{e}</p>
            </div>
          ))}
        </div>
      </div>
      {/* <h1 className=" text-4xl text-darkflo dark:text-white">My name is</h1>
      <h1 className=" text-9xl text-darkflo dark:text-white font-black tracking-[-0.3rem]">
        FLO
      </h1> */}
    </div>
  );
};

export default HeroCurtainContent;
