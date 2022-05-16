/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Container, ButtonContent, Button } from "./styled";

function RowButtons({ setAboutMeDisplay }) {
  const [color1, setColor1] = useState("border-color");
  const [color2, setColor2] = useState("border-color");
  const [color3, setColor3] = useState("border-color");

  useEffect(() => {
    HandleClick1();
  }, []);

  function HandleClick1() {
    setColor1("yellow-darck");
    setColor2("border-color");
    setColor3("border-color");

    setAboutMeDisplay("block");
  }

  function HandleClick2() {
    setColor1("border-color");
    setColor2("yellow-darck");
    setColor3("border-color");

    setAboutMeDisplay("none");
  }

  function HandleClick3() {
    setColor1("border-color");
    setColor2("border-color");
    setColor3("yellow-darck");

    setAboutMeDisplay("none");
  }

  return (
    <Container>
      <Button onClick={HandleClick1} color={color1}>
        <ButtonContent color={color1}>
          <p>sobre</p>
        </ButtonContent>
      </Button>

      <Button onClick={HandleClick2} color={color2}>
        <ButtonContent color={color2}>
          <p>histórico</p>
        </ButtonContent>
      </Button>

      <Button onClick={HandleClick3} color={color3}>
        <ButtonContent color={color3}>
          <p>configurações</p>
        </ButtonContent>
      </Button>
    </Container>
  );
}

export default RowButtons;
