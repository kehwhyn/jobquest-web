import Button from ".";
import React from "react";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    size: {
      description: "Sets the size of the button",
    },
    children: {
      description: "Content of the button",
    },
    onClick: {
      description: "Function called when the button is clicked",
      action: "clicked",
    },
    buttonColor: {
      description: "Sets the button color",
    },
    textColor: {
      description: "Sets the content color",
    },
    isUpperCase: {
      description: "Sets if the content will be showed with uppercase",
    },
    isBold: {
      description: "Sets if the content will be showed with font bolded",
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "Espiar",
};

export const Small = Template.bind({});

Small.args = {
  ...Default.args,
  children: "Sair",
  size: "small",
};

export const LargeWithDarkGrey = Template.bind({});

LargeWithDarkGrey.args = {
  ...Default.args,
  children: "Visualizar Cursos",
  buttonColor: "secondary",
  textColor: "white",
  isBold: true,
  size: "large",
};
