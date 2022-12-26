import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { muiTheme } from "./mui-theme";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { createTheme } from "@mui/material";
import App from "./app";
import Weather from "./components/weather";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Main() {
  return (
    <ThemeProvider theme={createTheme(muiTheme)}>
      <App />
    </ThemeProvider>
  );
}
const root = createRoot(document.getElementById("target"));

root.render(<Main />);
