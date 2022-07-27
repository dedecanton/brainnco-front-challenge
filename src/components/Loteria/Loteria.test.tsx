import { render, screen } from "@testing-library/react";
import React from "react";
import Loteria from "./Loteria";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
  useParams: () => ({
    id: "0",
  }),
  useRouteMatch: () => ({ url: "/0" }),
}));

const setState = jest.fn();
const useStateSpy = jest.spyOn(React, "useState");


describe("Loteria component tests", () => {
  beforeEach(() => {
    render(<Loteria />);
  });

  test("Should show spinner by default", () => {
    expect(screen.getByTestId("spinner")).toBeVisible();
  });
});
