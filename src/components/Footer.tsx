import React from "react";
import Diversity3Icon from "@mui/icons-material/Diversity3";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="ml-36 mt-12 flex flex-col">
      <div>
        <div className="flex items-center justify-between space-y-5 mr-96">
          <div className="flex items-center font-lato font-extraBold text-2xl space-x-2">
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
          {/* <p className="font-lato font-regular text-md max-w-md">
            Revolutionize your business with our point of sale system; increase
            efficiency and boost sales today
          </p> */}
          <div className="flex space-x-24">
            <div>
              <h1 className="font-lato font-extraBold text-md pb-3">Company</h1>
              <div className="font-lato font-bold text-sm pt-3 space-y-2">
                <p>Demos</p>
                <p>About</p>
                <p>Blog</p>
                <p>Pages</p>
                <p>Contact</p>
              </div>
            </div>
            <div>
              <h1 className="font-lato font-extraBold text-md pb-3">Help</h1>
              <div className="font-lato font-bold text-sm pt-3 space-y-2">
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Customer Support</p>
              </div>
            </div>
            <div>
              <h1 className="font-lato font-extraBold text-md pb-3">
                Resources
              </h1>
              <div className="font-lato font-bold text-sm pt-3 space-y-2">
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Contact Us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
