import ProductCard from "@/app/ui/cards/ProductCard";
import { Box, Container, Grid } from "@mui/material";
import React from 'react'

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
        src="/imgOnline.png"
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
              title={"VorticApp Online  (Próximamente)"}
              description={
                "Es una plataforma web para análisis geoespacial que ofrece acceso instantáneo a la visualización de mapas, generación de reportes, Vortic Tools y Vortic Assistant desde cualquier lugar con conexión a internet. Permite a usuarios de todos los ámbitos realizar análisis complejos sin necesidad de instalar software adicional. Este servicio no está limitado a empresas; cualquier usuario que contrate la suscripción puede acceder para obtener información precisa y tomar decisiones fundamentadas basadas en datos geoespaciales."
              }
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
  )
}
