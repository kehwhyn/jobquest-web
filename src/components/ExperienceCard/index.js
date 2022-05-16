import React from "react";
import { Card, Local, Period } from "./styles";

const ExperienceCard = ({ local, funcao, data_inicio, data_fim }) => {
  return (
    <Card>
      <h4>{funcao}</h4>
      <Local>{local}</Local>
      <Period> {Intl.DateTimeFormat('pt-br').format(new Date(data_inicio))} - {Intl.DateTimeFormat('pt-br').format(new Date(data_fim))} </Period>
    </Card>
  );
};

export default ExperienceCard;
