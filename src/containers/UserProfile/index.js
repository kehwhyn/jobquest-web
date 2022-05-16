import React, { useCallback, useEffect, useState } from "react";

import { Container, TopButtons, HeadInformation, HeadColumn } from "./styled";

import PhotoColor from "../../components/PhotoColor";
import RowButtons from "../../components/RowButtons";
import AboutMe from "../../components/AboutMe";
import NavigationBar from "../../components/NavigationBar";
import { useAuth } from "../../contexts/auth";
import UserService from "../../services/UserService";
import { PendingField } from "../../components/AboutMe/styled";

function UserProfile() {
  const [aboutMeDisplay, setAboutMeDisplay] = useState("none");
  const [user, setUser] = useState({});
  const {
    user: {
      userData: { id_usuario },
    },
  } = useAuth();

  const fetchUser = useCallback(async () => {
    const { data } = await UserService.getUserById(id_usuario);
    setUser(data.data);
  }, [id_usuario]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <Container>
      <TopButtons></TopButtons>
      <HeadInformation>
        <PhotoColor color="white" />
        <HeadColumn>
          <h1> {user?.nome} </h1>{" "}
          <h3>
            <PendingField> Preencha sua área de atuação </PendingField>{" "}
          </h3>{" "}
          <h5>
            <PendingField> Preencha seu celular </PendingField>{" "}
          </h5>{" "}
        </HeadColumn>{" "}
      </HeadInformation>
      <RowButtons setAboutMeDisplay={setAboutMeDisplay} />
      <AboutMe display={aboutMeDisplay} user={user} onEditHidden={fetchUser} />
      <NavigationBar whatsPage={"profile"} />{" "}
    </Container>
  );
}

export default UserProfile;
