import React from "react";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="waves-bg-2 bg-no-repeat bg-cover bg-bottom h-[700px]">
      <div
        data-aos="fade-down"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="2000"
        data-aos-offset="200"
        className="flex flex-col divide-y-2 px-20"
      >
        <div className="flex items-center mt-12 justify-around space-y-5   pb-10 ">
          <div className="flex flex-col items-start font-lato font-extraBold text-2xl">
            <div className="flex items-start">
              <Diversity3Icon
                className="mr-1"
                sx={{
                  fontSize: "2rem",
                }}
              />
              Gable
              <span className="font-lato font-regular">ExecutiveSearch</span>
            </div>
            <span className="font-lato font-regular text-sm max-w-sm pt-3 pr-10">
              Unlock your potential with GES, the leading headhunting firm
              dedicated to connecting you with opportunities that propel you
              towards unparalleled success
            </span>
          </div>

          <div className="flex space-x-24">
            <div>
              <h1 className="font-lato font-extraBold text-md pb-3">Company</h1>
              <div className="font-lato font-regular text-sm pt-3 space-y-2">
                <p className="cursor-not-allowed">Demos</p>
                <p className="cursor-not-allowed">About</p>
                <p className="cursor-not-allowed">Blog</p>
                <p className="cursor-not-allowed">Pages</p>
                <p className="cursor-not-allowed">Contact</p>
              </div>
            </div>
            <div>
              <h1 className="font-lato font-extraBold text-md pb-3">Help</h1>
              <div className="font-lato font-regular text-sm pt-3 space-y-2">
                <p className="cursor-not-allowed">Terms & Conditions</p>
                <p className="cursor-not-allowed">Privacy Policy</p>
                <p className="cursor-not-allowed">Customer Support</p>
              </div>
            </div>
            <div>
              <h1 className="font-lato font-extraBold text-md pb-3">
                Resources
              </h1>
              <div className="font-lato font-regular text-sm pt-3 space-y-2">
                <p className="cursor-not-allowed">Terms & Conditions</p>
                <p className="cursor-not-allowed">Privacy Policy</p>
                <p className="cursor-not-allowed">Contact Us</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-around font-lato font-regular pt-10 text-md">
          <div className="flex font-lato font-regular  space-x-8 ">
            <div className="flex items-center space-x-1">
              <LocalPhoneIcon
                sx={{
                  fontSize: "18px",
                }}
              />
              <span>+ 1 342 332 338</span>
            </div>
            <div className="flex items-center space-x-1">
              <EmailOutlinedIcon
                sx={{
                  fontSize: "18px",
                }}
              />
              <span>info@ges.com</span>
            </div>
          </div>
          <div className="font-lato font-light text-gray-500">
            &copy; 2023 GableExecutiveSearch, All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
