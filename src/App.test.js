import React from "react";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "./App";

test("item should render", () => {
  render(<App />);
  screen.debug();
});
