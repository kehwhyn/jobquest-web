import React from "react";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from "../../components/Input";
import Box from "../../components/Box";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import { showNotification } from "../../components/Notification";
import * as styles from "./styles";
import Loader from "../../components/Loader";

export default function ({ onSubmit, isLoading, ...props }) {
  const submit = (event) => {
    event.preventDefault();
    const {
      name: { value: name },
      email: { value: email },
      password: { value: password },
      confirmPassword: { value: confirmPassword },
      isBusinessAccount: { checked: isBusinessAccount },
    } = event.target;

    const payload = {
      name,
      email,
      password,
      confirmPassword,
      isBusinessAccount,
    };

    if (confirmPassword !== password) {
      showNotification(
        "As senhas precisam ser iguais",
        "Erro Cadastro",
        "warning"
      );
      return;
    }

    onSubmit(payload);
    return;
  };
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "initial",
      }}
      {...props}
      withShadow
    >
      <>
        <styles.Container>
          <styles.Subtitle>
            Bem-vindo ao JobQuest oficial <br /> Vamos iniciar o seu cadastro?
          </styles.Subtitle>
        </styles.Container>
        <styles.Form onSubmit={submit}>
          <styles.FieldSet>
            <Input
              icon={PersonOutlineOutlinedIcon}
              name="name"
              id="name"
              placeholder="Seu nome completo"
            />
            <Input
              name="email"
              id="email"
              icon={MailOutlineOutlinedIcon}
              placeholder="Seu e-mail pessoal"
              type="email"
            />
            <Input
              name="password"
              id="password"
              icon={LockOutlinedIcon}
              placeholder="Uma senha segura"
              type="password"
            />
            <Input
              name="confirmPassword"
              id="confirmPassword"
              icon={LockOutlinedIcon}
              placeholder="Confirme a senha"
              type="password"
            />
            <Checkbox
              name="isBusinessAccount"
              id="isBusinessAccount"
              label="Perfil empresarial"
            ></Checkbox>
          </styles.FieldSet>
          <styles.LinkStyled to="/login">
            Se já tem uma conta, <strong>entre aqui!</strong>
          </styles.LinkStyled>
          <Button
            size="large"
            type="submit"
            id="submit"
            style={{ marginBottom: "-36px" }}
            buttonColor="secondary"
            textColor="white"
            isUpperCase
            rounded
          >
            {isLoading ? <Loader size="small" /> : "Continuar"}
          </Button>
        </styles.Form>
      </>
    </Box>
  );
}
