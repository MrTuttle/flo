"use client";
import React, { useState } from "react";

import { ModeToggle } from "../ModeToggle";

import { FiCodesandbox } from "react-icons/fi";

import ItemNav from "./ItemNav";
import Link from "next/link";

type NavBarGlassProps = {
  // children?: React.JSX.Element;
  children?: React.ReactNode;
};

const NavBarGlass = ({ children }: NavBarGlassProps) => {
  const [menuHeight, setMenuHeight] = useState(false);
  const [menuOpenF, setMenuOpenF] = useState(false);
  const bgMenuOn =
    " backdrop-blur-0 bg-white/50 dark:bg-black/50 w-11/12 h-full sm:w-full rounded-xl fixed translate-y-0 pt-2 flex justify-center z-50 ease-in-out duration-300";
  const bgMenuOff =
    "border  backdrop-blur-xl bg-white/50 dark:bg-black/50 w-11/12 sm:w-10/12 rounded-xl fixed translate-y-2 pb-2 flex justify-center z-50 ease-in-out duration-300";

  return (
    <>
      {/* center menu, wrapp all */}
      <div className=" flex justify-center ">
        {/* glass menu */}
        <div
          className={menuHeight ? bgMenuOn : bgMenuOff}
          // style={
          //   menuHeight
          //     ? {
          //         transition: "all 300ms",
          //         backdropFilter: "none",
          //         backgroundColor: "rgba(255, 255, 255, 0)",
          //         border: "1px solid rgba(127, 127, 127, 0.2)",
          //       }
          //     : {
          //         transition: "all 300ms",
          //         border: "1px solid rgba(127, 127, 127, 0.2)",
          //         backdropFilter:
          //           // "blur(24px) brightness(0.9) saturate(0.8) contrast(0.8)",
          //           "blur(24px)",
          //       }
          // }
        >
          <div className="px-4 xl:px-2 flex flex-col w-full max-w-7xl overflow-hidden  transition-all ease-in-out duration-1000">
            <div className="  py-2 flex justify-between items-baseline text-base gap-4 sm:gap-10 ">
              <div className=" p-1 rounded text-xl ">
                <div className="absolute translate-y-[-50%]">
                  <Link href="/">
                    <FiCodesandbox className=" hover:text-2xl transition-all ease-in-out duration-300" />
                  </Link>
                </div>
              </div>
              <div
                className={
                  menuHeight
                    ? " bg-red-500/0 w-[50%] h-[20svh] flex justify-center"
                    : " bg-blue-500/0  flex justify-center"
                } /* menu Height trigger : bg 0% for trigger exist */
                onMouseEnter={() => setMenuHeight(true)}
                onMouseLeave={() => setMenuHeight(false)}
              >
                <ul className="flex gap-4">
                  <ItemNav title="Front">
                    <div
                      className={
                        menuHeight ? "" : "hidden"
                      } /* hover control : must be hidden if menuHeight is false */
                    >
                      <a href="#front">
                        <li>Composants React</li>
                      </a>
                      <a href="#">
                        <li>API Rest</li>
                      </a>
                      <a href="#">
                        <li>Typescript</li>
                      </a>
                      <a href="#">
                        <li>Tailwind CSS ou SCSS</li>
                      </a>
                    </div>
                  </ItemNav>

                  <ItemNav title="Design">
                    <div
                      className={
                        menuHeight ? undefined : "hidden"
                      } /* hover control : must be hidden if menuHeight is false */
                    >
                      <a href="#">
                        <li>Maquettes Figma</li>
                      </a>
                      <a href="#">
                        <li>Parcours utilisateurs</li>
                      </a>
                      <a href="#">
                        <li>Création d’icones</li>
                      </a>
                      <a href="#">
                        <li>Illustrations</li>
                      </a>
                    </div>
                  </ItemNav>
                  <ItemNav title="Back">
                    <div className={menuHeight ? "" : "hidden"}>
                      <a href="#" className="">
                        <li>Next JS</li>
                      </a>
                      <a href="#">
                        <li>Ruby on Rails</li>
                      </a>
                      <a href="#">
                        <li>Schema de bases de données</li>
                      </a>
                    </div>
                  </ItemNav>
                </ul>
              </div>
              <div className="translate-y-1">
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div // this div is the page content, contain styles for menuHeight state
        // it wrap children ( all page content ) and blur when menu is over
        className="  ease-in-out duration-300 pt-20"
        // w-11/12 sm:w-10/12 max-w-7xl dontput theses values here (to fit with menu width), put them in the child div
        style={
          menuHeight
            ? {
                // marginTop: "9rem",
                transform: "scale(0.90)",
                filter: "blur(24px)",
              }
            : { transform: "scale(1)" }
        }
      >
        {children}
      </div>
    </>
  );
};

export default NavBarGlass;
