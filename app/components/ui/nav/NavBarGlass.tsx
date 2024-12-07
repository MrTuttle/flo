"use client";
import React, { useEffect, useState } from "react";

import { ModeToggle } from "../ModeToggle";

import { FiCodesandbox } from "react-icons/fi";

import ItemNav from "./ItemNav";
import Link from "next/link";

type NavBarGlassProps = {
  // children?: React.JSX.Element;
  children?: React.ReactNode;
};
type PillProps = {
  children?: React.ReactNode;
};

const NavBarGlass = ({ children }: NavBarGlassProps) => {
  const [menuHeight, setMenuHeight] = useState(false);
  const [menuOpenF, setMenuOpenF] = useState(false);

  // freeze scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuHeight ? "hidden" : "unset";
  }, [menuHeight]);

  const bgMenuOn =
    " backdrop-blur-0 bg-white/50 dark:bg-black/50 w-11/12 h-full sm:w-full rounded-xl fixed translate-y-0 pt-2 flex justify-center z-50 ease-in-out duration-300";
  const bgMenuOff =
    "border  backdrop-blur-xl bg-white/50 dark:bg-black/50 w-11/12 sm:w-10/12 rounded-xl fixed translate-y-2 pb-2 flex justify-center z-50 ease-in-out duration-300";
  const liHoverStyle =
    " transition-all duration-500 hover:underline hover:underline-offset-4";

  const Pill = ({ children }: PillProps) => {
    return (
      <ul className="flex mb-6">
        <li className=" px-2 text-sm border border-black dark:border-white  rounded-full">
          {children ? children : "label"}
        </li>
      </ul>
    );
  };
  const MenuItem = ({ children }: { children: React.ReactNode }) => {
    return (
      <a href="#">
        <li className={liHoverStyle}>{children}</li>
      </a>
    );
  };

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
                      className={`flex flex-col gap-4 sm:gap-1 ${
                        menuHeight ? "" : "hidden"
                      }`} /* hover control : must be hidden if menuHeight is false */
                    >
                      <Pill>Coming soon</Pill>

                      <MenuItem>Composant React</MenuItem>
                      <MenuItem>API Rest</MenuItem>
                      <MenuItem>Typescript</MenuItem>
                      <MenuItem>Tailwind CSS ou SCSS</MenuItem>
                    </div>
                  </ItemNav>

                  <ItemNav title="Design">
                    <div
                      className={`flex flex-col gap-4 sm:gap-1 ${
                        menuHeight ? "" : "hidden"
                      }`} /* hover control : must be hidden if menuHeight is false */
                    >
                      <Pill>Coming soon</Pill>

                      <MenuItem>Maquettes Figma</MenuItem>
                      <MenuItem>Parcours utilisateurs</MenuItem>
                      <MenuItem>Création d’icones</MenuItem>
                      <MenuItem>Illustrations</MenuItem>
                    </div>
                  </ItemNav>
                  <ItemNav title="Back">
                    <div
                      className={`flex flex-col gap-4 sm:gap-1 ${
                        menuHeight ? "" : "hidden"
                      }`}
                    >
                      <Pill>Coming soon</Pill>

                      <MenuItem>Next JS</MenuItem>
                      <MenuItem>Ruby on Rails</MenuItem>
                      <MenuItem>Schema de bases de données</MenuItem>
                      <Link href="/">
                        <MenuItem>Home</MenuItem>
                      </Link>
                      <Link href="/sandbox">
                        <MenuItem>Sandbox</MenuItem>
                      </Link>
                      <Link href="/posts">
                        <MenuItem>Posts</MenuItem>
                      </Link>
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
        className="  ease-in-out duration-300 pt-20 "
        // w-11/12 sm:w-10/12 max-w-7xl dontput theses values here (to fit with menu width), put them in the child div
        style={
          menuHeight
            ? {
                // marginTop: "9rem",
                transform: "scale(0.90)",
                filter: "blur(24px)", // blur when menu is open
                // position: "fixed",
                // translate: "0 -50%",
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
