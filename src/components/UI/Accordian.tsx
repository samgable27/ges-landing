import React from "react";
import { Collapse } from "antd";

interface AccordianProps {}

const { Panel } = Collapse;

const textDescI = (
  <p className="text-gray-500 min-h-[1px] leading-7 pb-4 l text-xl pt-3 font-lato font-regular">
    Begin your complimentary 7-day trial with a Summarist annual membership. You
    are under no obligation to continue your subscription, and you will only be
    billed when the trial period expires. With Premium access, you can learn at
    your own pace and as frequently as you desire, and you may terminate your
    subscription prior to the conclusion of the 7-day free trial.
  </p>
);
const textDescII = (
  <p className="text-gray-500 text-xl pt-3 font-lato font-regular">
    While an annual plan is active, it is not feasible to switch to a monthly
    plan. However, once the current month ends, transitioning from a monthly
    plan to an annual plan is an option.
  </p>
);
const textDescIII = (
  <p className="text-gray-500 text-xl pt-3 font-lato font-regular">
    Premium membership provides you with the ultimate Summarist experience,
    including unrestricted entry to many best-selling books high-quality audio,
    the ability to download titles for offline reading, and the option to send
    your reads to your Kindle.
  </p>
);
const textDescIV = (
  <p className="text-gray-500 text-xl pt-3 font-lato font-regular">
    You will not be charged if you cancel your trial before its conclusion.
    While you will not have complete access to the entire Summarist library, you
    can still expand your knowledge with one curated book per day.
  </p>
);
const textDescV = (
  <p className="text-gray-500 text-xl pt-3 font-lato font-regular">
    You will not be charged if you cancel your trial before its conclusion.
    While you will not have complete access to the entire Summarist library, you
    can still expand your knowledge with one curated book per day.
  </p>
);
const textDescVI = (
  <p className="text-gray-500 text-xl pt-3 font-lato font-regular">
    You will not be charged if you cancel your trial before its conclusion.
    While you will not have complete access to the entire Summarist library, you
    can still expand your knowledge with one curated book per day.
  </p>
);

const Accordian: React.FC<AccordianProps> = () => {
  return (
    <Collapse bordered={true}>
      <Panel
        key={1}
        header={
          <span className="text-[#144aa1] font-lato font-bold text-3xl">
            Full transparency & communication throughout all stages of the
            process
          </span>
        }
      >
        {textDescI}
      </Panel>
      <Panel
        key={2}
        header={
          <span className="text-[#144aa1] font-lato font-bold text-3xl">
            We ensure that we will find the talent that matches your unique
            requirements and capabilities
          </span>
        }
      >
        {textDescII}
      </Panel>
      <Panel
        key={3}
        header={
          <span className="text-[#144aa1] font-lato font-bold text-3xl">
            Full responsibility for the whole recruitment process
          </span>
        }
      >
        {textDescIII}
      </Panel>
      <Panel
        key={4}
        header={
          <span className="text-[#144aa1] font-lato font-bold text-3xl">
            Success fee - you will not receive an invoice until you are hired
          </span>
        }
      >
        {textDescIV}
      </Panel>
      <Panel
        key={5}
        header={
          <span className="text-[#144aa1] font-lato font-bold text-3xl">
            We will adapt the cooperation model
          </span>
        }
      >
        {textDescV}
      </Panel>
      <Panel
        key={6}
        header={
          <span className="text-[#144aa1] font-lato font-bold text-3xl">
            Full responsibility for the entire recruitment process
          </span>
        }
      >
        {textDescVI}
      </Panel>
    </Collapse>
  );
};
export default Accordian;
