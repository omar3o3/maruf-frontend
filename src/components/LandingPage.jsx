import React from "react";
import Typography from "@mui/material/Typography";
import bgImage from "../images/main-bg.jpg";
import bgImage2 from "../images/bg-pic.png";
import {
  createTheme,
  ThemeProvider,
  styled,
  responsiveFontSizes,
} from "@mui/material/styles";

function LandingPage() {

  let theme = createTheme();

  theme.typography.h6 = {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "3rem",
    },
  };


  return (
    <ThemeProvider theme={theme}>
      <div
        id="landing-page"
        className="container-css"
      >
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
              style={{ marginTop: "5%", fontWeight: "bold" }}
              className="text-content"
            >
              We chose the word "Maruf" to be the name of our community because
              at the core it means something that is well known to be good,
              which is what we strive for. The prophetic teachings, healthy
              social and learning environment, and most importantly the genuine
              companionship developed and experienced at Marut, all goes back to
              our goal which is to create a space that is inclusive of all,
              enjoining and encouraging the good.
            </Typography>
          <Typography variant="h6" style={{ marginTop: "10%" }}>
            Every Tuesday at 7:30
          </Typography>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default LandingPage;
