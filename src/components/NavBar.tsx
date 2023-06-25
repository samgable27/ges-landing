import React from "react";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import { Button, createTheme, ThemeProvider, Box } from "@mui/material";

type Props = {};

const NavBar = (props: Props) => {
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
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        className="text-white flex items-center justify-around pt-7 w-full"
      >
        <div className="flex items-center font-lato font-extraBold text-2xl space-x-2 cursor-pointer">
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

        <li className="list-none space-x-8 font-lato font-light text-gray-300 text-md">
          <a className="cursor-not-allowed">Demos</a>
          <a className="cursor-not-allowed">About</a>
          <a className="cursor-not-allowed">Blog</a>
          <a className="cursor-not-allowed">Press</a>
          <a className="cursor-not-allowed">Contact</a>
        </li>
        <ThemeProvider theme={theme}>
          <Button size="large" variant="contained" color="primary">
            <span className="font-lato font-extraBold">Consultation</span>
          </Button>
        </ThemeProvider>
      </div>
    </header>
  );
};

export default NavBar;
