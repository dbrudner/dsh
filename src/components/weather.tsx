import React, { useState, useEffect } from "react";
import moment from "moment";
import cloudy from "../assets/cloudy.png";
import rain from "../assets/rain.png";
import rainbow from "../assets/rainbow.png";
import snowflake from "../assets/snowflake.png";
import storm from "../assets/storm.png";
import sun from "../assets/sun.png";
import axios from "axios";
import { Box } from "@mui/material";

const Weather = () => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://api.openweathermap.org/data/2.5/weather?q=New Orleans&units=imperial&appid=5e269680004f65e42a9b252812918c47 "
      );
      setWeather(result.data);
    };
    fetchData();
  }, []);

  let weatherIcon;
  if (weather.weather) {
    const currentConditions = weather.weather[0].main.toLowerCase();
    if (currentConditions === "clear") {
      weatherIcon = sun;
    } else if (currentConditions === "clouds") {
      weatherIcon = cloudy;
    } else if (currentConditions === "snow") {
      weatherIcon = snowflake;
    } else if (currentConditions === "rain") {
      weatherIcon = rain;
    } else if (currentConditions === "thunderstorm") {
      weatherIcon = storm;
    }
  }
  // {weather.main && (
  //   <div>
  //     <div>{Math.round(weather.main.temp)}°F</div>
  //     <div>{weather.weather[0].description}</div>
  //     <div>{moment.unix(weather.dt).format("h:mm A")}</div>
  //   </div>
  // )}

  return (
    <Box>
      asdf
      <img src={weatherIcon} alt="weather icon" />
    </Box>
  );
};

export default Weather;
