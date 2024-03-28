import Image from "next/image";
import React from "react";
// import flo from "@/public/avatar/Florent-Vincerot-avatar-circle.png";
import flo from "@/public/avatar/Florent-Vincerot-avatar.jpg";

interface HomeHeroContentLayoutProps {
  sticky: number;
  height: number;
  width: number;
}

const HomeHeroContentLayout = ({
  sticky,
  width,
  height,
}: HomeHeroContentLayoutProps) => {
  return (
    <div className="flex gap-4 text-white">
      <Image
        src={flo}
        alt="Portrait illustration de Florent Vincerot"
        sizes="500"
        className="transition-all w-2/3"
        // style={{ objectFit: "cover" }}
      />
      <div className="absolute text-7xl w-1/3 right-40 top-60">
        <h1>Développeur Front End</h1>
        <h1>Designer UX/UI</h1>
      </div>
      <div className="flex flex-col justify-end py-10">
        <p>LISTEN TO THE SCREEN</p>
        <p>
          scoll value :<br />
          <strong>{sticky}</strong>
          <br />
        </p>
        <p>
          window width <br />
          value (-50) :<br /> <strong>{width}</strong>
        </p>{" "}
        <p>
          window height <br />
          value (-50) :<br /> <strong>{height}</strong>
        </p>{" "}
      </div>
    </div>
  );
};

export default HomeHeroContentLayout;
