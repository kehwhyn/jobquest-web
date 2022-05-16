import React from "react";
import { fireEvent, screen, render } from "@testing-library/react";

import { renderWithRouter } from "../../utility/tests/helpers";

import FastCreationForm from ".";

describe("<FastCreationForm />", () => {
  it("Should render the form", () => {
    const callback = (res) => console.log(res);

    renderWithRouter(
      <FastCreationForm data-testid="fast-creation" onSubmit={callback} />
    );

    expect(screen.getByTestId("fast-creation")).toBeInTheDocument();
  });

  it("should render the form and verify the field's values", () => {
    const fields = {
      name: "Cassius",
      password: "123456",
      confirmPassword: "123456",
      email: "cassiusavila@gmail.com",
    };

    const callback = () => jest.fn();

    const { container } = renderWithRouter(
      <FastCreationForm data-testid="fast-creation" onSubmit={callback} />
    );

    const name = container.querySelector("#name");
    const email = container.querySelector("#email");
    const password = container.querySelector("#password");
    const confirmPassword = container.querySelector("#confirmPassword");
    const isBusinessAccount = container.querySelector("#isBusinessAccount");

    fireEvent.change(name, {
      target: {
        value: fields.name,
      },
    });

    fireEvent.change(email, {
      target: {
        value: fields.email,
      },
    });

    fireEvent.change(password, {
      target: {
        value: fields.password,
      },
    });

    fireEvent.change(confirmPassword, {
      target: {
        value: fields.confirmPassword,
      },
    });

    fireEvent.click(isBusinessAccount);

    expect(name.value).toEqual(fields.name);
    expect(password.value).toEqual(fields.password);
    expect(confirmPassword.value).toEqual(fields.confirmPassword);
    expect(email.value).toEqual(fields.email);
    expect(isBusinessAccount.checked).toEqual(true);
  });
});
