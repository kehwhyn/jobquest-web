import styled, { css } from "styled-components";
import * as boxStyles from "../Box/styles";
import { spacing, colors, typography } from "../../assets/config";

const vacancyItemModifiers = {
  movement: () => css`
    transition: transform 0.3s ease-in-out;
  `,
  collapse: (collapsed) =>
    collapsed
      ? css`
          max-height: 165px;
        `
      : css`
          max-height: 100vh;
          ${VacancyDetailsWrapper} {
            overflow: initial;
            height: 100%;
          }
        `,
};

const ActionsWrapperModifiers = {
  left: () => css`
    #match {
      visibility: hidden;
      opacity: 0;
    }
    #dismiss {
      opacity: 0.5;
      transform: translateX(65px) scale(1.1);
    }
  `,
  right: () => css`
    #match {
      opacity: 0.5;
      transform: translateX(-65px) scale(1.1);
    }
    #dismiss {
      visibility: hidden;
      opacity: 0;
    }
  `,
};

export const Wrapper = styled.div`
  margin: 0.8rem 0;
  cursor: ${({ isCollapsed }) => (isCollapsed ? "" : "grab")};
  will-change: transform;
  ${({ inMovement }) => !inMovement && vacancyItemModifiers.movement()}

  ${boxStyles.Wrapper} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${spacing.small};
    padding-bottom: 0;
    margin: 0 ${spacing["x-small"]};
    transition: max-height 0.5s ease-in-out;
    ${({ isCollapsed }) => vacancyItemModifiers.collapse(isCollapsed)}
    width: 300px;
  }
`;
export const MainInfoWrapper = styled.div`
  display: grid;
  grid-template-areas: "info logo";
  grid-template-columns: 2fr 1fr;
  width: 100%;
`;
export const LogoWrapper = styled.div`
  grid-area: logo;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 1rem;
`;
export const Logo = styled.img`
  overflow: hidden;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  max-width: 60px;
  object-fit: cover;
`;
export const VacancyInfo = styled.div`
  display: flex;
  grid-area: info;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-left: 0.5rem;
`;
export const Company = styled.h2`
  font-size: ${typography.large};
  margin-bottom: 0.8rem;
  border-bottom: 4px solid ${colors.button.background.primary};
  text-transform: uppercase;
`;
export const VacancyTitle = styled.h3`
  font-size: ${typography["x-small"]};
  font-weight: 400;
  margin: 0;
`;
export const VacancyDescription = styled.h2`
  font-size: ${typography["x-small"]};
  color: #3e3c3c;
  margin: 1rem 0;
  text-align: left;
  max-width: 300px;
  line-height: 14px;
  font-weight: lighter;
`;

export const VacancyDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
`;

export const SkillsTitle = styled(VacancyTitle)`
  margin: ${typography.medium} 0;
  font-weight: 600;
  border-left: 4px solid ${colors.button.background.primary};
  padding-left: ${spacing["x-small"]};
  font-size: ${typography.medium};
`;

export const SkillsList = styled.ul`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1fr 1fr;
  place-items: center;
`;

export const SkillItem = styled.li`
  list-style: none;
  font-size: ${typography["small"]};
  color: #3e3c3c;
  text-align: center;
  line-height: 14px;
  font-weight: lighter;
`;

export const Question = styled(SkillsTitle)`
  padding-top: ${spacing.medium};
  border: 0;
  padding-left: 0;
  text-align: center;
`;

export const SeeMore = styled.button`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - ${spacing.small});
  cursor: pointer;
  bottom: 0;
  text-align: center;
  background-color: ${colors.button.background.primary};
  color: ${colors.black};
  font-weight: 600;
  border: 0;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: ${spacing["x-small"]} 0;
`;

export const ActionsWrapper = styled.div`
  width: 100%;
  padding: 0.5rem 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${({ direction }) => !!direction && ActionsWrapperModifiers[direction]}
`;

const ActionStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;

export const Action = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  visibility: visible;
  opacity: 1;
  transition: all 0.3s ease-in-out;
`;

export const ActionLabel = styled(VacancyTitle)`
  margin: 0.5rem;
  color: ${colors.mediumgray};
  font-weight: 600;
`;

export const NoSkills = styled(ActionLabel)`
  color: ${colors.mediumgray};
  font-weight: 400;
`;

export const Dismiss = styled(ActionStyled)`
  background-color: ${colors.button.background.secondary};
  color: ${colors.white};
`;
export const Match = styled(ActionStyled)`
  background-color: ${colors.button.background.primary};
  color: ${colors.button.background.secondary};
`;
