/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { showNotification } from "../../components/Notification";

import { FiSearch } from "react-icons/fi";
import { GoPencil } from "react-icons/go";
import { RiSuitcaseLine } from "react-icons/ri";
import { HiOutlineUsers, HiDotsHorizontal } from "react-icons/hi";
import { Container, ButtonDiv } from "./styled";
import MoreMenu from "../MoreMenu";

import Colors from "../../functions/Colors";
import { useAuth } from "../../contexts/auth";

function NavigationBar({ whatsPage }) {
  const { user: authenticatedUser, signed } = useAuth();
  const { userData } = authenticatedUser;
  const [search, setSearch] = useState("");
  const [applications, setApplications] = useState("");
  const [profile, setProfile] = useState("");
  const [dots, setDots] = useState("");
  const [displayMenu, setDisplayMenu] = useState("none");

  const history = useHistory();

  useEffect(() => {
    if (whatsPage === "search") {
      setSearch(Colors("yellow-darck"));
      setApplications(Colors("grey"));
      setProfile(Colors("grey"));
      setDots(Colors("grey"));
    } else if (whatsPage === "application") {
      setSearch(Colors("grye"));
      setApplications(Colors("yellow-darck"));
      setProfile(Colors("grey"));
      setDots(Colors("grey"));
    } else if (whatsPage === "profile") {
      setSearch(Colors("grey"));
      setApplications(Colors("grey"));
      setProfile(Colors("yellow-darck"));
      setDots(Colors("grey"));
    } else {
      setSearch(Colors("grey"));
      setApplications(Colors("grey"));
      setProfile(Colors("grey"));
      setDots(Colors("yellow-darck"));
    }
  }, []);

  function changeDisplayMenu() {
    if (displayMenu === "none") setDisplayMenu("flex");
    else setDisplayMenu("none");
  }

  return (
    <Container>
      <button
        onClick={() => {
          if (!signed) {
            showNotification(
              "Você precisa estar logado para realizar esta ação",
              "Erro autenticação",
              "warning"
            );
            return;
          }
          if (userData.tipo_usuario === "company") {
            history.push("/cadastrar-vaga");
          } else {
            history.push("/vagas");
          }
        }}
      >
        <ButtonDiv color={search}>
          <h1>
            {" "}
            {userData.tipo_usuario === "company" ? <GoPencil /> : <FiSearch />}
          </h1>
          <h5>
            {userData.tipo_usuario === "company"
              ? "Cadastrar Vaga"
              : "Pesquisar"}
          </h5>
        </ButtonDiv>
      </button>

      <button
        onClick={() => {
          if (!signed) {
            showNotification(
              "Você precisa estar logado para realizar esta ação",
              "Erro autenticação",
              "warning"
            );
            return;
          }
          if (userData.tipo_usuario === "company") {
            history.push("/listar-vagas");
          } else {
            history.push("/aplicacoes");
          }
        }}
      >
        <ButtonDiv color={applications}>
          <h1>
            {" "}
            <RiSuitcaseLine />{" "}
          </h1>
          <h5>
            {userData.tipo_usuario === "company" ? "Ver vagas" : "Aplicações"}
          </h5>
        </ButtonDiv>
      </button>

      <button
        onClick={() => {
          if (!signed) {
            showNotification(
              "Você precisa estar logado para realizar esta ação",
              "Erro autenticação",
              "warning"
            );
            return;
          }
          history.push("/perfil");
        }}
      >
        <ButtonDiv color={profile}>
          <h1>
            {" "}
            <HiOutlineUsers />{" "}
          </h1>
          <h5>Perfil</h5>
        </ButtonDiv>
      </button>

      <button onClick={changeDisplayMenu}>
        <ButtonDiv color={dots}>
          <h1>
            {" "}
            <HiDotsHorizontal />{" "}
          </h1>
          <h5>Mais</h5>
        </ButtonDiv>
      </button>

      <MoreMenu display={displayMenu} changeDisplay={changeDisplayMenu} />
    </Container>
  );
}

export default NavigationBar;
