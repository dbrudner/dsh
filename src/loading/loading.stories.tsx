import React from "react";

import { Loading } from "./loading";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Loading",
  component: Loading
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Loading {...args} />;

export const Primary = Template.bind({});
