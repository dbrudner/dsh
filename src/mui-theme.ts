import { Theme, createTheme } from "@mui/material";

export const muiTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#00ff00"
    },
    secondary: {
      main: "#3b3b3b",
      light: "#313131"
    },
    text: {
      primary: "#f3f3f3",
      secondary: "#13ff00"
    },
    background: {
      paper: "#000000",
      default: "#0c0c0c"
    }
  },
  typography: {
    fontFamily: "'Press Start 2P', sans-serif",
    h1: {
      fontSize: "180px",
      color: "#00ff00"
    },
    h2: {
      fontSize: "90px",
      color: "#00ff00"
    },
    h3: {
      color: "#00ff00"
    },
    h4: {
      color: "#00ff00"
    },
    h5: {
      color: "#00ff00"
    },
    body1: {
      color: "#00ff00"
    }
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#323232",
          boxShadow: "none"
        }
      }
    }
  }
});
