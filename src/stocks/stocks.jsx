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
import fetch from "node-fetch";
import { Card } from "../components/card/card";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const symbols = ["googl", "tsla", "aapl"];

// today's date formatted mm/dd/yyyy
const today = moment().format("MM/DD/YYYY");

export const Stocks = () => {
  // fetch this url and set the state
  // https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=RTBJD4SII

  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const url = "/.netlify/functions/stocks";

      const response = await fetch(url);

      setData(await response.json());
    };

    fetchData();
  }, []);

  console.log({ data });

  if (!data?.length) {
    return null;
  }

  const items = data.map((x, i) => {
    const [result] = x.quoteSummary.result;
    const { financialData } = result;

    return (
      <Box
        width="250px"
        display="flex"
        justifyContent="space-around"
        flexDirection="column"
        textAlign={"center"}
        border="10px solid lime"
        p={2}
        height="175px"
      >
        <Typography variant="h3" textTransform="uppercase">
          {symbols[i]}
        </Typography>
        <Typography variant="h4">${financialData.currentPrice.fmt}</Typography>
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          color={(theme) =>
            financialData.revenueGrowth.raw > 0
              ? theme.palette.primary.main
              : theme.palette.error.main
          }
        >
          {financialData.revenueGrowth.raw > 0 ? (
            <span style={{ fontSize: "22px", marginRight: "15px" }}>↑</span>
          ) : (
            <span style={{ fontSize: "22px", marginRight: "15px" }}>↓</span>
          )}
          {financialData.revenueGrowth.fmt}
        </Typography>
      </Box>
    );
  });

  return (
    <Card>
      <Box
        display="flex"
        flexDirection="column"
        height="93%"
        justifyContent="space-around"
        p={2}
      >
        <Box>
          <Typography variant="h4" align="center">
            {today}
          </Typography>
        </Box>
        <Box>
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Typography variant="h3" mb={4} textTransform="uppercase">
              • nasdaq:
            </Typography>
            <Typography variant="h3" mb={4}>
              $10,497.86
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h3" mb={4} textTransform="uppercase">
              • s&p:
            </Typography>
            <Typography variant="h3" mb={4}>
              $3,844.82
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          rowGap={2}
        >
          {items}
        </Box>
      </Box>
    </Card>
  );
};
