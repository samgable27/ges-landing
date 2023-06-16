import React from "react";
import Accordian from "./UI/Accordian";

type Props = {};

const Recruitment = (props: Props) => {
  return (
    <div className="mt-36 ml-36 ">
      <div className="max-w-3xl mb-12">
        <h1 className="font-lato font-bold text-[64px]">
          What you can expect from our recruitment process
        </h1>
      </div>
      <div className="max-w-[1550px]">
        <Accordian />
      </div>
    </div>
  );
};

export default Recruitment;