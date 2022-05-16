import React from "react";
import Input from ".";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { masks } from "../../assets/config";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    label: {
      description: "Sets the label of the input",
    },
    placeholder: {
      description: "Sets the placeholder of the input",
    },
    value: {
      description: "Sets the value of the input",
    },
    maxLength: {
      description: "Sets the max length of the input",
    },
    required: {
      description: "Sets if the input is required. Default is true.",
    },
    disabled: {
      description: "Sets if the input is disabled. Default is false.",
    },
    type: {
      description: "Sets the input type. Default is text.",
    },
    icon: {
      description: "Sets the input icon",
    },
    onBlur: {
      description: "Function called when the input is blurred",
      action: "blurred",
    },
    onChange: {
      description: "Function called when the input is changed",
      action: "changed",
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "Nome",
  placeholder: "Entre seu nome completo",
  type: "text",
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  label: "Pesquise por vagas",
  placeholder: "Analista de sistemas, desenvolvimento de software...",
  icon: SearchOutlinedIcon,
  type: "text",
};

export const Optional = Template.bind({});

Optional.args = {
  label: "Telefone residencial",
  placeholder: "(99)99999-9999",
  required: false,
};

export const WithPhoneMask = Template.bind({});

WithPhoneMask.args = {
  label: "Telefone residencial",
  placeholder: "(99)99999-9999",
  mask: masks["ddd-phone"],
};

export const WithMaxLength = Template.bind({});

WithMaxLength.args = {
  label: "Nome",
  placeholder: "Máximo de 10 dígitos",
  maxLength: 10,
};

export const Filled = Template.bind({});

Filled.args = {
  label: "Nome",
  value: "Eduardo Coudet",
  placeholder: "Entre seu nome",
};

export const WithError = Template.bind({});

WithError.args = {
  label: "Nome",
  placeholder: "Entre seu nome",
  errorMessage: "Preencha para continuar",
};
