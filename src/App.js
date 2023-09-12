import './App.css';
import Counter from "./components/counter/Counter";
import { SearchForm } from "./components/search-form/SearchForm";
import "@fontsource/montserrat";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/400-italic.css";
import { GenreSelect } from "./components/genre-select/GenreSelect";
import React from "react";

export const listGenres = [
    {
    id: '1', name: 'Crime'
    }, {
    id: '2', name: 'Documentary'
    }, {
    id: '3', name: 'Horror'
    }, {
    id: '4', name: 'Comedy'
    }
]

const onSearch = (inputValue) => {
    if(inputValue !== undefined && inputValue !== 0){
        return console.log('El valor ingresado es: '+ inputValue);
    }
}

const onSelect = (event, setGenres) => {
    event.preventDefault();
    const { target: { value } } = event;
    setGenres(value);
};

function App() {
  return (
    <div>
        <h2 className="initialTitle">Epam React Course</h2>
        <hr/>
        <div>
            <header className="header">Counter component</header>
            <Counter/>
        </div><hr/>
        <div>
            <header className="header">SearchForm component</header>
            <SearchForm
                initialQuery="test"
                onSearch={onSearch}
            />
        </div><hr/>
        <div className="containerGenre">
            <header className="header">GenreSelect component</header>
            <GenreSelect listGenres={listGenres} onSelect={onSelect} initialGenre="Crime" />
        </div><hr/>
    </div>
  );
}

export default App;
