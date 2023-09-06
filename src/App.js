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

function App() {
  return (
    <div className="App">
        <h2 style={{textAlign: 'left'}}>Epam React Course</h2>
        <hr/>
        <div>
            <header style={{textAlign: 'center'}}>Counter component</header>
            <Counter/>
        </div><br/><br/><hr/>
        <div>
            <header style={{textAlign: 'center'}}>SearchForm component</header><br/><br/>
            <SearchForm
            />
        </div><br/><br/><hr/>
        <div style={{width: '50%', display: 'inline-flex', flexDirection: 'column'}}>
            <header className={'header'}>GenreSelect component</header><br/><br/>
            <GenreSelect listGenres={listGenres}
            />
        </div><hr/>
    </div>
  );
}

export default App;
