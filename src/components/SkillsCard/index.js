import React, { Fragment } from "react";
import { Card, Local, Period } from "./styles";

const SkillsCard = ({ nome, instituicao, data_inicio, data_fim }) => {
  return (
    <Card>
      <h4>{nome}</h4>
      {instituicao ? <Local>{instituicao}</Local> : <Fragment />}
      <Period>
        {" "}
        {Intl.DateTimeFormat("pt-br").format(new Date(data_inicio))} -{" "}
        {Intl.DateTimeFormat("pt-br").format(new Date(data_fim))}{" "}
      </Period>
    </Card>
  );
};

export default SkillsCard;
