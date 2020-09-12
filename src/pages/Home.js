import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Grid, Box, Typography, Button } from "@material-ui/core";
import {
  ElectronFramework,
  Help,
  Information,
  AccountDetails,
} from "mdi-material-ui";

import Spin from "../components/animations/Spin";
import { setWhatsIncludedOpen } from "../state/actions";
import PageWrapper from "../components/PageWrapper";

const Home = ({ dispatch }) => {
  const handleClick = () => {
    dispatch(setWhatsIncludedOpen(true));
  };
  return (
    <PageWrapper>
      <Box id="app" align="center">
        <Spin zoomOnEnter>
          <ElectronFramework color="primary" style={{ fontSize: 180 }} />
        </Spin>
        <Typography variant="h1">Ready?</Typography>
        <Typography paragraph>Let's make something cool!</Typography>
        <Box width="25%" minWidth={300}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button
                fullWidth
                onClick={handleClick}
                startIcon={<Help />}
                size="large"
              >
                What's included?
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                to="/about"
                startIcon={<Information />}
                component={Link}
                size="large"
              >
                About
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                to="/userstories"
                startIcon={<AccountDetails />}
                component={Link}
                size="large"
              >
                User stories
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default connect()(Home);
