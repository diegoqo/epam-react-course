import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { SearchForm } from "./SearchForm";

const mockOnSearch = jest.fn();
const setup = () => {
    const utils = render(<SearchForm onSearch={mockOnSearch} initialQuery='initial'/>)
    const input = screen.getByLabelText('searchForm')
    return {
        input,
        ...utils,
    }
}

describe('Tests SearchForm component', () => {
    it('should render success with initialGenre', () => {
        const { input } = setup()
        expect(input.value).toBe('initial')
    })

    it('should render success with change value', () => {
        const {input} = setup()
        fireEvent.change(input, {target: {value: 'sample'}})
        waitFor(() => {
            fireEvent.click(screen.getByTestId('buttonSearch'))
            expect(mockOnSearch).toHaveBeenCalledTimes(1)
            expect(mockOnSearch).toBeCalledWith({value: 'buttonSearch'})
        })
    })

    it('should fire the event when the input value is changed and enter is pressed', () => {
        const {input} = setup()
        fireEvent.change(input, {target: {value: 'sample'}})
        waitFor(() => {
            fireEvent.keyDown(screen.getByTestId('buttonSearch'), {key: 'Enter', code: 'Enter', charCode: 13})
            expect(mockOnSearch).toHaveBeenCalledTimes(1)
            expect(mockOnSearch).toBeCalledWith({value: 'buttonSearch'})
        })
    })


    /* fireEvent.keyDown(domNode, {key: 'Enter', code: 'Enter', charCode: 13}) */
    /*it('should select the Documentary option and call the onSelect function', async () => {
        const onSelectTest = jest.fn();
        render(<GenreSelect listGenres={listGenres} onSelect={onSelectTest}/>)
        fireEvent.click(screen.getByRole("button"))
        waitFor(() => {
            fireEvent.click(screen.getByRole("listbox", {name: 'Documentary'}))
            expect(onSelectTest).toHaveBeenCalledTimes(1)
        }).then(() => expect(screen.getByText('Documentary')).toBeTruthy());
    })*/
})
