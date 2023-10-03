import './SearchForm.css';
import React, { useState } from "react";

export const SearchForm = ({initialQuery, onSearch}) => {
    const [inputValue, setInputValue] = useState(initialQuery | '');

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            onSearch(inputValue);
        }
    }
    return(
        <div>
            <div className={'container'}>
                <input
                    placeholder={'What do you want to watch?'}
                    value={initialQuery}
                    onFocus={onSearch(inputValue)}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    className={'input'}
                />
                <button onClick={onSearch(inputValue)} className={'button'}>SEARCH</button>
            </div>
        </div>
    )
}
