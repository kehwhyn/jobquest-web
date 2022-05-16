import React from "react";
import { fireEvent, screen, render } from "@testing-library/react";

import Button from ".";

describe("<Button />", () => {
  it("should render the medium size by default", () => {
    render(<Button>Login</Button>);

    expect(screen.getByRole("button", { name: /login/i })).toHaveStyle(
      "padding: 0 3.2rem"
    );
  });

  it("should render the large size", () => {
    render(<Button size="large">Sair</Button>);

    expect(screen.getByRole("button", { name: /sair/i })).toHaveStyle(
      "padding: 0 4.8rem"
    );
  });

  it("should render the extra large size", () => {
    render(<Button size="x-large">Visualizar Vagas</Button>);

    expect(
      screen.getByRole("button", { name: /visualizar vagas/i })
    ).toHaveStyle("padding: 0 6.4rem");
  });

  it("should render a darkGrey version and uppercased text with white color", () => {
    render(
      <Button buttonColor="secondary" textColor="white" isUpperCase>
        Login
      </Button>
    );

    expect(screen.getByRole("button", { name: /login/i })).toHaveStyle(
      "background-color: #000000; color: #FFFFFF; text-transform: upperCase "
    );
  });

  it("should render a yellow version without bolded text", () => {
    render(
      <Button buttonColor="primary" isBold="false" textColor="black">
        Login
      </Button>
    );

    expect(screen.getByRole("button", { name: /login/i })).toHaveStyle(
      "background-color: #FFE600; color: #000000 "
    );
  });

  it("should call 'onClick' prop on button click", () => {
    const onClick = jest.fn();

    render(
      <Button
        buttonColor="darkGrey"
        textColor="white"
        isUpperCase
        onClick={onClick}
      >
        click me
      </Button>
    );

    fireEvent.click(screen.getByRole("button", /click me/i));

    expect(onClick).toHaveBeenCalled();
  });
});
