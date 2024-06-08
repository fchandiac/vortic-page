import ProductCard from "@/app/ui/cards/ProductCard";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function page() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        <img
          src="/imgSust.jpeg"
          alt="Vortic App"
          className="background-image"
        />

        <Container
          sx={{
            mt: {
              xs: "80vh",
              sm: "70vh",
              md: "70vh",
              lg: "75vh",
            }, 
            position: "relative",
            zIndex: 1,
            color: "#ffffff",
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <ProductCard
                title={"Sustentabilidad"}
                description={
                  "CO2Meter es una herramienta avanzada de Vortic diseñada específicamente para medir la huella de carbono de nuestras VorticTools y otras tecnologías utilizadas en nuestra empresa. Con CO2Meter, podemos realizar un seguimiento preciso y en tiempo real de las emisiones de carbono asociadas a la utilización de nuestros sistemas y herramientas."
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  backgroundColor: "rgba(0,0,0,0.7)",
        
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
                <Box
                sx={{
                  width: "50%",
                  padding: 2,
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
                    Compromiso Vortic
                  </Typography>
                  <Typography mt={10}>
                    Nuestro compromiso con el medio ambiente es firme y
                    decidido. Para diciembre de 2024, transformaremos nuestra
                    huella de carbono, más un 33% extra, en árboles que serán
                    plantados en áreas necesitadas de reforestación. Este
                    esfuerzo no solo compensará nuestras emisiones, sino que
                    también contribuirá significativamente a la biodiversidad,
                    mejorará la calidad del aire y apoyará a las comunidades
                    locales. Estamos dedicados a impulsar un futuro más verde y
                    sostenible, y este es un paso clave en nuestro camino hacia
                    la responsabilidad ambiental.
                  </Typography>
                </Box>

                <Box
                sx={{
                  width: "50%",
                  backgroundImage: "url('/imgSust2.jpeg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderBottomRightRadius: 15,
                  borderTopRightRadius: 15,
                }}
                />
                  
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
