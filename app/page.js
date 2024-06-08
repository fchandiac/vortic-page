import {
  useTheme,
  useMediaQuery,
  Container,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(/imageHome.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh",
          alignContent: "center",
          textAlign: "center",
          justifyContent: "center",
          overflow: 'hidden',
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <Grid
          container
          spacing={1}

          direction={"column"}
          color={"#ffffff"}
        >
          <Grid item>
            <Image src="/logoSmall.svg" alt="logo" width={200} height={200} />
          </Grid>
          <Grid item>
            <Typography fontSize={70} fontWeight={'bold'} sx={{ color: "#ffffff", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
              VORTIC
            </Typography>
            <Typography variant="h4" sx={{ color: "#ffffff", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'}}>
              Inteligencia Geoespacial
            </Typography>
          </Grid>
          <Grid item width={{
            xs: "90%",
            sm: "80%",
            md: "70%",
            lg: "60%",
            xl: "40%",
          }}
         alignSelf={'center'} textAlign={'justify'}>
            <Box
              sx={{
                backgroundColor: "rgba(0,0,0,0.5)",
                padding: 3,
                borderRadius: 5,
             
              }}
            >
              <Typography variant="p" sx={{ color: "#ffffff" }} >
                En Vortic, implementamos soluciones de realidad digital e
                inteligencia geoespacial que abarcan una amplia gama de
                aplicaciones y sectores. Desde la planificación urbana hasta la
                gestión medioambiental y más allá, nuestras herramientas y
                servicios están diseñados para ayudar a las empresas a
                comprender mejor su entorno, optimizar sus operaciones y tomar
                decisiones fundamentadas.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
