import React, { Children, ReactNode } from "react";

import { SiVercel } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { RxSketchLogo } from "react-icons/rx";

import { link } from "fs";
// import type { IconType } from "../lib/index";
import type { IconType } from "react-icons";

type Props = {
  children: ReactNode;
  titre?: string;
  icon:
    | "git"
    | "next"
    | "react"
    | "tailwind"
    | "ae"
    | "ai"
    | "psd"
    | "ts"
    | "figma"
    | "sketch"
    | "none";
  linkName?: string;
  linkUrl?: string;
};

const ItemReact = () => {
  return (
    <div className=" group-hover/item:scale-150 ease-in-out duration-300 rounded-lg w-12 h-12 mb-12 dark:bg-teal-500/20 bg-teal-500 dark:text-teal-500 text-gray-100 flex items-center justify-center">
      <SiReact className="text-[2rem] group-hover/item:rotate-180 ease-in-out duration-300" />
    </div>
  );
};
const ItemSiAdobeaftereffects = () => {
  return (
    <>
      <div className="flex gap-1 group-hover/item:gap-8 ease-in-out duration-300 ">
        <div className=" group-hover/item:scale-150 ease-in-out duration-300 delay-0 rounded-lg w-12 h-12 mb-12 dark:bg-violet-500/20 bg-violet-500 dark:text-violet-500 text-gray-100 flex items-center justify-center">
          <SiAdobeaftereffects className="text-[2rem] group-hover/item:scale-110 ease-in duration-[300ms] delay-0" />
        </div>
        <div className=" group-hover/item:scale-150 ease-in-out duration-300 delay-75 rounded-lg w-12 h-12 mb-12 dark:bg-orange-500/20 bg-orange-500 dark:text-orange-500 text-gray-100 flex items-center justify-center">
          <SiAdobeillustrator className="text-[2rem] group-hover/item:scale-110 ease-in duration-[300ms] delay-75" />
        </div>
        <div className=" group-hover/item:scale-150 ease-in-out duration-300 delay-150 rounded-lg w-12 h-12 mb-12 dark:bg-blue-500/20 bg-blue-500 dark:text-blue-500 text-gray-100 flex items-center justify-center">
          <SiAdobephotoshop className="text-[2rem] group-hover/item:scale-110 ease-in duration-[300ms] delay-150" />
        </div>
      </div>
    </>
  );
};
const ItemSiAdobeillustrator = () => {
  return (
    <div className=" group-hover/item:scale-150 ease-in-out duration-300 rounded-lg w-12 h-12 mb-12 dark:bg-teal-500/20 bg-teal-500 dark:text-teal-500 text-gray-100 flex items-center justify-center">
      <SiAdobeillustrator className="text-[2rem] group-hover/item:rotate-180 ease-in-out duration-300" />
    </div>
  );
};
const ItemSiAdobephotoshop = () => {
  return (
    <div className=" group-hover/item:scale-150 ease-in-out duration-300 rounded-lg w-12 h-12 mb-12 dark:bg-teal-500/20 bg-teal-500 dark:text-teal-500 text-gray-100 flex items-center justify-center">
      <SiAdobephotoshop className="text-[2rem] group-hover/item:rotate-180 ease-in-out duration-300" />
    </div>
  );
};
const ItemSiFigma = () => {
  return (
    <>
      <div className="flex gap-1 group-hover/item:gap-8 ease-in-out duration-300 ">
        <div className=" group-hover/item:scale-150 ease-in-out duration-300 delay-0 rounded-lg w-12 h-12 mb-12 dark:bg-emerald-500/20 bg-emerald-500 dark:text-emerald-500 text-gray-100 flex items-center justify-center">
          <SiFigma className="text-[2rem] group-hover/item:scale-110 ease-in duration-[300ms] delay-0" />
        </div>
        <div className=" group-hover/item:scale-150 ease-in-out duration-300 delay-150 rounded-lg w-12 h-12 mb-12 dark:bg-yellow-500/20 bg-yellow-500 dark:text-yellow-500 text-gray-100 flex items-center justify-center">
          <RxSketchLogo className="text-[2rem] group-hover/item:scale-110 ease-in duration-[300ms] delay-150" />
        </div>
      </div>
    </>
  );
};
const ItemTbBrandNextjs = () => {
  return (
    <div className=" group-hover/item:scale-150 ease-in-out duration-300 rounded-lg w-12 h-12 mb-12  dark:bg-rose-500/20 bg-rose-500 dark:text-rose-500 text-gray-100 flex items-center justify-center">
      <TbBrandNextjs className="text-[2rem] group-hover/item:rotate-[360deg] ease-in duration-300" />
    </div>
  );
};
const ItemSiTailwindcss = () => {
  return (
    <div className=" group-hover/item:scale-150 ease-in-out duration-300 rounded-lg w-12 h-12 mb-12  dark:bg-cyan-500/20 bg-cyan-500 dark:text-cyan-500 text-gray-100 flex items-center justify-center">
      <SiTailwindcss className="text-[2rem] group-hover/item:-skew-y-[10deg] group-hover/item:rotate-[12deg] ease-in duration-300" />
    </div>
  );
};
const ItemGithub = () => {
  return (
    <div className=" group-hover/item:scale-150 ease-out duration-300 rounded-lg w-12 h-12 mb-12  dark:bg-amber-500/20 bg-amber-500 dark:text-amber-500 text-gray-100 flex items-center justify-center">
      <SiGithub className="text-[2rem] group-hover/item:scale-110 ease-in duration-300" />
    </div>
  );
};

export const IconCard = ({
  icon,
  titre,
  children,
  linkName,
  linkUrl,
}: Props) => {
  return (
    <li className="group/item hover:cursor-pointer w-full px-2 2xl:px-3 md:w-1/2 lg:w-1/4 grow">
      <div className="p-6 rounded-xl h-full flex flex-col md:p-12 justify-between dark:bg-darkhot dark:hover:bg-neutral-800/95 hover:bg-gray-100/80 dark:text-white text-gray-800 transition-colors ease-in-out duration-300">
        <div>
          <div className="flex flex-col">
            {icon === "git" && <ItemGithub />}
            {icon === "react" && <ItemReact />}
            {icon === "next" && <ItemTbBrandNextjs />}
            {icon === "tailwind" && <ItemSiTailwindcss />}
            {icon === "ae" && <ItemSiAdobeaftereffects />}
            {icon === "psd" && <ItemSiAdobephotoshop />}
            {icon === "ai" && <ItemSiAdobeillustrator />}
            {/* {icon === "ts" && <ItemSiTypescript />} */}
            {icon === "figma" && <ItemSiFigma />}
            {/* {icon === "sketch" && <ItemSiSketch />} */}

            <h3 className=" capitalize font-headings tracking-tight scroll-mt-[120px] text-xl 2xl:2xl font-medium wrap-balance group-hover/item:-translate-y-1 ease-in-out duration-300">
              {titre}
            </h3>
          </div>
          <div className="font-copy text-base 2xl:text-md font-medium print:text-[12px] print:text-justify mt-4 max-w-[46em] group-hover/item:-translate-y-1 ease-in-out duration-300">
            <p className=" line-clamp-5 my-6 first:mt-0 last:mb-0 print:my-2 text-gray-500 dark:text-gray-400/80 group-hover/item:dark:text-gray-400">
              {children}
            </p>
          </div>
        </div>
        <div className="flex items-center flex-wrap gap-4">
          <a
            href={linkUrl ? linkUrl : "#"}
            className="-translate-x-2 group-hover/item:translate-x-0  opacity-0 group-hover/item:opacity-100 opa ease-in-out duration-300 rounded-lg font-bold whitespace-nowrap focus:outline-none focus:ring-tertiary-purple disabled:opacity-50 group underline underline-offset-8 focus:ring-4 hover:underline-offset-4 border-white py-3 text-sm-flat leading-5 2xl:text-base-flat 2xl:leading-5 -mx-2.5 px-2.5 mt-10 inline-block"
          >
            {linkName}
          </a>
        </div>
      </div>
    </li>
  );
};
