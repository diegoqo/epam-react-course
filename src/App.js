import "./App.css";
import Counter from "./components/counter/Counter";
import { SearchForm } from "./components/search-form/SearchForm";
import "@fontsource/montserrat";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/400-italic.css";
import { GenreSelect } from "./components/genre-select/GenreSelect";
import React from "react";
import { MovieTile } from "./components/movie-tile/MovieTile";
import { SortControl } from "./components/sort-control/SortControl";
import { MovieDetails } from "./components/movie-details/MovieDetails";

export const listGenres = [
  {
    id: "1",
    name: "Crime",
  },
  {
    id: "2",
    name: "Documentary",
  },
  {
    id: "3",
    name: "Horror",
  },
  {
    id: "4",
    name: "Comedy",
  },
];

const onSearch = (inputValue) => {
  if (inputValue !== undefined && inputValue !== 0) {
    return console.log("El valor ingresado es: " + inputValue);
  }
};

const onSelect = (event, setGenres) => {
  event.preventDefault();
  const {
    target: { value },
  } = event;
  setGenres(value);
};

function App() {
  return (
    <div>
      <h2 className="initialTitle">Epam React Course</h2>
      <hr />
      <div>
        <header className="header">Counter component</header>
        <Counter />
      </div>
      <hr />
      <div>
        <header className="header">SearchForm component</header>
        <SearchForm initialQuery="test" onSearch={onSearch} />
      </div>
      <hr />
      <div className="containerGenre">
        <header className="header">GenreSelect component</header>
        <GenreSelect
          listGenres={listGenres}
          onSelect={onSelect}
          initialGenre="Crime"
        />
      </div>
      <hr />
      <div className="containerMovieTile">
        <MovieTile
          image={
            "https://upload.wikimedia.org/wikipedia/en/2/2e/Bohemian_Rhapsody_poster.png"
          }
          name={"Bohemian Rhapsody"}
          genres={["Drama", "Biography", "Music"]}
          year={"2003"}
          onClickMovieTile={() => console.log("hola")}
        />
      </div>
      <div className="containerMovieDetails">
        <MovieDetails
          description={
            "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta)\n" +
            "          are two hit men who are out to retrieve a suitcase stolen from their\n" +
            "          employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also\n" +
            "          asked Vincent to take his wife Mia (Uma Thurman) out a few days later\n" +
            "          when Wallace himself will be out of town. Butch Coolidge (Bruce\n" +
            "          Willis) is an aging boxer who is paid by Wallace to lose his fight.\n" +
            "          The lives of these seemingly unrelated people are woven together\n" +
            "          comprising of a series of funny, bizarre and uncalled-for\n" +
            "          incidents.—Soumitra"
          }
          year={"1994"}
          name={"plp fiction"}
          score={"8.9"}
          genres={["Action & Adventure"]}
          image={
            "https://upload.wikimedia.org/wikipedia/en/2/2e/Bohemian_Rhapsody_poster.png"
          }
          duration={"2h 34min"}
        />
      </div>
      <div className="containerSortControl">
        <SortControl
          handleChangeSort={(e) => console.log("value is:", e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
