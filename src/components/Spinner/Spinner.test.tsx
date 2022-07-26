import { render, screen } from "@testing-library/react";
import Spinner from "./Spinner";

describe('Spinner Component Tests', () => {
    test('Should render', () => {
        render(<Spinner />);
        const spinner = screen.getByTestId('spinner')
        expect(spinner).toBeVisible()
    })
})