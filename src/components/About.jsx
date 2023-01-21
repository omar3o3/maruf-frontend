import React from "react";
import Typography from "@mui/material/Typography";
import {
  createTheme,
  ThemeProvider,
  styled,
  responsiveFontSizes,
} from "@mui/material/styles";

function About() {

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
      <div id="about-page">
        <div>
          <Typography variant="h2" align="center" style={{ marginTop: "7%" }}>
            About Us
          </Typography>
          <Typography
            align="center"
            variant="h6"
            style={{
              paddingLeft: "3%",
              paddingRight: "3%",
              marginTop: "3%",
              fontWeight: "bold",
            }}
          >
            The Maruf community is a warm and welcoming space that brings
            together young Muslim professionals in New York city who aspire to
            grow spiritually and learn more about their religion in a safe,
            welcoming, and judgment free environment. Many young Muslims find it
            difficult to tackle their problems and by creating a community where
            we focus on these discussions and directly address issues young
            Muslims are faced with daily, we are able to tackle the doubts and
            misunderstandings that may cause doubts within our community. We
            host community events, open faith discussions, volunteering
            opportunities, and much more, all with the hopes of bringing a
            diversified group of young Muslim individuals together and
            strengthening our companionship as a community.
          </Typography>
        </div>
        <div>
          <Typography variant="h2" align="center" style={{ marginTop: "7%" }}>
            Open Faith Discussions
          </Typography>
          <Typography
            align="center"
            variant="h6"
            style={{
              paddingLeft: "3%",
              paddingRight: "3%",
              marginTop: "3%",
              // marginBottom: "10%",
              paddingBottom: "10%",
              fontWeight: "bold",
            }}
          >
            A space where young professionals can learn to spiritually grow and
            establish genuine companionship within a socially accepting
            environment.
          </Typography>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default About;
