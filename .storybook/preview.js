import { ThemeProvider } from "@mui/material";
import { muiTheme } from "../src/mui-theme";
import { initialize, mswDecorator } from "msw-storybook-addon";

// Initialize MSW
initialize();

// Provide the MSW addon decorator globally
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
  return (
    <ThemeProvider theme={muiTheme}>
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withMuiTheme, mswDecorator];
