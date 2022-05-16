import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

export const renderWithRouter = (children) =>
  render(<BrowserRouter>{children}</BrowserRouter>);
