/* eslint-disable */
import React, { Fragment, useEffect, useState } from "react";

import { Container, About, Edit, PendingField } from "./styled";

import ButtonWithIcon from "../ButtonWithIcon";
import { useAuth } from "../../contexts/auth";
import UserService from "../../services/UserService";
import EditCompanyProfile from "../../containers/EditCompanyProfile";

function AboutMeCompany({ display, company, onEditHidden }) {
  const [displayAbout, setDisplayAbout] = useState("block");
  const [displayEdit, setDisplayEdit] = useState("none");
  const [name, setName] = useState("");

  function hiddenAbout() {
    setDisplayAbout("none");
    setDisplayEdit("block");
  }

  function hiddenEdit() {
    setDisplayAbout("block");
    setDisplayEdit("none");
    onEditHidden();
  }

  function getPageLink() {
    if((/https:\/\/www./).test(company.url_site)){
      return company.url_site
    } else {
      return `https://www.${company.url_site}`
    }
  }

  return (
    <Container display={display}>
      <About display={displayAbout}>
        <h1>Quem somos?</h1>
        {company?.descricao ? (
          <h4>
            {company.descricao}
          </h4>
        ) : (
          <h4>
            <PendingField>Nos fale um pouco sobre a empresa</PendingField>
          </h4>
        )}

        <h1>Dados da Empresa</h1>
        <ul>
          <li>
            <h4>Nome: {company?.nome}</h4>
          </li>
          <li>
            <h4>
              {" "}
              CNPJ:{" "}
              {company?.cpf_cnpj ? (
                company.cpf_cnpj
              ) : (
                <PendingField>Preencha seu CNPJ</PendingField>
              )}
            </h4>
          </li>
          <li>
            <h4>E-mail: {company?.email ? (
                company.email
              ) : (
                <PendingField>Preencha seu e-mail</PendingField>
              )}</h4>
          </li>
          <li>
            <h4>
              Telefone:{" "}
              {company?.contato?.telefone_casa ? (
                company.contato.telefone_casa 
              ) : (
                <PendingField>Preencha seu telefone</PendingField>
              )}
            </h4>
          </li>
          <li>
            <h4>
              Celular:{" "}
              {company?.contato?.telefone_celular  ? (
                company.contato.telefone_celular 
              ) : (
                <PendingField>Preencha seu celular</PendingField>
              )}
            </h4>
          </li>
          <li>
            <h4>
              Site:{" "}
              {company?.url_site  ? (
                <a href={getPageLink()} target="_blank">
                  {company.url_site}
                </a>
              ) : (
                <PendingField>Preencha seu site</PendingField>
              )}
            </h4>
          </li>
        </ul>
        <h1>Endereço</h1>
        {company?.endereco?.cep ? (
          <Fragment>
            <h4>CEP: {company.endereco?.cep}</h4>
            <h4>
              Rua: {company.endereco?.rua} - {company.endereco?.numero}/{company.endereco?.complemento} -{" "}
              {company.endereco?.cidade}{" "}
            </h4>
            <h4>
              Cidade: {company.endereco?.cidade}/{company.endereco?.uf}
            </h4>
          </Fragment>
        ) : (
          <h4>
            <PendingField>Preencha seu endereço</PendingField>
          </h4>
        )}
        <ButtonWithIcon name="editar perfil" execFunction={hiddenAbout} />
      </About>

      <Edit display={displayEdit}>
        <EditCompanyProfile companyData={company} onSubmit={hiddenEdit} />
      </Edit>
    </Container>
  );
}

export default AboutMeCompany;
