import ProductCard from "@/app/ui/cards/ProductCard";
import ServiceCard from "@/app/ui/cards/ServiceCard";
import { Box, Container, Grid , Typography} from "@mui/material";
import React from "react";

export default function page() {
  const services = [
    {
      title: "Paga por lo que usas",
      description:
        "Disfruta de nuestro modelo de suscripción mensual base, con costos variables según el uso de nuestras herramientas. Recibirás un informe mensual detallado para gestionar eficientemente tu inversión.",
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
    }
    
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
          src="/imgMonitoring.png"
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
            minWidth: "300px",
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <ProductCard
                title={"Monitoreo Automatizado"}
                description={
                  "El servicio de monitoreo automatizado de Vortic es una solución avanzada para la supervisión continua de tus datos geoespaciales. Utilizando algoritmos de inteligencia artificial, el sistema puede detectar cambios, generar alertas preventivas, realizar tareas automatizadas, enviar reportes periódicos a tu correo electrónico o WhatsApp, y ejecutar cualquier tarea personalizada que tu empresa necesite. Este servicio garantiza una gestión proactiva y eficiente, permitiéndote tomar decisiones informadas sin necesidad de intervención manual constante."
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={4}>
                {services.map((service, index) => (
                  <Grid item xs={12} md={6} lg={4} key={index}>
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
                El proceso de Monitoreo Automatizado de Vortic comienza con una consultoría exhaustiva para evaluar tu empresa y entender tus necesidades y requerimientos de datos geoespaciales. Luego, desarrollamos herramientas personalizadas de VorticTools y una versión de VorticAssistant adaptada a tus necesidades. Estas herramientas se integran en tu entorno empresarial para asegurar una funcionalidad completa. Finalmente, implementamos las soluciones y programamos los monitoreos automatizados según tus requerimientos específicos, incluyendo detección de cambios, alertas preventivas, tareas automatizadas y reportes periódicos. Este proceso garantiza una gestión eficiente de tus datos geoespaciales, permitiéndote tomar decisiones informadas sin intervención manual constante.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
