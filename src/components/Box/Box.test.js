import React from "react";
import { fireEvent, screen, render } from "@testing-library/react";

import Box from ".";

describe("<Box />", () => {
  it("should render the box  without the shadow by default", () => {
    render(<Box data-testid="box">I'm a box</Box>);

    expect(screen.getByTestId("box")).toBeInTheDocument();
  });

  it("should render the box  without the shadow by default", () => {
    render(
      <Box data-testid="box" withShadow>
        I'm a box
      </Box>
    );

    expect(screen.getByTestId("box")).toBeInTheDocument();
    expect(screen.getByTestId("box")).toHaveStyle(
      "box-shadow: 0px 0px 10px rgba(0,0,0,0.25);"
    );
  });
});
