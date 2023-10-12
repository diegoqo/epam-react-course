import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    root: {
      fontFamily: "Montserrat",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Montserrat",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          color: "#FFF",
          border: "none",
          fontFamily: "Montserrat",
          borderColor: "transparent",
          "&:before": {
            borderColor: "transparent",
          },
          "&:after": {
            borderColor: "transparent",
          },
        },
        icon: {
          color: "#F65261",
        },
        fieldset: {
          borderColor: "transparent",
        },
        outlined: {
          input: {
            borderColor: "transparent",
          },
          "&:focus": {
            borderColor: "transparent",
          },
          borderColor: "transparent",
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          ":active": {
            borderColor: "transparent",
          },
          borderColor: "transparent",
          "&:focus": {
            borderColor: "transparent",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#232323",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#232323",
          "&:hover": {
            backgroundColor: "#232323",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          border: "none",
        },
        root: {
          border: "none",
          "&:hover": {
            border: "none",
          },
        },
        notchedOutline: {
          border: "none",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          border: "none",
          "&:hover": {
            border: "none",
          },
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
