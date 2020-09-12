import React from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
import { Box, ThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "./theme";
import Dialogs from "./components/Dialogs";
import Home from "./pages/Home";
import About from "./pages/About";
import UserStories from "./pages/UserStories";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        bgcolor="secondary.main"
        id="window"
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Dialogs />
        <Router>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/userstories" component={UserStories} />
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default connect()(App);
