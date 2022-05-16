import FastCreationForm from ".";
import React from "react";

export default {
  title: "FastCreationForm",
  component: FastCreationForm,
  argTypes: {
    onSubmit: {
      action: (e) => console.log(e),
    },
  },
};

const Template = (args) => <FastCreationForm {...args} />;

export const Default = Template.bind({});
