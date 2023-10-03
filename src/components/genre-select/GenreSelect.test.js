import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { GenreSelect } from "./GenreSelect";
import { listGenres } from "../../App";

describe('Tests GenreSelect component', () => {
    it('should render success with initialGenre', () => {
        render(<GenreSelect listGenres={listGenres} initialGenre={'Crime'} onSelect={jest.fn()}/>)
        expect(screen.getByText("Genre")).toBeTruthy();
        expect(screen.getByText("Crime")).toBeTruthy();
    })

    it('should select the Documentary option and call the onSelect function', async () => {
        const onSelectTest = jest.fn();
        render(<GenreSelect listGenres={listGenres} onSelect={onSelectTest}/>)
        fireEvent.click(screen.getByRole("button"))
        waitFor(() => {
            fireEvent.click(screen.getByRole("listbox", {name: 'Documentary'}))
            expect(onSelectTest).toHaveBeenCalledTimes(1)
            expect(onSelectTest).toBeCalledWith({value: 'Documentary'})
        }).then(() => expect(screen.getByText('Documentary')).toBeTruthy());
    })
})
