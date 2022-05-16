import Box from ".";
import React from "react";

export default {
  title: "Box",
  component: Box,
  argTypes: {
    children: {
      description: "Content of the box",
    },
    withShadow: {
      description: "Set if the box has box shadow or not",
    },
  },
};

const Template = (args) => <Box {...args} />;

export const Default = Template.bind({});

Default.args = {
  withShadow: true,
  children: <div style={{ padding: "2rem" }}>I'm a box with shadow</div>,
};
