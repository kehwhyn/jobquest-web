import React from "react";
import ListInputs from "../../components/ListInputs";
import ListSkills from "../ListSkills";

const GroupInput = ({
  campo01,
  campo02,
  onSubmit,
  habilidades,
  experiencias,
}) => {
  function handleSubmit(skill) {
    onSubmit(skill);
  }

  const getValue = (obj) => {
    let value = "";
    Object.keys(obj).forEach((key) => {
      if (!obj[key]) return;
      if (!value) {
        value = obj[key];
        return;
      }
      value = `${value} - ${obj[key]}`;
    });
    return value;
  };

  return (
    <div>
      <ListInputs campo01={campo01} campo02={campo02} onSubmit={handleSubmit} />
      {habilidades?.length > 0 &&
        habilidades.map((habilidade) => (
          <ListSkills
            value={getValue({
              nome: habilidade.nome,
              instituicao: habilidade.instituicao,
              data_inicio: Intl.DateTimeFormat("pt-br").format(
                new Date(habilidade.data_inicio)
              ),
              data_fim: Intl.DateTimeFormat("pt-br").format(
                new Date(habilidade.data_fim)
              ),
            })}
          />
        ))}
      {experiencias?.length > 0 &&
        experiencias.map((experiencia) => (
          <ListSkills
            value={getValue({
              local: experiencia.local,
              funcao: experiencia.funcao,
              data_inicio: Intl.DateTimeFormat("pt-br").format(
                new Date(experiencia.data_inicio)
              ),
              data_fim: Intl.DateTimeFormat("pt-br").format(
                new Date(experiencia.data_fim)
              ),
            })}
          />
        ))}
    </div>
  );
};

export default GroupInput;
