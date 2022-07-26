import LoteriaDetails from "./LoteriaDetails";
import { fireEvent, render, screen } from "@testing-library/react";

import { act } from "react-dom/test-utils";

const resizeWindow = (width: number, height: number) => {
  window.innerWidth = width;
  window.innerHeight = height;
  window.dispatchEvent(new Event("resize"));
};

const mockLoteria = {
  id: 0,
  nome: "mega-sena",
};
const mockConcurso = {
  id: "415",
  loteria: 0,
  numeros: ["1", "2", "3", "4", "5"],
  data: "2022-07-22T19:32:34.756Z",
};

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("tests LoteriaDetails component", () => {
  beforeEach(() => {
    act(() => {
      resizeWindow(400, 400);
    });
    render(<LoteriaDetails loteria={mockLoteria} concurso={mockConcurso} />);
  });

  test("Should be rendered", () => {
    const LoteriaDetails = screen.getByTestId("LoteriaDetails");
    expect(LoteriaDetails).toBeVisible();
  });

  test("loteria title should be visible", () => {
    const name = screen.getByTestId("loteria-title");
    expect(name).toHaveTextContent("mega-sena");
  });
  test("concurso number should be in document", () => {
    const number = screen.getByText(`nº ${mockConcurso.id}`);
    expect(number).toBeVisible();
  });

  test("Concurso description bold should not be visible", () => {
    const data = new Date(mockConcurso.data).toLocaleDateString("pt-br");
    const element = screen.queryByText(`${mockConcurso.id} - ${data}`);
    expect(element).toBeNull();
  });

  test("Changing select value, should call jest function", async () => {
    fireEvent.change(screen.getByTestId("select"), { target: { value: 2 } });
    expect(mockedUseNavigate).toBeCalled();
  });
});

describe("test in desktop width cases", () => {
  beforeEach(() => {
    render(<LoteriaDetails loteria={mockLoteria} concurso={mockConcurso} />);
    act(() => {
        resizeWindow(1000, 1000);
      });
  });

  test("Concurso description bold should be visible", () => {
    const data = new Date(mockConcurso.data).toLocaleDateString("pt-br");
    const element = screen.queryByText(`${mockConcurso.id} - ${data}`);
    expect(element).toBeVisible();
  });

  test("concurso number should be in null", () => {
    const number = screen.queryByText(`nº ${mockConcurso.id}`);
    expect(number).toBeNull();
  });
});

test("Should show error if not recive loteria", () => {
  render(<LoteriaDetails concurso={mockConcurso} />);
  const text = screen.getByText("Loteria não encontrada");
  expect(text).toBeVisible();
});
test("Should show error if not recive loteria", () => {
  render(<LoteriaDetails loteria={mockLoteria} />);
  const text = screen.getByText("Concurso não encontrado");
  expect(text).toBeVisible();
});
