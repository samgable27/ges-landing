import React from "react";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="ml-36 mt-12 flex flex-col">
      <div className="flex items-center justify-between space-y-5 mr-96 border-spacing-2 border-gray-100 border-b-2 pb-10 ">
        <div className="flex flex-col items-start font-lato font-extraBold text-2xl space-x-2">
          <div className="flex items-center justify-between space-x-1">
            <Diversity3Icon
              sx={{
                fontSize: "2rem",
              }}
            />
            <div>
              Gable
              <span className="font-lato font-regular">ExecutiveSearch</span>
            </div>
          </div>
          <p className="font-lato font-regular text-sm max-w-sm pt-3">
            Unlock your potential with GES, the leading headhunting firm
            dedicated to connecting you with opportunities that propel you
            towards unparalleled success.
          </p>
        </div>
        <div className="flex space-x-24">
          <div>
            <h1 className="font-lato font-extraBold text-md pb-3">Company</h1>
            <div className="font-lato font-regular text-sm pt-3 space-y-2">
              <p>Demos</p>
              <p>About</p>
              <p>Blog</p>
              <p>Pages</p>
              <p>Contact</p>
            </div>
          </div>
          <div>
            <h1 className="font-lato font-extraBold text-md pb-3">Help</h1>
            <div className="font-lato font-regular text-sm pt-3 space-y-2">
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Customer Support</p>
            </div>
          </div>
          <div>
            <h1 className="font-lato font-extraBold text-md pb-3">Resources</h1>
            <div className="font-lato font-regular text-sm pt-3 space-y-2">
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Contact Us</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-between max-w-[1300px] mb-12">
        <div className="flex font-lato font-regular space-x-12 pt-10 ml-7 text-md">
          <div className="flex items-center space-x-1">
            <LocalPhoneIcon
              sx={{
                fontSize: "16px",
              }}
            />
            <span>+ 1 342 332 338</span>
          </div>
          <div className="flex items-center space-x-1">
            <EmailOutlinedIcon
              sx={{
                fontSize: "16px",
              }}
            />
            <span>info@ges.com</span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="font-lato font-light text-gray-500">
            &copy; 2023 GableExecutiveSearch, All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
