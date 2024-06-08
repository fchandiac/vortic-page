import ProductCard from "@/app/ui/cards/ProductCard";
import { Box, Container, Grid } from "@mui/material";
import React from "react";
import AboutCard from "../ui/cards/AboutCard";
import PersonCard from "../ui/cards/PersonCard";

export default function page() {
  const persons = [
    {
      name: "Lía Seguel Alvarado",
      job: "CEO - fundadora",
      description:
        "Arquitecta graduada de la UDEC y actualmente está cursando un Máster en Arquitectura Avanzada y Urbanismo Ambientalmente Sostenible en UDIMA. Además, es el punto nacional de contacto del Cluster Latinoamericano de Industria Espacial (CLIE).",
      image: "/person1.png",
    },
    {
      name: "Daniela Díaz Sasso",
      job: "Coordinadora de Proyecto",
      description:
        "Analista Programador Informático con experiencia en infraestructura, soporte y QA. Actualmente se desempeña como Analista de QA, desarrollando y ejecutando pruebas en entornos de escritorio y web.",
      image: "/person2.png",
    },
    {
      name: "Erika Espinosa M",
      job: "Community Manager",
      description:"Estudiante de Psicología UNINI Con mas de 10 años en el área comercial, ventas y atención al cliente. Se ha especializado en Marketing Digital, Gerencia de Marketing y Green Marketing, con enfoque en Sostenibilidad e Innovación.",
      image: "/person3.png",
    },
    {
      name: "Valentina Purcell C.",
      job: "Datos satelitales",
      description: "Arquitecta de la Universidad Técnica Federico Santa María, diplomada en Coordinación y Modelación BIM para edificación.",
      image: "/person4.png",
    },
    {
      name: "Felipe Chandía Castillo",
      job: "Desarrollador de software",
      description: "Desarrollador de aplicaciones multiplataforma. Con habilidades que abarcan desde el backend hasta el frontend, se dedica a crear software y soluciones informáticas basadas en software. Integraciones de inteligencia artificial y automatización.",
      image: "/person5.png",
    },
    {
      name: "Erin Flores Ossandón",
      job: "Apoyo desarrollo",
      description: "Arquitecta e ilustradora chilena, graduada de la Universidad Técnica Federico Santa María. Con enfoque en la innovación y el diseño gráfico, trabaja como arquitecta independiente en tramitaciones y como ilustradora editorial.",
      image: "/person6.png",
    },
  ];
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
          src="/imgAboutUs.jpeg"
          alt="Vortic App"
          style={{
            position: "absolute",
            top: 50,
            left: 0,
            width: "100%",
            height: "70%",
            objectFit: "cover",
            zIndex: -1,
          }}
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
              <AboutCard />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container>
        <Grid container spacing={2}>
          {persons.map((person, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <PersonCard
                name={person.name}
                job={person.job}
                description={person.description}
                image={person.image}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
