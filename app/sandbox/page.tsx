import React from "react";
import { Chart } from "../components/charts/Chart";
import { AreaChartGradient } from "../components/charts/AreaChartGradient";
import { Area } from "recharts";

import { GoArrowRight } from "react-icons/go";
import { PictureCard } from "../components/ui/cards/PictureCard";

import { PictureCardProps } from "../components/ui/cards/PictureCard";

const Page = () => {
  return (
    <>
      {/* <div className="mt-4 mx-auto px-8 border"> */}
      <div className="flex flex-col md:flex-row justify-between gap-4 ">
        <PictureCard
          bgImage="les-cousines"
          title="Bang! you are red!"
          bgcolor="teal"
        >
          <p>Redrum! redrum! redrum!...</p>
        </PictureCard>
        <PictureCard bgImage="les-ophelies" bgcolor="yellow">
          <p className="text-slate-800">Content is optional</p>
        </PictureCard>
      </div>
      {/* </div> */}

      <div className="mt-4 mx-auto px-8 border">
        <div className="flex flex-col md:flex-row justify-between gap-4 ">
          <PictureCard
            bgImage="les-cousines"
            title="Bang! you are red!"
            bgcolor="teal"
          >
            <p>Redrum! redrum! redrum!...</p>
          </PictureCard>
          <AreaChartGradient />
        </div>
      </div>
    </>
  );
};

export default Page;
