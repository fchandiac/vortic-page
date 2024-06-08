import { Box, Typography } from "@mui/material";
import React from "react";

export default function VorticTechCard(props) {
  const { title = "Title", description = "Description", icon } = props;
  return (
    <>
      <Box
      sx={{
        backgroundColor: '#262837',
        padding: 2,
        borderRadius: 4,
        minHeight: 530,
      }}
   
      >
        <Box
          sx={{
            display: "flex",

            alignItems: "center",
            justifyContent: "left",
            

  
          }}
        >
          <img src={icon} alt="icon" style={{ width: 90, height: 90 }} />
          <Box sx={{ ml: 2 }}>
            <Typography
              fontWeight={"bold"}
              fontSize={24}
            >
              {title}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ mt: 2 }}>
            <Typography
                fontSize={16}
                textAlign={'justify'}
            >
                {description}
            </Typography>
            </Box>
      </Box>
    </>
  );
}
