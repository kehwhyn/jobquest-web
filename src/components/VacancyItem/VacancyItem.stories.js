import VacancyItem from ".";
import React from "react";

export default {
  title: "VacancyItem",
  component: VacancyItem,
  argTypes: {
    vacancy: {
      id_vaga: {
        control: "string",
      },
      id_empresa: {
        control: "string",
      },
      id_area: {
        control: "string",
      },
      nome: {
        control: "string",
      },
      quantidade: {
        control: "number",
      },
      endereco: {
        control: "string",
      },
      horario: {
        control: "string",
      },
      descricao: {
        control: "string",
      },
      area: {
        control: "string",
      },
      empresa: {
        control: "string",
      },
      img_url: {
        control: "string",
      },
    },
  },
};

const Template = (args) => (
  <div style={{ maxWidth: "500px" }}>
    <VacancyItem {...args} />
  </div>
);

export const Default = Template.bind({});

const vacancy = {
  id_vaga: 3,
  id_empresa: 12,
  id_area: 1,
  nome: "Desenvolvedor Frontend",
  quantidade: "3",
  descricao:
    "Vaga para desenvolvedor junior. Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.",
  area: "Tecnologia",
  empresa: "Job Quest",
  img_url:
    "https://logodownload.org/wp-content/uploads/2015/05/uber-logo-5-1.png",
  habilidades: ["hahahah", "hahaha", "hahahha", "hahaha"],
};

Default.args = {
  vacancy,
};

export const DisabledActions = Template.bind({});

DisabledActions.args = {
  vacancy,
  disableActions: true,
};
