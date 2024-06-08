import ProductCard from "@/app/ui/cards/ProductCard";
import ServiceCard from "@/app/ui/cards/ServiceCard";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function page() {
  const services = [
    {
      title: "Versión personalizada de VorticApp",
      description:
        "Obtén una versión adaptada de VorticApp que se ajusta a las necesidades específicas de tu empresa, brindando una experiencia de usuario única y funcionalidades exclusivas. ",
    },
    {
      title: "Licencia de Uso por un Año",
      description:
        "Adquiere una licencia de uso anual para acceder a todas las funcionalidades y servicios de VorticEmpresarial durante todo el año, con la flexibilidad que necesitas para tu negocio. ",
    },
    {
      title: "Actualizaciones",
      description:
        "Mantente al día con las últimas funciones y mejoras gracias a las actualizaciones continuas proporcionadas por VorticApp Empresarial. ",
    },
    {
      title: "Servidor Privado",
      description:
        "Accede a un servidor exclusivo para tu empresa con VorticEmpresarial, garantizando un rendimiento óptimo y un control total sobre tus datos.",
    },
    {
      title: "Conexión con tus Datos",
      description:
        "Integramos VorticApp Empresarial con tus sistemas existentes para trabajar de manera fluida y eficiente con tus propios datos empresariales.",
    },
    {
      title: "Soporte Remoto",
      description:
        "Recibe asistencia técnica y resolución de problemas de forma rápida y eficiente a través de nuestro equipo de soporte remoto especializado.",
    },
    {
      title: "Capacitaciones",
      description:
        "Capacitamos a tu equipo para que puedas  aprovechar al máximo VorticApp Empresarial con sesiones de formación personalizadas y orientadas a tus necesidades específicas.",
    },
    {
      title: "Consultoría",
      description:
        "Consultoría especializada para potenciar tu empresa. Nuestros expertos analizan tus datos geoespaciales y te ofrecen recomendaciones específicas para maximizar su uso y análisis.",
    },
    {
      title: "Automatizaciones",
      description:
        "Simplifica tus procesos. Recibe reportes y alertas directamente en tu correo electrónico o WhatsApp. Además, programa tareas de análisis de datos geoespaciales para optimizar tu eficiencia operativa.",
    },
    {
      title: "Conexión con IoT",
      description:
        "Nos integramos con tus dispositivos IoT para recopilar y analizar datos en tiempo real, optimizando tus operaciones y mejorando la toma de decisiones con información siempre actualizada.",
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
          src="/imgbussines.png"
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
                title={"VorticApp Empresarial"}
                description={
                  "Es una solución de software personalizada de análisis geoespacial que ofrece a las empresas una versión adaptada de  VorticApp, ajustada a sus requisitos específicos y con las medidas de seguridad necesarias para el entorno empresarial. Proporciona una integración fluida entre Vortic Tools y Vortic Assistant, permitiendo a las empresas aprovechar al máximo los datos geoespaciales para la toma de decisiones fundamentadas y seguras."
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={4}>
                {services.map((service, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <ServiceCard
                      title={service.title}
                      description={service.description}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid item xs={12}>
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
                
                <Typography>
                El proceso de VorticApp Empresarial comienza con una consultoría exhaustiva para evaluar tus operaciones y definir los requisitos geoespaciales. Luego, desarrollamos herramientas personalizadas de VorticTools y una versión específica de VorticAssistant que integra estas herramientas, seguida por la creación de una VorticApp personalizada para tu empresa. Tras pruebas rigurosas y capacitaciones para tu equipo, implementamos las soluciones en tu entorno empresarial, configurando todo para optimizar tus operaciones y permitir decisiones informadas. Con soporte continuo y actualizaciones regulares, VorticApp Empresarial asegura la gestión eficiente y el éxito de tus operaciones empresariales.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
