import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Container, Logo, ContainerForgot, ContainerLabel, BackButtonDiv, TransparentButton } from "./styled";
import { GrView } from "react-icons/gr";
import { useAuth } from "../../contexts/auth";

import LogoURL from "../../assets/images/logo-login.png";
import BackButton from "../../components/BackButton";
import ButtonWithIcon from "../../components/ButtonWithIcon";
import InputForm from "../../containers/InputForm";
import redirectByProfile from "../../utility/redirectByProfile";

function Login() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [error, setError] = useState(false);
  const history = useHistory();
  const { signIn } = useAuth();

  async function handleLogin() {
    try {
      const response = await signIn(mail, password);
      redirectByProfile(response.userData.tipo_usuario, history);
    } catch (error) {
      setError(true);
    }
  }

  return (
    <Container>
      <BackButtonDiv>
        <BackButton route="/" />
      </BackButtonDiv>
      <Logo src={LogoURL} />
      
      {error && <h4>Erro de autenticação, verifique e tente novamente!</h4>}
      

      <ContainerLabel>
        Email
      </ContainerLabel>
      <InputForm change={setMail} />
      
      <ContainerLabel>
        Senha
      </ContainerLabel>
      <InputForm
        icon={<GrView />}
        type={type}
        setType={setType}
        change={setPassword}
      />

      <ContainerForgot>
        <TransparentButton >Esqueci minha senha</TransparentButton>
      </ContainerForgot>

      <ButtonWithIcon
        name={"Entrar"}
        execFunction={handleLogin}
      />

      <TransparentButton  
        onClick={() => history.push("/registre-se")}
        align="center"
      >
        Não tenho cadastro
      </TransparentButton>
    
    
    </Container>
  );
}

export default Login;
