/* eslint-disable */
import React, { Fragment, useEffect, useState } from "react";

import { Container, About, Edit, PendingField } from "./styled";

import ButtonWithIcon from "../ButtonWithIcon";
import { EditProfile } from "../../containers";
import ExperienceCard from "../ExperienceCard";
import SkillsCard from "../SkillsCard";
import { SHIFTS } from "../../constants";

function AboutMe({ display, user, onEditHidden }) {
  const [displayAbout, setDisplayAbout] = useState("block");
  const [displayEdit, setDisplayEdit] = useState("none");

  function hideAbout() {
    setDisplayAbout("none");
    setDisplayEdit("block");
  }

  function hideEdit() {
    setDisplayAbout("block");
    setDisplayEdit("none");
    onEditHidden();
  }

  return (
    <Container display={display}>
      <About display={displayAbout}>
        <h1>Quem sou eu?</h1>
        {user?.descricao ? (
          <h4>{user.descricao}</h4>
        ) : (
          <h4>
            <PendingField>Nos fale um pouco sobre você</PendingField>
          </h4>
        )}

        <h1>Minhas habilidades</h1>
        {user?.habilidades?.length > 0 ? (
          user?.habilidades?.map((habilidade) => <SkillsCard {...habilidade} />)
        ) : (
          <h4>
            <PendingField>Preencha suas habilidades</PendingField>
          </h4>
        )}

        <h1>Minhas experiências</h1>
        {user?.experiencias?.length > 0 ? (
          user?.experiencias?.map((experiencia) => (
            <ExperienceCard {...experiencia} />
          ))
        ) : (
          <h4>
            <PendingField>Preencha suas experiências</PendingField>
          </h4>
        )}

        <h1>Meus horários</h1>
        {user?.turnos?.length > 0 ? (
          <h4>{user.turnos.map(shift => SHIFTS.find(({name}) => name === shift).label).join(' - ')}</h4>
        ) : (
          <h4>
            <PendingField>Preencha seus horários</PendingField>
          </h4>
        )}

        <h1>Meus Dados</h1>
        <ul>
          <li>
            <h4>Nome: {user?.nome}</h4>
          </li>
          <li>
            <h4>
              {" "}
              CPF:{" "}
              {user?.cpf_cnpj ? (
                user.cpf_cnpj
              ) : (
                <PendingField>Preencha seu CPF</PendingField>
              )}
            </h4>
          </li>
          <li>
            <h4>E-mail: {user?.mail}</h4>
          </li>
          <li>
            <h4>
              Telefone Residencial:{" "}
              {user?.telefone_casa ? (
                user.telefone_casa
              ) : (
                <PendingField>Preencha seu telefone</PendingField>
              )}
            </h4>
          </li>
          <li>
            <h4>
              Celular:{" "}
              {user?.telefone_celular ? (
                user.telefone_celular
              ) : (
                <PendingField>Preencha seu celular</PendingField>
              )}
            </h4>
          </li>
        </ul>
        <h1>Endereço</h1>
        {user?.cep ? (
          <Fragment>
            <h4>CEP: {user.cep}</h4>
            <h4>
              Rua: {user?.rua} - {user?.numero}/{user?.complemento} -{" "}
              {user?.cidade}{" "}
            </h4>
            <h4>
              Cidade: {user?.cidade}/{user?.uf}
            </h4>
          </Fragment>
        ) : (
          <h4>
            <PendingField>Preencha seu endereço</PendingField>
          </h4>
        )}
        <ButtonWithIcon name="editar perfil" execFunction={hideAbout} />
      </About>

      <Edit display={displayEdit}>
        {user && <EditProfile userData={user} onSubmit={hideEdit} />}
      </Edit>
    </Container>
  );
}

export default AboutMe;
