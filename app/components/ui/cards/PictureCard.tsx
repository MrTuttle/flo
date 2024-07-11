import React from "react";

export const PictureCard = () => {
  return (
    <li className="border list-none group/item hover:cursor-pointer w-full hover:w-[120%] transition-all ease-in-out duration-300">
      <div className=" overflow-hidden p-6 rounded-xl h-full flex flex-col md:p-12 justify-between dark:bg-darkhot dark:hover:bg-neutral-800/95 hover:bg-gray-100/80 dark:text-white text-gray-800 transition-colors ease-in-out duration-300">
        <div className="pt-4">
          <div className=" translate-y-52 flex flex-col justify-end border w-72 group-hover/item:-translate-y-1 ease-in-out duration-300">
            <h3 className=" capitalize font-headings tracking-tight scroll-mt-[120px] text-5xl 2xl:2xl font-medium wrap-balance ">
              Explore <br />
              The L1
            </h3>
            <p className=" line-clamp-3 text-2xl my-6 first:mt-0 last:mb-0 print:my-2 text-gray-500 dark:text-gray-400/80 group-hover/item:dark:text-gray-400">
              Meet the aero electric RV that will change how you travel
            </p>
            <div className="bg-white w-9 h-9 rounded-full"></div>
          </div>
          {/* <div className="font-copy text-base 2xl:text-md font-medium print:text-[12px] print:text-justify mt-4 max-w-[46em] group-hover/item:-translate-y-1 ease-in-out duration-300">
            <p className=" line-clamp-5 my-6 first:mt-0 last:mb-0 print:my-2 text-gray-500 dark:text-gray-400/80 group-hover/item:dark:text-gray-400">
              Meet the aero electric RV that will change how you travel
            </p>
          </div> */}
        </div>
      </div>
    </li>
  );
};
