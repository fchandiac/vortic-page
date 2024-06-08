import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import PersonCard from "./PersonCard";

export default function AboutCard() {
 
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
        },
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            width: {
                xs: "100%",
                sm: "100%",
                md: "60%",
                lg: "60%",
                },
         
          }}
        >
          <Typography
            fontSize={{
              xs: 24,
              sm: 24,
              md: 30,
              lg: 34,
            }}
            sx={{ color: "#FF5B01" }}
            fontWeight={"bold"}
          >
            Vortic SpA
          </Typography>
          <Typography mt={10}>
            Somos una empresa innovadora dedicada a proporcionar soluciones
            avanzadas de análisis geoespacial. Nuestra misión es empoderar a las
            empresas y organizaciones con herramientas y servicios
            personalizados que les permitan tomar decisiones fundamentadas y
            optimizar sus operaciones. Con un equipo de expertos en data
            geoespacial y tecnología, nos esforzamos por ofrecer productos de
            alta calidad y consultoría especializada para satisfacer las
            necesidades específicas de nuestros clientes en diversos sectores.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "40%",
            padding: 2,
            mt: 15,
            display: {
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
                },
            
          }}
        >
          <img src="/logoSmall.svg" alt="logo" width={200} height={200} />
        </Box>
      </Box>

    
    </Box>
  );
}
