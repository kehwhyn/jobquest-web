import React from "react";
import { fireEvent, screen, render } from "@testing-library/react";

import Checkbox from ".";

describe("<Checkbox />", () => {
  it("Should render the checkbox with the an label", () => {
    render(<Checkbox data-testid="checkbox" label="Please, click me!" />);

    expect(screen.getByTestId("checkbox")).toBeInTheDocument();
  });

  it("should render the box and verify if is checked", () => {
    render(<Checkbox data-testid="checkbox" />);

    const checkbox = screen.getByTestId("checkbox");

    fireEvent.click(checkbox);

    expect(checkbox.checked).toEqual(true);
  });
});
