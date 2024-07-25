import ProductCard from "@/app/ui/cards/ProductCard";
import { Box, Container, Grid } from "@mui/material";
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
            src="/imgConsulting.png"
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
                 title={"Consultoría"}
                 description={
                   "El servicio de consultoría de Vortic implica un proceso realizado con el respaldo de nuestros profesionales expertos en análisis de datos. Nuestro equipo de consultores trabaja contigo para comprender tus necesidades y objetivos comerciales, identificar áreas de mejora y desarrollar estrategias efectivas utilizando datos geoespaciales. Desde la planificación hasta la implementación, te guiaremos en cada paso del camino para garantizar que maximices el valor de tus datos y tomes decisiones fundamentadas para el éxito de tu empresa."
                 }
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </>

  );
}
