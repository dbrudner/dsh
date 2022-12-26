import React from "react";

import Weather from "./weather";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Weather",
  component: Weather
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Weather {...args} />;

export const Primary = Template.bind({});
