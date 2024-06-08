import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import TechnologyCard from "../ui/cards/TechnologyCard";
import VorticTechCard from "../ui/cards/VorticTechCard";

export default function page() {
  const technologyList = [
    {
      title: "Inteligencia Artificial (IA)",
      description:
        "Implementamos modelos avanzados de IA para análisis de datos, automatización de procesos y asistencia personalizada a través de Vortic Assistant.",
      key: 0,
    },
    {
      title: "Modelos de Lenguaje de Gran Escala (LLM)",
      description:
        "Utilizamos LLM para interpretar y analizar grandes volúmenes de datos geoespaciales, facilitando la generación de informes detallados y visualizaciones precisas.",
      key: 1,
    },
    {
      title: "Geoinformática",
      description:
        "Aplicamos técnicas de geoinformática para el procesamiento y análisis de datos geoespaciales, asegurando resultados exactos y relevantes.",
      key: 2,
    },
    {
      title: "Visualización de Datos",
      description:
        "Utilizamos herramientas avanzadas de visualización para crear mapas interactivos y gráficos que permiten a los usuarios explorar y entender los datos de manera intuitiva.",
      key: 3,
    },
    {
      title: "Big Data",
      description:
        "Empleamos tecnologías de Big Data para gestionar y analizar grandes conjuntos de datos geoespaciales, proporcionando información procesable en tiempo real. ",
      key: 4,
    },
    {
      title: "Internet de las Cosas (IoT)",
      description:
        "Integramos dispositivos IoT para recopilar datos geoespaciales en tiempo real, permitiendo un monitoreo continuo y la automatización de procesos.",
      key: 5,
    },
  ];
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <img
        src="/imageTechnology.webp"
        alt="Vortic App"
        className="background-image"
      />
      <Container
        sx={{
          mt: {
            xs: '80vh',
            sm: '70vh',
            md: '70vh',
            lg: '70vh',
          }, // Ajustado para evitar excesivo margen superior
          position: "relative",
          zIndex: 1,
          color: "#ffffff",
        }}
      >
        <Grid container spacing={4}>
          {technologyList.map((technology) => (
            <Grid item key={technology.key} xs={12} sm={6} lg={4}>
              <TechnologyCard
                title={technology.title}
                description={technology.description}
              />
            </Grid>
          ))}

          <Grid item xs={12}>
            <Box
              sx={{
                backgroundImage: "url(/imageVorticApp.png)",
             
                marginTop: 4,
                zIndex: 1,
                p: 2,
                marginInline: {
                  xs: 0,
                  sm: 4,
                  md: 8,
                  lg: 12,
                  xl: 16,
                },
                
              }}
            >
              <Typography
                fontWeight={"bold"}
                fontSize={46}
                sx={{
                  color: "#ffffff",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                }}
              >
                VorticApp
              </Typography>
              <Box sx={{ mt: "70vh" }} />
              <Typography
                fontSize={16}
                sx={{
                  color: "#ffffff",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                  textAlign: "justify",
                  paddingInline: {
                    xs: 0,
                    sm: 5,
                    md: 8,
                    lg: 10,
                    xl: 10,
                  },
                }}
              >
                VorticApp es una avanzada herramienta que te permite crear mapas
                personalizados con la ayuda de la inteligencia artificial. Con
                un enfoque especializado en el análisis inteligente de datos
                geoespaciales, podrás realizar una variedad de tareas, desde la
                búsqueda de ubicaciones hasta el cálculo de rutas más eficientes
                y el monitoreo de recursos estratégicos. VorticApp ofrece
                soluciones avanzadas para tus necesidades empresariales,
                permitiéndote descubrir nuevas formas de optimizar tus
                operaciones y tomar decisiones fundamentadas. ¡Aprovecha la
                potente funcionalidad de VorticApp y lleva tu empresa al
                siguiente nivel!
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4}>
                <VorticTechCard
                  title={"VorticApp"}
                  description={
                    "¡Imagina un universo de datos geoespaciales a tu alcance, donde la creación de mapas y el análisis se vuelven experiencias fluidas y enriquecedoras. Bienvenido a Vortic App, donde la inteligencia artificial cobra vida a través de nuestros asistentes inteligentes. Con ellos, explorarás este vasto mundo de información mediante simples conversaciones de chat. En Vortic, cada asistente está meticulosamente entrenado para abordar una amplia gama de escenarios y necesidades. Sumérgete en un viaje donde la creatividad y la tecnología se fusionan para ofrecerte soluciones innovadoras en el análisis de datos geoespaciales y la creación de mapas."
                  }
                  icon={"/vorticAppIcon.svg"}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <VorticTechCard
                  title={"VorticAssistant"}
                  description={[
                    "Un asistente de inteligencia artificial diseñado para realizar análisis de datos geoespaciales utilizando técnicas de LLM (Large Language Models) y herramientas desarrolladas por Vortic. Vortic Assistant se distingue por ofrecer diversas versiones, cada una adaptada a diferentes casos de uso específicos.",
                    <br key="br1" />,
                    "Cada versión de Vortic Assistant está equipada con acceso a fuentes de datos especializadas y herramientas diseñadas para su área de aplicación. Desde la planificación urbana hasta la gestión medioambiental y más allá, Vortic Assistant proporciona una solución precisa y eficaz para diversas necesidades de análisis geoespacial.",
                  ]}
                  icon={"/vorticAssistantIcon.svg"}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <VorticTechCard
                  title={"VorticTools"}
                  description={[
                    "Vortic Tools es un conjunto integral de herramientas desarrolladas por Vortic, diseñadas para simplificar la obtención de información, realizar cálculos geoespaciales y llevar a cabo análisis detallados en el ámbito geoespacial.",
                    <br key="br1" />,
                    "Estas herramientas están meticulosamente diseñadas para proporcionar a los usuarios una experiencia fluida y eficiente en la gestión y comprensión de datos geoespaciales. Desde la recopilación de datos hasta la visualización y el análisis, Vortic Tools abarca todas las etapas del proceso, ofreciendo una amplia gama de funcionalidades adaptadas a diversas necesidades y casos de uso.",
                  ]}
                  icon={"/vorticToolsIcon.svg"}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Box
            
                sx={{
                  backgroundColor: "rgba(0,0,0,0.7)",
                  padding: 4,
                  borderRadius: 4,
                  display: "flex",
                  
                  justifyContent: "center",
                  border: "1px solid #FF5B01",
                  marginInline: {
                    xs: 0,
                    sm: 0,
                    md: 20,
                    lg: 30,
                  },
                }}
            
            >
            <img
              src="/techDiagram.svg"
              alt="Vortic App"
              height={330}
             
            />

            </Box>

           
          </Grid>
          <Grid item xs={12}
            
          >
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
            <Typography
              fontSize={16}
              textAlign={"justify"}
              sx={{ color: "#ffffff" }}
            >
              VorticApp actúa como el centro neurálgico que une a VorticAssistant y VorticTools, facilitando una comunicación sin fisuras
              entre ambas herramientas. Esta sinergia permite a los usuarios
              realizar análisis geoespaciales complejos de manera efectiva y
              tomar decisiones fundamentadas basadas en datos precisos y
              relevantes.
              <br />
              A través de la interfaz de Vortic App, los usuarios
              interactúan con Vortic Assistant, formulando consultas y
              solicitando análisis específicos sobre datos geoespaciales,
              mientras que Vortic App facilita la transmisión de estas
              solicitudes para su procesamiento. Cuando se requieren análisis
              más detallados o cálculos específicos, Vortic Assistant aprovecha
              las capacidades de Vortic Tools, que ofrecen una variedad de
              funciones para el análisis geoespacial. Esta conexión transparente
              entre Vortic Assistant y Vortic Tools, a través de Vortic App,
              permite la ejecución eficiente de los análisis solicitados,
              proporcionando a los usuarios una solución completa y efectiva
              para sus necesidades de análisis geoespacial.
            </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// Vortic es una empresa especializada en el desarrollo de soluciones
// avanzadas para el análisis de datos geoespaciales. Nuestro enfoque
// se centra en la aplicación de tecnologías innovadoras, como la
// inteligencia artificial, los modelos de lenguaje de gran escala y
// la geoinformática, para proporcionar a nuestros clientes
// herramientas poderosas y eficaces que les permitan explorar y
// comprender el mundo que les rodea. Con Vortic, podrás descubrir
// nuevas formas de optimizar tus operaciones, tomar decisiones
// fundamentadas y desbloquear el potencial de tus datos
// geoespaciales de manera eficiente y efectiva. ¡Únete a nosotros en
// esta emocionante aventura y descubre el poder de la inteligencia
// artificial aplicada al análisis de datos geoespaciales!
