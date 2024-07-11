import Image from "next/image";
import React from "react";
import Picture from "@/public/les-cousines.png";

type PictureCardProps = {
  // children?: React.JSX.Element;
  // children?: React.ReactNode;
  bgImage?: string;
};

export const PictureCard = ({ bgImage }: PictureCardProps) => {
  return (
    <li className="border list-none group/item hover:cursor-pointer w-full hover:w-[120%] transition-all ease-in-out duration-300">
      <div
        // style={{
        //   backgroundImage: `url("/revolver.png")`,
        // }}
        className="relative overflow-hidden rounded-xl h-full dark:bg-darkhot dark:hover:bg-neutral-800/95 hover:bg-gray-100/80 dark:text-white text-gray-800 transition-all ease-in-out duration-300"
        // style={{ backgroundImage: `url(${Picture})` }}
      >
        <div
          className="absolute  bg-teal-600 w-full h-full bg-center bg-cover group-hover/item:dark:opacity-0 transition-all ease-in-out duration-300"
          style={{ backgroundImage: `url("/${bgImage}.png")` }}
        ></div>
        {/* <div className="absolute min-w-full border border-green-400 rounded-xl overflow-hidden">
          <Image src={Picture} height="100" alt="gh" className="cover" />
        </div> */}
        <div className="overflow-hidden h-full flex flex-col md:p-12 justify-between transition-all ease-in-out duration-300">
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
            {/* <Image src={Picture} alt="image" /> */}
            {/* <div className="font-copy text-base 2xl:text-md font-medium print:text-[12px] print:text-justify mt-4 max-w-[46em] group-hover/item:-translate-y-1 ease-in-out duration-300">
            <p className=" line-clamp-5 my-6 first:mt-0 last:mb-0 print:my-2 text-gray-500 dark:text-gray-400/80 group-hover/item:dark:text-gray-400">
            Meet the aero electric RV that will change how you travel
            </p>
            </div> */}
          </div>
        </div>
      </div>
    </li>
  );
};
