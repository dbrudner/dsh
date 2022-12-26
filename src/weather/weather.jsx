import React, { useState, useEffect } from "react";
import moment from "moment";
import cloudy from "../assets/weather/cloudy.png";
import rain from "../assets/weather/rain.png";
import rainbow from "../assets/weather/rainbow.png";
import snowflake from "../assets/weather/snowflake.png";
import storm from "../assets/weather/storm.png";
import sun from "../assets/weather/sun.png";
import axios from "axios";
import { Box, LinearProgress, Typography } from "@mui/material";
import { Card } from "../components/card/card";
import { Loading } from "../loading/loading";

const Weather = () => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://api.openweathermap.org/data/2.5/weather?q=New Orleans&units=imperial&appid=5e269680004f65e42a9b252812918c47 "
      );
      setWeather(result.data);
    };
    // fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const weatherIcon = (() => {
    if (weather.weather) {
      const currentConditions = weather.weather[0].main.toLowerCase();
      if (currentConditions === "clear") {
        return sun;
      } else if (
        currentConditions === "clouds" ||
        currentConditions === "smoke"
      ) {
        return cloudy;
      } else if (currentConditions === "snow") {
        return snowflake;
      } else if (currentConditions === "rain") {
        return rain;
      } else if (currentConditions === "thunderstorm") {
        return storm;
      }
    }
  })();

  if (!weather.main) {
    return <Card />;
  }

  return (
    <Card>
      <Box
        p={2}
        display="flex"
        justifyContent="space-around"
        flexDirection="column"
        height="94%"
      >
        <Box display="flex" justifyContent="center">
          <Typography variant="h1">
            {Math.round(weather.main?.temp)}°F
          </Typography>
          <img
            src={weatherIcon}
            alt="weather icon"
            width="180px"
            height="180px"
          />
        </Box>
        <Box>
          <Box display="flex" justifyContent="space-between">
            <Typography>0°F</Typography>
            <Typography>100°F</Typography>
          </Box>
          <Box sx={{ border: "10px solid lime", padding: "5px" }}>
            <LinearProgress
              variant="determinate"
              value={Math.round(weather.main?.temp)}
              sx={{
                height: "40px",
                "&.MuiLinearProgress-colorPrimary": {
                  backgroundColor: "#323232"
                }
              }}
            />
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box
            height="100px"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Typography variant="body1" fontSize="20px">
              • Feels like: {Math.round(weather.main?.feels_like)}°F
            </Typography>
            <Typography variant="body1" fontSize="20px">
              • Precipitation: {weather.main?.humidity}%
            </Typography>
            <Typography variant="body1" fontSize="20px">
              • Wind: {weather.wind?.speed} mph
            </Typography>
          </Box>
          <Box
            height="100px"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Typography variant="h4">New Orleans, LA</Typography>
            <Typography variant="h4" align="right">
              70116
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default Weather;
