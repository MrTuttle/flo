"use client";
import React, { useState } from "react";

import { ModeToggle } from "../ModeToggle";

import { FiCodesandbox } from "react-icons/fi";

import ItemNav from "./ItemNav";

type NavBarGlassProps = {
  // children?: React.JSX.Element;
  children?: React.ReactNode;
};

const NavBarGlass = ({ children }: NavBarGlassProps) => {
  const [menuHeight, setMenuHeight] = useState(false);
  const [menuOpenF, setMenuOpenF] = useState(false);
  return (
    <>
      {/* center menu, wrapp all */}
      <div className=" flex justify-center">
        {/* glass menu */}
        <div
          className=" backdrop-blur-xl bg-white/50 dark:bg-black/50 w-11/12 p-2 sm:w-10/12 rounded-xl mt-4 sm:m-4 fixed flex justify-center z-50 ease-in-out duration-300"
          style={
            menuHeight
              ? {
                  transition: "all 300ms",
                  backdropFilter: "none",
                }
              : {
                  transition: "all 300ms",
                  border: "1px solid rgba(127, 127, 127, 0.2)",
                  backdropFilter:
                    // "blur(24px) brightness(0.9) saturate(0.8) contrast(0.8)",
                    "blur(24px)",
                }
          }
        >
          <div className=" px-7 flex flex-col w-full max-w-7xl overflow-hidden  transition-all ease-in-out duration-1000">
            <div className="   py-2 flex justify-between items-baseline text-base gap-4 sm:gap-10 ">
              <div className="text-xl translate-y-1">
                {" "}
                <FiCodesandbox />
              </div>
              <div className="">
                <ul
                  className="flex  gap-10"
                  onMouseEnter={() => setMenuHeight(true)}
                  onMouseLeave={() => setMenuHeight(false)}
                  style={
                    menuHeight
                      ? {
                          transition: "all 300ms",
                          height: "30svh",
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
        <div // this div is the page content, contain styles for menuHeight state
          // it wrap children ( all page content ) and blur when menu is over
          className="  ease-in-out duration-300"
          style={
            menuHeight
              ? {
                  marginTop: "9rem",
                  transform: "scale(0.90)",
                  filter: "blur(24px)",
                }
              : { marginTop: "7rem", transform: "scale(1)" }
          }
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default NavBarGlass;
