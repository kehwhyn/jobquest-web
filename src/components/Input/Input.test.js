import React from "react";
import { fireEvent, screen, render } from "@testing-library/react";

import { FaSistrix } from "react-icons/fa";

import Input from ".";
import { masks } from "../../assets/config";

describe("<Input />", () => {
  it("should render input", () => {
    const { getByPlaceholderText } = {
      ...render(<Input label="Nome" placeholder="Entre seu nome" />),
    };

    expect(getByPlaceholderText(/Entre seu nome/)).toBeInTheDocument();
  });

  it("should render with icon", () => {
    const { getByTestId } = {
      ...render(
        <Input
          label="Pesquisar"
          placeholder="Pesquisar vagas"
          icon={FaSistrix}
          data-testid="search"
        />
      ),
    };

    expect(getByTestId("search-icon")).toBeInTheDocument();
  });

  it("should render with optional", () => {
    const { getByText } = {
      ...render(
        <Input label="Nome" placeholder="Entre seu nome" required={false} />
      ),
    };

    expect(getByText(/(Opcional)/)).toBeInTheDocument();
  });

  it("should render with mask", () => {
    const { getByTestId } = {
      ...render(
        <Input
          label="Telefone residencial"
          placeholder="(99)99999-9999"
          mask={masks["ddd-phone"]}
          data-testid="phone"
          value="51999999999"
        />
      ),
    };

    expect(getByTestId("phone").value).toBe("(51)99999-9999");
  });

  it("should render with mask", () => {
    const { getByTestId } = {
      ...render(
        <Input
          label="Telefone residencial"
          placeholder="(99)99999-9999"
          mask={masks["ddd-phone"]}
          data-testid="phone"
          value="51999999999"
        />
      ),
    };

    expect(getByTestId("phone").value).toBe("(51)99999-9999");
  });

  it("should have max length", () => {
    const { getByTestId } = {
      ...render(
        <Input label="Nome" placeholder="Entre seu nome" maxLength={10} data-testid="name"/>
      ),
    };

    expect(getByTestId("name").maxLength).toBe(10);
  });

  it("should show input error", () => {
    const { getByTestId } = {
      ...render(
        <Input label="Nome" placeholder="Entre seu nome" errorMessage="Preencha para continuar" data-testid="name"/>
      ),
    };

    expect(getByTestId("name-error")).toHaveTextContent("Preencha para continuar");
  });

});


