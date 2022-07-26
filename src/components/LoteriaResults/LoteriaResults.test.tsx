import { render, screen } from "@testing-library/react";
import LoteriaResults from "./LoteriaResults";

const mockConcurso = {
  id: "415",
  loteria: 0,
  numeros: ["1", "2", "3", "4", "5"],
  data: "2022-07-22T19:32:34.756Z",
};

describe("LoteriaResults tests", () => {
  beforeEach(() => {
    render(<LoteriaResults concurso={mockConcurso} />);
  });
  test("Should be rendered", () => {
    const LoteriaResults = screen.getByTestId("LoteriaResults");
    expect(LoteriaResults).toBeVisible();
  });

  test('LoteriaText should be visible', () => {
    const text = screen.getByText('Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.')
    expect(text).toBeVisible()
  })

  test('LoteriaText should be visible', () => {
    mockConcurso.numeros.forEach(number => expect(screen.getByText(number)).toBeVisible())
  })
});

test("Should show error if not recive concurso", () => {
    render(<LoteriaResults concurso={undefined}/>);
    const text = screen.getByText("Concurso não encontrado");
    expect(text).toBeVisible();
  });
  