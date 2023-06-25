import React, { useState } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Box from "@mui/material/Box";
import { TextField, createTheme, Theme } from "@mui/material";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button, Space } from "antd";

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

  const [loadings, setLoadings] = useState<boolean[]>([]);

  const enterLoading = (index: number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  return (
    <div className=" bg-[#144aa1] rounded-t-[15rem] py-36">
      <div className="flex items-center justify-around ">
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
        >
          <h1 className="font-lato font-bold text-2xl text-[#fff] max-w-[2000px]">
            Contact Us
          </h1>
          <div className="mt-8 ml-1 font-lato font-extraBold text-5xl max-w-xl text-white leading-tight">
            Questions? Write or call with a guaranteed response within 24 hours
          </div>
          <p className="font-lato font-light text-gray-300 max-w-xl pt-10">
            Unlock your potential with our executive services, the leading
            headhunting firm dedicated to connecting you with opportunities that
            propel you towards unparalleled success. We employ a uniquely
            tailored approach to discover the hidden gems in the employment
            market, perfectly suited to your skillset and ambitions. Our
            extensive network and deep industry insights ensure we don't just
            find you a job - we find you the right fit, in an organization where
            you can grow, excel, and make a meaningful impact. Let GES be your
            compass in navigating the world of opportunities, and take the first
            step to a rewarding and fulfilling career journey
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
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
        >
          <ThemeProvider theme={customTheme(outerTheme)}>
            <Box
              className="flex flex-col space-y-12"
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
              <Space wrap>
                <Button
                  className="bg-[#15ba99] w-[25rem] h-[3rem]"
                  type="primary"
                  loading={loadings[0]}
                  onClick={() => enterLoading(0)}
                >
                  <span className="font-lato font-regular text-lg">Send</span>
                  <ArrowForwardIcon className="text-[20px] mb-1 ml-1" />
                </Button>
              </Space>
            </Box>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
};

export default Contact;
