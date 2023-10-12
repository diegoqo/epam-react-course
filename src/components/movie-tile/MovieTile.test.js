import { act, render, screen } from "@testing-library/react";
import { MovieTile } from "./MovieTile";
import userEvent from "@testing-library/user-event";

const propsTest = {
  image:
    "https://upload.wikimedia.org/wikipedia/en/2/2e/Bohemian_Rhapsody_poster.png",
  name: "Bohemian Rhapsody",
  genres: ["Drama", "Biography", "Music"],
  year: "2003",
};

describe("Tests MovieTile component", () => {
  it("should render success", async () => {
    const onClickTest = jest.fn();
    render(<MovieTile {...propsTest} onClickMovieTile={onClickTest} />);
    expect(screen.getByText("Bohemian Rhapsody")).toBeTruthy();
    expect(screen.getByText("Drama, Biography, Music")).toBeTruthy();
    expect(screen.getByText("2003")).toBeTruthy();
    act(() => {
      userEvent.click(screen.getByTestId("button-movie-tile"));
      expect(onClickTest).toBeCalledTimes(1);
    });
  });
});
