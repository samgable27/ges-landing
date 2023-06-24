import React from "react";
import Accordian from "./UI/Accordian";

type Props = {};

const Recruitment = (props: Props) => {
  return (
    <div
      // data-aos="zoom-out-left"
      // data-aos-offset="500"
      // data-aos-duration="3000"
      className="mt-36 flex flex-col items-center justify-center"
    >
      <div className="max-w-3xl text-left mb-12">
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
