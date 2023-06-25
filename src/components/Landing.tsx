import Image from "next/image";
import React, { SVGProps, useEffect } from "react";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import { Button, createTheme, ThemeProvider, Box } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
interface NavProps {
  text: string;
  Icon: IconComponentType;
}

type IconComponentType = (props: SVGProps<SVGSVGElement>) => JSX.Element;

const Landing: React.FC<NavProps> = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#144aa1",
        contrastText: "#fff",
      },
    },
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init();
    }
  }, []);

  return (
    <header className="bg-[#144aa1] rounded-b-[25rem]">
      <div className="flex justify-center ">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="flex items-center justify-center mt-36"
        >
          <div className="max-w-3xl">
            <h1 className="text-white font-lato pb-12 font-bold text-8xl">
              We will handle the recruitment process for you
            </h1>
            <p className="text-gray-300 text-2xl font-lato font-regular max-w-lg">
              All the while ensuring the hiring process is simple, efficient,
              and with full transparency.
            </p>
            <Box sx={{ "& button": { marginTop: 6 } }}>
              <ThemeProvider theme={theme}>
                <Button size="large" variant="contained">
                  <span className="font-lato font-extraBold">
                    Contact Us and Start Recruitment
                  </span>
                </Button>
              </ThemeProvider>
            </Box>
          </div>
          <div className="w-[100%] h-[100%] px-10">
            <Image
              className="min-w-[600px] object-contain"
              src="./assets/undraw_shared_goals_re_jvqd.svg"
              height={700}
              width={700}
              alt={""}
            />
          </div>
        </div>
      </div>
      <div className="waves-bg bg-no-repeat bg-cover bg-top h-[400px] rounded-b-full"></div>
    </header>
  );
};

export default Landing;
