import React, { useState, useEffect } from "react";
import moment from "moment";
import cloudy from "../assets/weather/cloudy.png";
import rain from "../assets/weather/rain.png";
import rainbow from "../assets/weather/rainbow.png";
import snowflake from "../assets/weather/snowflake.png";
import storm from "../assets/weather/storm.png";
import sun from "../assets/weather/sun.png";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import starryNight from "../assets/starry-night.png";
import { Card } from "../components/card/card";

// get current time in clock format hh:mm
const getTime = () => moment().format("h:mm");
const getAmPm = () => moment().format("A");

const getIconBasedOnAmOrPm = () => {
  const hour = moment().format("H");
  if (hour >= 6 && hour < 12) {
    return sun;
  } else if (hour >= 12 && hour < 18) {
    return sun;
  } else {
    return starryNight;
  }
};

const Weather = () => {
  const [time, setTime] = useState(getTime());
  const [amPm, setAmPm] = useState(getAmPm());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
      setAmPm(getAmPm());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card>
      <Box
        display="flex"
        justifyContent="space-evenly"
        flexDirection="column"
        height="100%"
        position="relative"
      >
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          height="100%"
        >
          <Typography variant="h1" align="center">
            {time}
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            width="100%"
          >
            <Box mr={4}>
              <img
                src={getIconBasedOnAmOrPm()}
                alt="weather"
                height="180px"
                width="100%"
              />
            </Box>
            <Box>
              <Typography variant="h1" component="span">
                {amPm}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default Weather;
