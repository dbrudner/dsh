import React, { useState, useEffect } from "react";
import moment from "moment";
import cloudy from "../assets/weather/cloudy.png";
import rain from "../assets/weather/rain.png";
import rainbow from "../assets/weather/rainbow.png";
import snowflake from "../assets/weather/snowflake.png";
import storm from "../assets/weather/storm.png";
import sun from "../assets/weather/sun.png";
import axios from "axios";
import { Box, TextField, Typography } from "@mui/material";
import starryNight from "../assets/starry-night.png";
import { Card } from "../components/card/card";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

export const Directions = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    if (!search.length) {
      setData(null);
    }
  }, [search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (search.length <= 3) return;
    const url = `/.netlify/functions/wiki?search=${search}`;

    console.log({ search, url });

    const response = await fetch(url);

    const data = await response.json();

    const [id] = Object.keys(data.query.pages);

    setData(data.query.pages[id].extract);
  };

  console.log({ data });

  return (
    <Card>
      <Box
        display="flex"
        justifyContent="space-evenly"
        flexDirection="column"
        height="100%"
      >
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          height="100%"
          width="640px"
          margin="auto"
        >
          <Accordion expanded={!!data && !!search}>
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <form onSubmit={handleSubmit}>
                <TextField
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                  variant="standard"
                  placeholder="Looking for...?"
                  sx={{
                    "& .MuiInputBase-root": {
                      fontSize: "36px",
                      "::before, ::after": {
                        borderBottom: "none"
                      },
                      "&:active::before": {
                        borderBottom: "none"
                      },
                      "&:focus::before": {
                        borderBottom: "none"
                      },
                      "& input": {
                        textAlign: "center",
                        color: "lime"
                      },
                      "&:not(.Mui-disabled):hover::before": {
                        border: "none"
                      }
                    }
                  }}
                />
              </form>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                height="180px"
                overflow="scroll"
                border="10px solid lime"
                p={3}
              >
                <Typography>{data}</Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Card>
  );
};
