import styled, { css } from "styled-components";
import { colors, typography, spacing } from "../../assets/config";
import ReactInputMask from "react-input-mask";

const generateInputStyles = ({ errorMessage, icon }) => {
  const paddingLeft = icon ? spacing["x-large"] : spacing["x-small"];

  return css`
    border-radius: 5px;
    height: 40px;
    width: calc(100% - ${paddingLeft});
    padding-left: ${paddingLeft};
    padding-right: ${spacing["x-small"]};
    margin: ${spacing["x-small"]} auto;
    border: solid ${errorMessage ? colors.red : colors.lightgray} 1px;
    outline: none;
    font-size: ${typography.small};
  `;
};

export const Input = styled.input`
  ${generateInputStyles}
`;

export const MaskedInput = styled(ReactInputMask)`
  ${generateInputStyles}
`;

export const Label = styled.span`
  font-family: Roboto;
  margin-bottom: ${spacing["x-small"]};
  font-size: ${typography.medium};
`;

export const ErrorMessage = styled.div`
  color: ${colors.red};
  font-size: ${typography["x-small"]};
  font-family: Roboto;
`;

export const IconWrapper = styled.div`
  svg {
    color: ${colors.darkgray};
    padding: 18px ${spacing["x-small"]};
    position: absolute;
  }
`;
