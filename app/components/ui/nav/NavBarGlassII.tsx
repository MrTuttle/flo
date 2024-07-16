"use client";
import React, { useState } from "react";

import { ModeToggle } from "../ModeToggle";

import { FiCodesandbox } from "react-icons/fi";

import ItemNav from "./ItemNav";

type NavBarGlassProps = {
  // children?: React.JSX.Element;
  children?: React.ReactNode;
};

const NavBarGlassII = ({ children }: NavBarGlassProps) => {
  const [menuHeight, setMenuHeight] = useState(false);
  const [menuOpenF, setMenuOpenF] = useState(false);
  return (
    <>
      <div
        className="
        relative overflow-hidden w-[100%] mx-auto  py-4" /* don't use flex center here, it's a global wraper */
      >
        {/* center menu, wrapp all */}
        {/* glass menu */}
        <div
          className="fixed z-50 px-10 w-full rounded-xl "
          // style={menuHeight ? { padding: "0" } : { padding: "0, 2.5rem" }}
        >
          <div /* absolute positioning layer dark or light*/
            className="absolute z-[-1] bg-white  dark:bg-black ease-in-out duration-[0.1s]"
            style={
              menuHeight
                ? {
                    opacity: "0.7",
                    left: "0",
                    top: "-1rem",
                    width: "100%",
                    height: "100vh",
                  }
                : {
                    opacity: "0.7",
                    // left: "0",
                    // top: "-1rem",
                    width: "90%",
                    height: "7svh",
                    borderRadius: "0.75rem",
                  }
            }
          ></div>{" "}
          <div
            className="border  rounded-xl ease-in-out duration-[0.1s] "
            style={
              menuHeight
                ? {
                    transition: "all 300ms",
                    backdropFilter: "none",
                    width: "100%",
                    // backgroundColor: "none",
                    // backgroundColor: "rgba(255, 255, 255, 0)",
                  }
                : {
                    transition: "all 300ms",
                    // border: "1px solid rgba(127, 127, 127, 0.2)",
                    // backdropFilter:
                    //   "blur(24px)",
                    width: "100%",
                    // backgroundColor: "rgba(255, 255, 255, 0.5)",
                  }
            }
          >
            <div className="px-4 xl:px-2 flex flex-col overflow-hidden  transition-all ease-in-out duration-1000">
              <div className="   py-2 flex justify-between items-baseline text-base gap-4 sm:gap-10 ">
                <div className="text-xl translate-y-1">
                  <FiCodesandbox />
                </div>
                <div className="">
                  <ul
                    className="flex gap-3 sm:gap-10"
                    onMouseEnter={() => setMenuHeight(true)}
                    onMouseLeave={() => setMenuHeight(false)}
                    style={
                      menuHeight
                        ? {
                            transition: "all 300ms",
                            height: "100svh",
                            // width: "100svw",
                            marginBottom: "4rem",
                          }
                        : {
                            transition: "all 300ms",
                            height: "4svh",
                          }
                    }
                  >
                    <ItemNav title="Front">
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
                    </ItemNav>
                    <ItemNav title="Back">
                      <a href="#">
                        <li>Next JS</li>
                      </a>
                      <a href="#">
                        <li>Ruby on Rails</li>
                      </a>
                      <a href="#">
                        <li>Schema de bases de données</li>
                      </a>
                    </ItemNav>
                    <ItemNav title="Design">
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

        <div className="relative">
          <div // this div is the page content, contain styles for menuHeight state
            // it wrap children ( all page content ) and blur when menu is over
            // className="  ease-in-out duration-300 before:content-[''] before:absolute before:top-0 before:-translate-y-10 before:left-0 before:right-0 before:bottom-0 before:z-[-1] before:bg-red-500 before:dark:bg-blue-500 before:transition-all before:ease-in-out before:duration-300"
            className="relative  ease-in-out duration-300 "
            // w-11/12 sm:w-10/12 max-w-7xl dontput theses values here (to fit with menu width), put them in the child div
            style={
              menuHeight
                ? {
                    paddingTop: "10rem",
                    transform: "scale(0.90)",
                    filter: "blur(24px)",
                    // backgroundBlendMode: "overlay",
                  }
                : { paddingTop: "7rem", transform: "scale(1)" }
            }
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBarGlassII;
