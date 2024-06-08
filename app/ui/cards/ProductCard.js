import { Box, Typography } from "@mui/material";
import React from "react";

export default function ProductCard(props) {
  const { title, description } = props;
  return (
    <Box
      sx={{
        backgroundColor: "rgba(0,0,0,0.7)",
        padding: 2,
        borderRadius: 4,
        border: "1px solid #FF5B01",
        marginInline: {
            xs: 0,
            sm: 0,
            md: 20,
            lg: 30,
        }
      }}
    >
      <Typography fontSize={{
        xs: 24,
        sm: 24,
        md: 30,
        lg: 34,
      
      }} sx={{color: '#FF5B01'}} fontWeight={'bold'}>
        {title}
      </Typography>
      <Typography mt={10}>
        {description}
      </Typography>
    </Box>
  );
}
