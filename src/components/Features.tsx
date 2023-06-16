import React from "react";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { BsGoogle } from "react-icons/bs";
import { FaYahoo } from "react-icons/fa";
import { SiGodaddy, SiLenovo } from "react-icons/si";
import Image from "next/image";
import Accordian from "./UI/Accordian";

type Props = {};

const Features = (props: Props) => {
  return (
    <div className="bg-white max-w-[1800px]  flex flex-col items-center justify-around mt-36">
      <h1 className="font-lato font-bold text-xl">
        Trusted by Local and International Businesses
      </h1>
      <div className="flex items-center space-x-16 pt-8 text-7xl text-[#144aa1]">
        <TfiMicrosoftAlt />
        <BsGoogle />
        <FaYahoo />
        <SiGodaddy />
        <SiLenovo className="text-9xl" />
      </div>

      <div className="flex items-center mt-36 ">
        <div className="flex flex-col max-w-2xl">
          <h1 className="font-lato font-bold text-[64px]">
            Who we are and what we do
          </h1>
          <p className="text-gray-500 text-2xl pt-6 font-lato font-regular">
            We understand recruiting is a difficult and time-consuming process.
            Our headhunting firm specializes in offering a comprehensive suite
            of services aimed at meeting your recruitment needs. We excel in
            executive search, leveraging our vast network and deep industry
            knowledge to recruit top-tier candidates for roles like CEO, CTO,
            and CFO. Beyond high-level roles, we also provide specialized
            recruitment services for niche industries, ensuring we find the
            talent that matches your unique requirements.
          </p>
        </div>
        <div>
          <Image
            src="/assets/headhunter.jpg"
            height={700}
            width={800}
            className="object-contain ml-10"
            alt={""}
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
