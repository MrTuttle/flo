import React, { ReactNode } from "react";

interface SpanLogoProps {
  children: string | ReactNode;
}

const SpanLogo = ({ children }: SpanLogoProps) => {
  return (
    <div className=" bg-black/50 inline-flex px-2 py-1 rounded items-center font-mono text-sm">
      {children}
    </div>
  );
};

export default SpanLogo;
