import React, { useState } from "react";

import { showNotification } from "../../components/Notification";
import { Container, Card, Logo } from "./styled";
import { strings } from "../../assets/config";
import FastCreationForm from "../../containers/FastCreationForm";
import UserService from "../../services/UserService";
import LogoURL from "../../assets/images/logo.png";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import redirectByProfile from "../../utility/redirectByProfile";

function SignUp() {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { signUp } = useAuth();
  async function _onHandleSubmitSignUp(data) {
    setLoading(true);
    const response = await UserService.signup(data);

    if (response.success) {
      setLoading(false);
      signUp(response.data);
      redirectByProfile(response.data.userData.tipo_usuario, history);
      showNotification(strings.signup.signUpSuccess);
    } else {
      setLoading(false);
      showNotification(response.desc, strings.signup.signUpError, "danger");
    }
  }

  return (
    <Container>
      <Logo src={LogoURL} />
      <Card>
        <FastCreationForm
          onSubmit={(data) => _onHandleSubmitSignUp(data)}
          isLoading={loading}
        />
      </Card>
    </Container>
  );
}

export default SignUp;
