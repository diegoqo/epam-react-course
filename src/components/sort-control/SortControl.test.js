import { render, screen } from "@testing-library/react";
import { SortControl } from "./SortControl";

describe("Tests SortControl component", () => {
  it("should render success", () => {
    const functionTest = jest.fn();
    render(<SortControl handleChangeSort={functionTest} />);
    expect(screen.getByText("SORT BY")).toBeTruthy();
    expect(screen.getByText("Release Date")).toBeTruthy();
  });
});
