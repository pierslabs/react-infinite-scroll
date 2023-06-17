import { createTheme } from "@mui/material";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#64ffda",
    },
    secondary: {
      main: "#ff4081",
    },
    background: {
      default: "#121212",
      paper: "#212121",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontSize: "3rem",
      fontWeight: 500,
      marginBottom: "1rem",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 500,
      marginBottom: "1rem",
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 500,
      marginBottom: "0.75rem",
    },
    h4: {
      fontSize: "1.75rem",
      fontWeight: 500,
      marginBottom: "0.5rem",
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 500,
      marginBottom: "0.25rem",
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 500,
      marginBottom: "0.25rem",
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
      marginBottom: "1rem",
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      marginBottom: "1rem",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      marginBottom: "0.5rem",
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      marginBottom: "0.5rem",
    },
    button: {
      fontSize: "1rem",
      fontWeight: 500,
      textTransform: "none",
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      marginBottom: "0.25rem",
    },
    overline: {
      fontSize: "0.625rem",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "0.05em",
    },
  },
});

export default darkTheme;
