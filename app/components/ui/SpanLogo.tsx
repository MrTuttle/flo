import React, { ReactNode } from "react";

interface SpanLogoProps {
  children: string | ReactNode;
}

const SpanLogo = ({ children }: SpanLogoProps) => {
  return (
    <span className=" bg-neutral-500 inline-flex mx-1 px-2 py-1 rounded items-center font-mono text-sm">
      {children}
    </span>
  );
};

export default SpanLogo;
