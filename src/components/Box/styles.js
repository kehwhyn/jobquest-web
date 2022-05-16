import styled, { css, keyframes } from "styled-components";
import { colors, spacing } from "../../assets/config";

const moveToUp = keyframes`
  from { 
    transform: translateY(100%);
    opacity: 0;
  }

  to { 
    transform: translateY(0)
  }
`;

export const Wrapper = styled.div`
  ${({ withShadow }) => css`
    position: relative;
    background-color: ${colors.white};
    border-radius: 12px;
    overflow: hidden;
    width: min(768px, 95%);
    padding: ${spacing.small} ${spacing.large};
    box-sizing: border-box;
    font-family: Roboto;
    animation: ${moveToUp} 0.5s ease-in-out;
    ${withShadow &&
    css`
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    `};
  `}
`;
