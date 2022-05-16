import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import { Row } from "./styles";


const ListInputs = ({ onSubmit, campo01, campo02 }) => {
  const [nome, setNome] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');
  const [local, setLocal] = useState('');

  function handleClick(e) {
    e.preventDefault();
    if (nome.length === 0) {
      setNome("");
      return;
    }

    onSubmit({[campo01.value]: nome, [campo02.value]: local, data_inicio: dataInicio, data_fim: dataFim});
  }

  return (
    <div>
        <Row>
          <Input
            className="input"
            placeholder={campo01.label}
            name="nome"
            id="nome"
            type="text"
            required={false}
            onChange={({ target }) => setNome(target.value)}
          />
          <Input
            className="input"
            placeholder={campo02.label}
            name="local"
            id="local"
            type="text"
            required={false}
            onChange={({ target }) => setLocal(target.value)}
          />
        </Row>

        
          <label className={"labelI"}>Data inicial</label>
          <Input
            className="input"
            name="dataInicio"
            id="dataInicio"
            type="date"
            required={false}
            onChange={({ target }) => setDataInicio(target.value)}
          />

          <label className={"labelF"}>Data final</label>
          <Input
            className="input"
            name="dataFim"
            id="dataFim"
            type="date"
            required={false}
            onChange={({ target }) => setDataFim(target.value)}
          />
        <Row>
          <Button
            name="adicionar"
            size="large"
            isUpperCase={false}
            onClick={handleClick}
          >
            ADICIONAR
          </Button>
        </Row>
    </div>
  );
};

export default ListInputs;
