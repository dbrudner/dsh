import { Box, Paper } from "@mui/material";
import React from "react";

// export function that just returns children (no props)
export const Card = ({ children, noPadding }) => {
  return (
    <Box
      width="1024px"
      height="600px"
      sx={{ backgroundColor: "#323232" }}
      borderRadius="5px"
    >
      <Box height="100%" boxSizing="border-box" borderRadius="5px">
        {children}
      </Box>
    </Box>
  );
};
