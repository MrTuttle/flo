"use client";
import React, { useState } from "react";

type Props = {
  title: string;
  children?: React.ReactNode;
};

const ItemNav = ({ title, children }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <li
      onMouseEnter={() => setMenuOpen(true)}
      onMouseLeave={() => setMenuOpen(false)}
    >
      {title}
      <div className="ease-in-out duration-300">
        <ul
          className="absolute mt-20 ease-in-out duration-300 "
          style={
            menuOpen
              ? {
                  // border: "1px solid red",
                  opacity: "1",
                  transform: "translateX(0px)",
                }
              : {
                  // border: "2px solid blue",
                  opacity: "0",
                  transform: "translateX(-10px)",
                }
          }
        >
          {children}
        </ul>
      </div>
    </li>
  );
};

export default ItemNav;
