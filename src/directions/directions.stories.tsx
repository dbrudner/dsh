import React from "react";

import { Directions } from "./directions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Directions",
  component: Directions
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Directions {...args} />;

export const Primary = Template.bind({});
