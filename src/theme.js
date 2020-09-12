import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Roboto",
  },
  palette: {
    type: "dark",
    primary: {
      main: "#74b1be",
    },
    secondary: {
      main: "#2f3241",
    },
  },
  props: {
    MuiButton: { color: "primary", variant: "outlined" },
    MuiTextField: { variant: "outlined", margin: "normal" },
  },
});

export default responsiveFontSizes(theme);
