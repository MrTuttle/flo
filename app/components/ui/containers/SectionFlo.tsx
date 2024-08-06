// import React from "react";
import { cn } from "@/lib/utils";
/** a component with conditional TW classes */
/** tacke children as props and all classNames */

const SectionFlo = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <span
      className={cn(
        "relative block h-6 rounded-md",
        props.children && "h-auto",
        className
      )}
      {...props}
    />
  );
};

export default SectionFlo;

// UTILISATION EXAMPLE

//  <SectionFlo className="border p-10 *:p-2 *:rounded-xl flex gap-2 text-white">
//    <div className="bg-teal-600">This section is allowed to take children</div>
//    <div className="bg-sky-600">It can takes TW classes</div>
//    <div className="bg-orange-600">
//      It wrap children (these DIVs) in a span block relative
//    </div>
//  </SectionFlo>;
