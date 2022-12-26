import React from "react";

import Clock from "./clock";

export default {
  title: "Clock",
  component: Clock
};

const Template = (args) => <Clock {...args} />;

export const Primary = Template.bind({});
