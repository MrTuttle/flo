import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="flex justify-end text-xs p-8 mb-8 opacity-40">
        <div className="">Made by Flo {year}</div>
      </footer>
    </>
  );
};

export default Footer;
