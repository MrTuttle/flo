import Image from "next/image";
import React from "react";
import Picture from "@/public/les-cousines.png";
import { GoArrowRight } from "react-icons/go";

export type PictureCardProps = {
  children?: React.JSX.Element;
  // children?: React.ReactNode;
  bgImage?: string;
  title?: string;
  bgcolor?: "rose" | "teal" | "yellow" | "cyan" | "salmon";
};

export const PictureCard = ({
  children,
  bgImage,
  title,
  bgcolor,
}: PictureCardProps) => {
  const bgcolorSelected = () => {
    if (bgcolor === "rose") return "rgb(244 63 94)";
    // if (bgcolor === "teal") return "rgb(20 184 166)";
    if (bgcolor === "teal") return "rgb(13 148 136)";
    if (bgcolor === "cyan") return "rgb(22 78 99)";
    if (bgcolor === "yellow") return "rgb(244 244 94)";
    if (bgcolor === "salmon") return "rgb(250 92 64)";
  };
  const lightTxt = "rgb(244 244 244)";
  const darkTxt = "rgb(31 41 55)";
  const txtcolors = () => {
    const selectTxtColor = bgImage ? lightTxt : darkTxt;
    return selectTxtColor;
  };

  return (
    <li className=" list-none group/item hover:cursor-pointer w-full md:hover:w-[160%] transition-all ease-in-out duration-300">
      <div
        // style={{
        //   backgroundImage: `url("/revolver.png")`,
        // }}
        className="md:relative overflow-hidden  rounded-xl h-full bg-stone-100 dark:bg-neutral-800/95 dark:text-white text-gray-800 transition-all ease-in-out duration-300"
        // style={{ backgroundImage: `url(${Picture})` }}
        style={{
          // backgroundColor: "rgb(244 63 94)",
          backgroundColor: `${bgcolorSelected()}`,
        }}
      >
        <div
          className="aspect-video md:aspect-auto md:absolute w-auto   md:w-full md:h-full bg-center bg-cover md:group-hover/item:opacity-0 transition-all ease-in-out duration-300"
          style={{
            backgroundImage: `url("/${bgImage}.png")`,
          }}
        ></div>

        {/* <div
          className="md:hidden aspect-video border border-green-400 rounded-xl overflow-hidden bg-center bg-cover"
          style={{
            backgroundImage: `url("/${bgImage}.png")`,
          }}
        >
          <Image src={Picture} height="100" alt="gh" className="cover" />
        </div> */}
        {/* <div className="md:hidden min-w-full border border-green-400 rounded-xl overflow-hidden">
          <Image src={Picture} height="100" alt="gh" className="cover" />
        </div> */}
        <div className="overflow-hidden h-full flex flex-col md:p-12 justify-between transition-all ease-in-out duration-300">
          <div className="pt-4 px-4 md:px-0">
            <div
              className="  flex flex-col justify-end w-60   " /** important to fix width (w-60) to prevent height jump in hover when title add a line of text */
            >
              <h3
                className="md:translate-y-52 font-headings tracking-tight text-4xl font-light md:text-5xl 2xl:2xl md:font-medium md:group-hover/item:-translate-y-1 ease-in-out duration-500 "
                style={bgImage ? { color: lightTxt } : { color: darkTxt }}
              >
                {title}
              </h3>
              <div className="md:translate-y-52 flex flex-col gap-8 md:opacity-0 md:group-hover/item:opacity-100 text-xl md:text-2xl my-6 print:my-2 text-gray-500 dark:text-gray-400/80 md:group-hover/item:-translate-y-1 ease-in-out duration-700 ">
                <span
                  className="line-clamp-3"
                  style={bgImage ? { color: lightTxt } : { color: darkTxt }}
                >
                  {children}
                </span>
                <div className="bg-white w-8 h-8 md:w-12 md:h-12 rounded-full text-black flex justify-center items-center">
                  <GoArrowRight className="" />
                </div>
              </div>
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
