import { Box, Container, Typography } from "@mui/material";
import React from "react";

export default function TechnologyCard(props) {
  const { title = "Title", description = "Description" } = props;

  return (
    <>
      <Box
        sx={{
          backgroundColor: "rgba(0,0,0,0.5)",
          padding: 3,
          borderTop: "4px solid #FF5B01",
          minHeight: 220,
        }}
      >
        <Typography
          fontSize={24}
          fontWeight={"bold"}
          sx={{
            color: "#ffffff",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            marginBottom: 3,
          }}
        >
          {title}
        </Typography>
        <Typography
          fontSize={16}
          sx={{
            color: "#ffffff",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          }}
        >
          {description}
        </Typography>
      </Box>
    </>
  );
}
