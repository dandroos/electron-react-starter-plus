import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button, Grid } from "@material-ui/core";
import { Home, Github } from "mdi-material-ui";
import PageWrapper from "../components/PageWrapper";
import prosprLogo from "../images/prospr.svg";
const electron = window.require("electron");

const About = () => {
  return (
    <PageWrapper>
      <Box align="center">
        <Typography variant="h1">About this starter</Typography>
        <Typography variant="subtitle1" paragraph>
          This boilerplate is a lot simpler than the standard{` `}
          <strong>electron-react-boilerplate</strong>. It contains some other
          packages and boilerplate code I find useful for Electron and React
          development, such as <strong>Redux</strong>,{" "}
          <strong>Material-UI</strong> and <strong>NeDB</strong>. If it helps
          you out too, that's fantastic! Let me know if it was useful to you by
          giving the repo a star on GitHub!
        </Typography>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Button startIcon={<Home />} to="/" component={Link}>
              Home
            </Button>
          </Grid>
          <Grid item>
            <Button
              startIcon={<Github />}
              onClick={() =>
                electron.shell.openExternal(
                  "https://github.com/dandroos/electron-react-starter-plus"
                )
              }
            >
              Repo
            </Button>
          </Grid>
        </Grid>
        <Box mt={8}>
          <Typography variant="caption" display="block">
            Created by
          </Typography>
          <img
            src={prosprLogo}
            style={{ maxWidth: 200, width: "25%", marginTop: 5 }}
            alt="Prospr Logo"
          />
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default About;
