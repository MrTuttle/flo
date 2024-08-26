// import React from "react";
import { cn } from "@/lib/utils";

/**
 * a rounded container component height of 6 with conditional TW classes addons
 * 
 * @param className: string | undefined - Optionnal, Tailwind classes.
 * @param  {...props}: React.HTMLAttributes<HTMLDivElement> The Html markup.

 * @returns <span
      className={cn(
        "relative block h-6 rounded-md",
        props.children && "h-auto",
        className
      )}
      {...props}
    />
 * @example

 * <SectionFlo className="p-10 flex gap-2">
 *    <div className="font-bold">A TW bold text div</div>
 *    <div>A simple div text</div>
 * </SectionFlo>

 */

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
