import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Box from "@mui/material/Box";
import { TextField, createTheme, Theme } from "@mui/material";
import { ThemeProvider, useTheme } from "@emotion/react";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { Button } from "antd";

type Props = {};

const customTheme = (outerTheme: Theme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette?.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#E0E3E7",
            "--TextField-brandBorderHoverColor": "#fff",
            "--TextField-brandBorderFocusedColor": "#fff",
            "--TextField-brandPlaceHolderColor": "#fff",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          filled: {
            // change the placeholder text style
            "&.Mui-focused": {
              color: "var(--TextField-brandPlaceHolderColor)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            "&:before, &:after": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            "&:before": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });

const Contact = (props: Props) => {
  const ariaLabel = { "aria-label": "description" };
  const outerTheme = useTheme();

  return (
    <div className="flex items-start justify-between bg-[#144aa1] px-36 py-36">
      <div className=" flex flex-col">
        <h1 className="font-lato font-bold text-2xl text-[#fff] max-w-[1800px]">
          Contact Us
        </h1>
        <div className="mt-8 ml-1 font-lato font-extraBold text-5xl max-w-lg text-white leading-tight">
          Any questions? Write or call with a guaranteed response within 12
          hours
        </div>
        <p className="font-lato font-light text-gray-300 max-w-xl pt-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
          dolores, deleniti recusandae velit consequuntur ipsa vel. Voluptatem,
          deserunt dolore! Dolorem cupiditate nam optio tempora eos. Atque
          veritatis officiis voluptatem fugiat! Vel repudiandae libero, eaque
          praesentium veritatis minus iure, quam voluptatum numquam voluptate
          nulla possimus vero laudantium laborum accusantium, nihil dicta?
        </p>
        <div className="flex font-lato font-regular text-gray-300 space-x-24 pt-10 ml-7 text-2xl">
          <div className="flex items-center space-x-3">
            <LocalPhoneIcon />
            <span>+ 1 342 332 338</span>
          </div>
          <div className="flex items-center space-x-3">
            <EmailOutlinedIcon />
            <span>info@ges.com</span>
          </div>
        </div>
      </div>
      <ThemeProvider theme={customTheme(outerTheme)}>
        <Box
          className="mr-64 flex flex-col space-y-12 w-max"
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25rem" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField label="Your Name" variant="filled" />
          <TextField label="Email" variant="filled" />
          <TextField label="Subject" variant="filled" />
          <TextField label="Message" variant="filled" multiline rows={6} />
          <button className="bg-[#32a852] rounded-lg w-20 h-10">Send</button>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Contact;
