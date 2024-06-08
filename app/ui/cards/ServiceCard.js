import { Box, Typography } from "@mui/material";
import React from "react";

export default function ServiceCard(props) {
  const { title = "Title", description = "Description" } = props;
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#262837",
          padding: 2,
          borderRadius: 4,
          minHeight: 200,
         
        }}
      >
        <Typography fontWeight={"bold"} fontSize={20}>
          {title}
        </Typography>

        <Box
          sx={{
            mt: 2,
            mb: 2,
            borderTop: "4px solid #FF5B01",
          }}
        />
        <Typography fontSize={16} textAlign={"justify"}>
          {description}
        </Typography>
      </Box>
    </>
  );
}
