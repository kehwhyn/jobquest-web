import styled, { css } from "styled-components";
import { colors } from "../../assets/config";

const buttonSizes = {
  "xx-small": "0.8rem",
  "x-small": "1.6rem",
  small: "2.4rem",
  medium: "3.2rem",
  large: "4.0rem",
};

const buttonModifiers = {
  "xx-small": () => css`
    height: 30px;
    padding: 0 ${buttonSizes.small};
    width: 3.2rem;
  `,
  "x-small": () => css`
    height: 30px;
    padding: 0 ${buttonSizes.small};
    width: 6.4rem;
  `,
  small: () => css`
    height: 30px;
    padding: 0 ${buttonSizes.small};
    width: 9.6rem;
  `,
  medium: () => css`
    padding: 0 ${buttonSizes.medium};
    width: 12.8rem;
  `,
  large: () => css`
    padding: 0 ${buttonSizes.large};
    width: 16rem;
  `,
};

export const Button = styled.button`
  ${({ buttonColor, textColor, isUpperCase, isBold, size, rounded }) =>
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      border: 0;
      border-radius: ${rounded ? 35 : 10}px;
      height: 40px;
      color: ${colors[textColor]};
      font-weight: ${isBold ? "bold" : "normal"};
      text-transform: ${isUpperCase ? "upperCase" : "none"};
      background-color: ${colors.button.background[buttonColor]};
      overflow: hidden;
      text-overflow: ellipsis;
      transition: background-color 0.3s ease-in-out;
      :hover {
        cursor: pointer;
      }
      ${!!size && buttonModifiers[size]};
    `}
`;
