import React from "react";
import Typography from "@mui/material/Typography";
import bgImage from "../images/main-bg.jpg";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

function LandingPage() {

const breakpoints = {
  values: {
    xs: 0,
    sm: 0, // Phone
    md: 768, // Tablet/Laptop
    lg: 1500, // Desktop
    xl: 2000,
  },
};

const theme = createTheme({
  breakpoints,
  typography: {
    h5: {
      fontSize: "1.5625rem",
      [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
        fontSize: "0.6785rem",
      },
    },
  },
});


  return (
    // <ThemeProvider theme={theme}>
    <div id="landing-page" className="container-css">
      <div style={{ padding: "5%" }}>
        <Typography
          variant="h1"
        //   style={{ marginTop: "2%" }}
          className="text-content"
        >
          Maruf Community
        </Typography>
        <Typography
          variant="h6"
          style={{ marginTop: "5%" }}
          className="text-content"
        >
          We chose the word "Maruf" to be the name of our community because at
          the core it means something that is well known to be good, which is
          what we strive for. The prophetic teachings, healthy social and
          learning environment, and most importantly the genuine companionship
          developed and experienced at Marut, all goes back to our goal which is
          to create a space that is inclusive of all, enjoining and encouraging
          the good.
        </Typography>
        <Typography variant="h6" style={{marginTop: "10%"}}>Every Tuesday at 7:30</Typography>
      </div>
    </div>
    // </ThemeProvider>

    // <div className="container">
    //   <Typography variant="h1" className="text-on-image">
    //     Maruf Community
    //   </Typography>
    //   {/* <div
    //     className="bg-image"
    //     style={{
    //       backgroundImage: { bgImage },
    //       opacity: 0.5,
    //     }}
    //   /> */}
    //   <img src={bgImage} alt="" style={{ width: "100%", opacity: ".6" }} />
    //   <div className="text-content">
    //     <p>
    //       This is the text content that should not be affected by the opacity of
    //       the background image
    //     </p>
    //   </div>
    // </div>

    // <div className="container" style={{ position: "relative" }}>
    //   <img
    //     src={bgImage}
    //     alt="background"
    //     style={{ opacity: 0.6, width: "100%" }}
    //   />
    //   <div
    //     className="text-content"
    //     style={{
    //       position: "absolute",
    //       color: "black",
    //       top: "50%",
    //       left: "50%",
    //       transform: "translate(-50%, -50%)",
    //     }}
    //   >
    //     {/* <p>This is the text content that should be displayed over the image</p> */}
    //     <Typography variant="h1">Maruf Community</Typography>
    //     <Typography varient="body1">
    //       We chose the word "Maruf" to be the name of our community because at
    //       the core it means something that is well known to be good, which is
    //       what we strive for. The prophetic teachings, healthy social and
    //       learning environment, and most importantly the genuine companionship
    //       developed and experienced at Marut, all goes back to our goal which is
    //       to create a space that is inclusive of all, enjoining and encouraging
    //       the good.
    //     </Typography>
    //   </div>
    // </div>
  );
}

export default LandingPage;
