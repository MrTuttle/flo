import React, { Children } from "react";
import { cn } from "@/lib/utils";

const CarouselTW = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "snap-x flex gap-4  snap-mandatory overflow-x-auto py-14",
        props.children,
        className
      )}
      {...props}
    >
      {Children.map(props.children, (child, index) => (
        <div key={index} className="snap-center shrink-0">
          <div
            className={cn(
              "shrink-0 aspect-video flex items-center justify-center"
            )}
            {...props}
          >
            {child}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarouselTW;

// CAROUSEL content structure

//  <div className=" snap-center shrink-0 ">
//    <div className="shrink-0 w-[75vw] aspect-video rounded-lg shadow-xl bg-gradient-to-b from-violet-600 via-violet-900 to-violet-950 flex items-center justify-center">
//      A
//    </div>
//  </div>;
