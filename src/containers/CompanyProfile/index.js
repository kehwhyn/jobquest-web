import React, { useCallback, useEffect, useState } from "react";

import { Container, TopButtons, HeadInformation, HeadColumn } from "./styles";

import PhotoColor from "../../components/PhotoColor";
import RowButtons from "../../components/RowButtons";
import AboutMeCompany from "../../components/AboutMeCompany";
import NavigationBar from "../../components/NavigationBar";
import { useAuth } from "../../contexts/auth";
import { PendingField } from "../../components/AboutMe/styled";
import CompanyService from "../../services/CompanyService";

function CompanyProfile() {
  const [aboutMeDisplay, setAboutMeDisplay] = useState("none");
  const [company, setCompany] = useState({});
  const {
    user: {
      userData: { id_usuario },
    },
  } = useAuth();

  const fetchCompany = useCallback(async () => {
    const { data } = await CompanyService.getCompanyById(id_usuario);
    setCompany(data.data);
  }, [id_usuario]);

  useEffect(() => {
    fetchCompany();
  }, [fetchCompany]);

  return (
    <Container>
      <TopButtons></TopButtons>
      <HeadInformation>
        <PhotoColor color="white" />
        <HeadColumn>
          {company?.nome ? (
            <h1> {company.nome} </h1>
          ) : (
            <h3>
              <PendingField> Preencha o nome da empresa </PendingField>{" "}
            </h3>
          )}
          <h5>
            {company?.razao_social ? (
              company.razao_social
            ) : (
              <PendingField> Preencha sua razão social </PendingField>
            )}
          </h5>
        </HeadColumn>{" "}
      </HeadInformation>
      <RowButtons setAboutMeDisplay={setAboutMeDisplay} />
      <AboutMeCompany
        display={aboutMeDisplay}
        company={company}
        onEditHidden={fetchCompany}
      />
      <NavigationBar whatsPage={"profile"} />{" "}
    </Container>
  );
}

export default CompanyProfile;
