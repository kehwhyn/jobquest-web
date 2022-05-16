import { colors, spacing } from "../../assets/config";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.primary};
  height: 100vh;
`;

const Logo = styled.img`
  background-position: center center;
  width: 280px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & > button {
    margin: ${spacing["x-small"]};
  }
`;

export { Container, Logo, ButtonWrapper };
