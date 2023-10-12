import { MovieTile } from "./MovieTile";

export default {
  title: "MovieTile",
  component: MovieTile,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const WithInitialValue = {
  args: {
    image:
      "https://upload.wikimedia.org/wikipedia/en/2/2e/Bohemian_Rhapsody_poster.png",
    name: "Bohemian Rhapsody",
    genres: ["Drama", "Biography", "Music"],
    year: "2003",
    onClickMovieTile: () => console.log("hola"),
  },
};
