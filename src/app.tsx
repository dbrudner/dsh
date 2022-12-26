import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import snowflake from "./assets/weather/snowflake.png";
import { Box, ThemeProvider } from "@mui/material";
import { muiTheme } from "./mui-theme";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typewriter from "typewriter-effect";
import MatrixCodeRain, { Loading } from "./loading/loading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Weather from "./weather/weather";
import Clock from "./clock/clock";
import "./slider.css";
import { Directions } from "./directions/directions";
import { Stocks } from "./stocks/stocks";

export default function App() {
  const [slide, setSlide] = useState(0);

  return (
    <Box
      height="100%"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Slider arrows={false}>
        <Weather />
        <Clock />
        <Stocks />
        <Directions />
      </Slider>
    </Box>
  );
}
