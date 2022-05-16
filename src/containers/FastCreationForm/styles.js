import { Link } from "react-router-dom";
import styled from "styled-components";
import { spacing, typography, colors } from "../../assets/config";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: min(100%, 480px);
  & > fieldset {
    border: 0;
    & > input {
      border-radius: 35px;
      padding-left: 48px;
    }
    & > div > svg {
      padding-left: ${spacing["small"]};
    }
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Subtitle = styled.h2`
  font-size: ${typography.small};
  margin: ${spacing["x-small"]} 0;
  color: ${colors.darkgray};
  font-weight: 300;
`;

export const FieldSet = styled.fieldset`
  width: 100%;
  box-sizing: border-box;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  align-self: flex-end;
  margin-bottom: ${spacing.medium};
  color: ${colors.black};
  font-size: ${typography["x-small"]};
  &:hover {
    text-decoration: underline;
  }
`;
