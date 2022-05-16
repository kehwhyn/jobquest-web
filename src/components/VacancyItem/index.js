import React, { useRef, useEffect, useState } from "react";
import { showNotification } from "../../components/Notification";
import Box from "../Box";
import * as styles from "./styles";
import { setGesturesActions, goToLeft, goToRight } from "./helpers";
import WorkIcon from "@material-ui/icons/Work";
import CloseIcon from "@material-ui/icons/Close";
import MatchService from "../../services/MatchService";
import { useAuth } from "../../contexts/auth";

export default ({ vacancy, disableActions }) => {
  const { user: authenticatedUser } = useAuth();
  const { createMatch } = MatchService;
  const itemRef = useRef(null);
  const [inMovement, handleMovement] = useState(false);
  const [direction, handleDirection] = useState("");
  const [isCollapsed, handleCollapse] = useState(true);
  const [hasMatch, handleMatch] = useState(false);

  const handleAction = async (decision) => {
    if (!authenticatedUser) {
      showNotification(
        "Você precisa estar logado para realizar esta ação",
        "Erro autenticação",
        "warning"
      );
      return;
    }

    decision ? goToLeft(itemRef) : goToRight(itemRef);
    const { data: response } = await createMatch({
      idVaga: vacancy.id_vaga,
      descartado: decision,
    });

    handleMatch(response.data.match);
  };

  useEffect(() => {
    const changeDirection = (dir) => {
      if (direction) {
        dir !== direction && handleDirection(dir);
        return;
      }
      handleDirection(dir);
    };

    const handleVacancyApplication = async (decision) => {
      if (!authenticatedUser) {
        showNotification(
          "Você precisa estar logado para realizar esta ação",
          "Erro autenticação",
          "warning"
        );
        return;
      }

      const { data: response } = await createMatch({
        idVaga: vacancy.id_vaga,
        descartado: decision,
      });
      handleMatch(response.data.match);
    };

    !isCollapsed &&
      !disableActions &&
      setGesturesActions(itemRef, {
        handleMovement,
        changeDirection,
        handleVacancyApplication,
        authenticatedUser,
      });

    if (hasMatch) {
      handleMatch(false);
      showNotification("Parabéns! Seu perfil se encaixa na vaga");
    }
  }, [
    itemRef,
    isCollapsed,
    direction,
    createMatch,
    handleMatch,
    vacancy.id_vaga,
    hasMatch,
    authenticatedUser,
  ]);

  return (
    <>
      <styles.Wrapper
        ref={itemRef}
        inMovement={inMovement}
        isCollapsed={isCollapsed}
      >
        <Box withShadow>
          <styles.MainInfoWrapper>
            <styles.LogoWrapper>
              <styles.Logo
                src={vacancy.img_url}
                alt={`Logo da empresa ${vacancy.empresa}.`}
              />
            </styles.LogoWrapper>
            <styles.VacancyInfo>
              <styles.Company>{vacancy.empresa}</styles.Company>
              <styles.VacancyTitle>
                {vacancy.area}
                <br />
                {vacancy.nome}
              </styles.VacancyTitle>
            </styles.VacancyInfo>
          </styles.MainInfoWrapper>
          <styles.VacancyDetailsWrapper>
            <styles.VacancyDescription>
              {vacancy.descricao}
            </styles.VacancyDescription>

            <styles.SkillsTitle>Habilidades</styles.SkillsTitle>
            {vacancy.habilidades.length ? (
              <styles.SkillsList
                style={{ marginBottom: disableActions && "4rem" }}
              >
                {vacancy.habilidades.map((skill, index) => (
                  <styles.SkillItem key={index}>{skill}</styles.SkillItem>
                ))}
              </styles.SkillsList>
            ) : (
              <styles.NoSkills
                style={{ marginBottom: disableActions && "4rem" }}
              >
                Nenhuma habilidade necessária
              </styles.NoSkills>
            )}
            {!disableActions && (
              <>
                <styles.Question>O que você deseja fazer?</styles.Question>
                <styles.ActionsWrapper direction={inMovement ? direction : ""}>
                  <styles.Action
                    id="dismiss"
                    onClick={() => handleAction(true)}
                  >
                    <styles.Dismiss>
                      <CloseIcon />
                    </styles.Dismiss>
                    <styles.ActionLabel>Descartar</styles.ActionLabel>
                  </styles.Action>
                  <styles.Action id="match" onClick={() => handleAction(false)}>
                    <styles.Match>
                      <WorkIcon />
                    </styles.Match>
                    <styles.ActionLabel>Aplicar</styles.ActionLabel>
                  </styles.Action>
                </styles.ActionsWrapper>
              </>
            )}
          </styles.VacancyDetailsWrapper>
          <styles.SeeMore onClick={() => handleCollapse(!isCollapsed)}>
            {isCollapsed ? "Ver mais +" : "Ver menos -"}
          </styles.SeeMore>
        </Box>
      </styles.Wrapper>
    </>
  );
};
