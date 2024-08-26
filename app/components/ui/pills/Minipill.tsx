import React from "react";
/**

 * A simple css text pill with glass effect
 * 
 * @param {string} a - Optionnal, The text to be displayed.
 * @returns {JSX} The children text or "no text in a <a></a>".
 * @example

 * <Minipill>Mon texte</Minipill>;
 * return <a className="dark:bg-black/40 bg-white/40 inline-block backdrop-blur py-[0.125rem] px-[0.625rem] rounded-full text-xs">Mon texte</a>;

 */

const Minipill = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <a className="dark:bg-black/40 bg-white/40 inline-block backdrop-blur py-[0.125rem] px-[0.625rem] rounded-full text-xs">
      {children ? children : "no text"}
    </a>
  );
};

export default Minipill;
