import React from "react";
import { useHistory } from "react-router-dom";
import LogoURL from "../../assets/images/logo.png";
import Button from "../../components/Button";
import { showNotification } from "../../components/Notification/index";
import { useAuth } from "../../contexts/auth";
import { ButtonWrapper, Container, Logo } from "./styles";

function Welcome() {
  const history = useHistory();
  const { setUser } = useAuth();

  const anonymousAccess = () => {
    setUser({
      userData: {
        tipo_usuario: "anonimo",
      },
    });
    history.push("/demonstracao");
  };

  return (
    <Container>
      <Logo src={LogoURL} />
      <ButtonWrapper>
        <Button
          onClick={() => history.push("/login")}
          size="medium"
          buttonColor="secondary"
          textColor="white"
        >
          Entrar
        </Button>
        <Button
          onClick={anonymousAccess}
          size="medium"
          buttonColor="secondary"
          textColor="white"
        >
          Espiar
        </Button>
        <Button
          onClick={() => history.push("/registre-se")}
          size="medium"
          buttonColor="secondary"
          textColor="white"
        >
          Cadastrar
        </Button>
      </ButtonWrapper>
    </Container>
  );
}

export default Welcome;
