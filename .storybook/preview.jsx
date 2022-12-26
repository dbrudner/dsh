import { ThemeProvider } from "@mui/material";
import { muiTheme } from "../src/mui-theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

const withMuiTheme = (Story) => {
  console.log({ muiTheme });
  return (
    <ThemeProvider theme={muiTheme}>
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withMuiTheme];
