import Image from "next/image";
import React, { SVGProps } from "react";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import { Button, createTheme, ThemeProvider, Box } from "@mui/material";

interface NavProps {
  text: string;
  Icon: IconComponentType;
}

type IconComponentType = (props: SVGProps<SVGSVGElement>) => JSX.Element;

const Nav: React.FC<NavProps> = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#144aa1",
        contrastText: "#fff",
      },
    },
  });
  return (
    <header className="bg-[#144aa1]">
      <div className="px-24 py-12 max-w-[1800px]">
        <div className="flex items-start text-white">
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

          <div className="flex flex-grow justify-around items-center">
            <li className="cursor-pointer list-none space-x-8 font-lato font-light text-gray-300 text-md">
              <a>Demos</a>
              <a>About</a>
              <a>Blog</a>
              <a>Press</a>
              <a>Contact</a>
            </li>
            <ThemeProvider theme={theme}>
              <Button size="large" variant="contained" color="primary">
                <span className="font-lato font-extraBold">Consultation</span>
              </Button>
            </ThemeProvider>
          </div>
        </div>

        <div className="flex mt-36">
          <div className="flex flex-col max-w-2xl">
            <h1 className="text-white font-lato font-bold text-[64px]">
              We will handle the recruitment process for you.
            </h1>
            <p className="text-gray-300 text-2xl font-lato font-regular ">
              All the while ensuring the hiring process is simple, efficient,
              and with full transparency.
            </p>
            <Box sx={{ "& button": { marginTop: 5 } }}>
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
              height={600}
              width={600}
              alt={""}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
