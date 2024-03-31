import React from "react";

const HeroCurtainContent = () => {
  const boxsizes = `6rem`;
  // const borders = `solid rgb(13,164,255) 4px`;

  const boxesStyle = `animate-grow hover:transition-all ease-in-out hover:duration-500 flex border-[3px] w-[5rem] h-[5rem] sm:w-[7rem] sm:h-[7rem] border-darkflo dark:border-white items-center justify-center hover:bg-darkflo hover:border-[40px] dark:text-white hover:text-white dark:hover:bg-white dark:hover:text-darkflo cursor-pointer `;
  const conditionnalBoxesStyle = `animate-grow hover:transition-all ease-in-out hover:duration-500 hidden sm:flex border-[3px] w-[5rem] h-[5rem] sm:w-[7rem] sm:h-[7rem] border-darkflo dark:border-white items-center justify-center`;
  const lineContainer = `font-semibold text-4xl sm:text-6xl flex gap-2 sm:gap-3`;
  const borders = `solid rgb(69,7,26) 4px`;
  const wordA = ["M", "Y", "", ""];
  const wordB = ["N", "A", "M", "E"];
  const wordC = ["I", "S", "", "F", "L", "O"];
  const wordD = ["I", "S", "", ""];
  const wordE = ["", "F", "L", "O"];
  return (
    <div className="p-20">
      <div className=" flex flex-col gap-2 sm:gap-3 items-center text-darkflo dark:text-white">
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
