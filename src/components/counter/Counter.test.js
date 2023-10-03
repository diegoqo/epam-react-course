import Counter from "./Counter";
import { fireEvent, render, screen } from "@testing-library/react";

describe('Tests Counter component', () => {
    it('should render success', () => {
        render(<Counter />)
        expect(screen.getByRole("heading")).toBeTruthy();
    })

    it('should increase the counter accumulator to 1', () => {
        render(<Counter />)
        expect(screen.getByText('0')).toBeInTheDocument()
        fireEvent.click(screen.getByTestId('increment'))
        expect(screen.getByText('1')).toBeInTheDocument()
    })

    it('should decrease the counter accumulator to 1', () => {
        render(<Counter />)
        expect(screen.getByText('0')).toBeInTheDocument()
        fireEvent.click(screen.getByTestId('increment'))
        fireEvent.click(screen.getByTestId('increment'))
        fireEvent.click(screen.getByTestId('decrement'))
        expect(screen.getByText('1')).toBeInTheDocument()
    })

    it('should keep the counter accumulator at 0', () => {
        render(<Counter />)
        expect(screen.getByText('0')).toBeInTheDocument()
        fireEvent.click(screen.getByTestId('decrement'))
        expect(screen.getByText('0')).toBeInTheDocument()
    })
})
