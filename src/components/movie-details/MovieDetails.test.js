import { render, screen } from "@testing-library/react";
import { MovieDetails } from "./MovieDetails";

const propsTest = {
  description:
    "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta)\n" +
    "          are two hit men who are out to retrieve a suitcase stolen from their\n" +
    "          employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also\n" +
    "          asked Vincent to take his wife Mia (Uma Thurman) out a few days later\n" +
    "          when Wallace himself will be out of town. Butch Coolidge (Bruce\n" +
    "          Willis) is an aging boxer who is paid by Wallace to lose his fight.\n" +
    "          The lives of these seemingly unrelated people are woven together\n" +
    "          comprising of a series of funny, bizarre and uncalled-for\n" +
    "          incidents.—Soumitra",
  year: "1994",
  name: "plp fiction",
  score: "8.9",
  genres: ["Action & Adventure"],
  image:
    "https://upload.wikimedia.org/wikipedia/en/2/2e/Bohemian_Rhapsody_poster.png",
};

describe("Tests MovieDetails component", () => {
  it("should render success", () => {
    render(<MovieDetails {...propsTest} />);
    expect(screen.getByText("1994")).toBeTruthy();
    expect(screen.getByText("PLP FICTION")).toBeTruthy();
    expect(screen.getByText("8.9")).toBeTruthy();
    expect(screen.getByTestId("description-movie-details")).toBeTruthy();
  });
});
