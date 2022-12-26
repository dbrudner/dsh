import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import snowflake from "../assets/weather/snowflake.png";
import { Box, ThemeProvider } from "@mui/material";
import { muiTheme } from "../mui-theme";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typewriter from "typewriter-effect";
import MatrixCodeRain from "../loading/loading";

// format time as hh:mm am/pm (e.g. 12:00 pm) for Typewriter component in App component below  (see https://stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format)
function getCurrentTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  const hours12 = hours % 12;
  const hours12String = hours12 ? hours12 : 12; // the hour '0' should be '12'
  const minutesString = minutes < 10 ? "0" + minutes : minutes;
  const strTime = hours12String + ":" + minutesString;
  return [strTime, ampm];
}

export default function App() {
  const [weatherData, setWeatherData] = useState<any>();

  // fetch data from open-meteo.com

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=29.96&longitude=-90.06&hourly=temperature_2m"
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      });
  }, []);

  console.log({ weatherData });

  if (!weatherData) return null;

  const [currentTemperature] = weatherData?.hourly?.temperature_2m;

  const [strTime, ampm] = getCurrentTime();

  return (
    <Box position="relative">
      <Box position="absolute">
        <MatrixCodeRain />
      </Box>
      <Paper elevation={0} square>
        <Box p={4} position="relative" width="100%">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h1" component="span" align="center">
                  {currentTemperature}
                </Typography>
                <Typography variant="h1" component="span" align="center">
                  °
                </Typography>
                <Typography variant="body1" component="span" align="center">
                  <span style={{ verticalAlign: "top", fontSize: "24px" }}>
                    F
                  </span>
                </Typography>
              </Box>

              <Box width="250px" display="block" margin="auto" mt={2}>
                <img src={snowflake} alt="snowflake" width="100%" />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                height="100%"
              >
                <Typography variant="h1">{strTime}</Typography>
                <Typography variant="h3">{ampm}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
}
