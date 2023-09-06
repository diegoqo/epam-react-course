import './SearchForm.css';
import React, { useState } from "react";

export const SearchForm = ({initialQuery}) => {
    const [inputValue, setInputValue] = useState(initialQuery | '');

    const onSearch = () => {
        if(inputValue !== undefined && inputValue !== 0){
            return console.log('El valor ingresado es: '+ inputValue);
        }
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            onSearch();
        }
    }
    return(
        <div>
            <div className={'container'}>
                <input
                    placeholder={'What do you want to watch?'}
                    value={initialQuery}
                    onFocus={onSearch}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    className={'input'}
                />
                <button onClick={onSearch} className={'button'}>SEARCH</button>
            </div>
        </div>
    )
}
