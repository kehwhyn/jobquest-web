import { colors } from "../../assets/config";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.primary};
  height: 100vh;
  overflow: hidden;
`;

const Logo = styled.img`
  background-position: center center;
  width: 280px;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;
`;

export { Container, Card, Logo };
