import './SearchForm.css';
import React, { useState } from "react";
import PropTypes from "prop-types";

export const SearchForm = ({initialQuery, onSearch}) => {
    const [inputValue, setInputValue] = useState(initialQuery);

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
                    aria-label='searchForm'
                    placeholder={'What do you want to watch?'}
                    defaultValue={inputValue}
                    onFocus={() => onSearch(inputValue)}
                    onChange={(e) => handleChange(e)}
                    onKeyDown={handleKeyDown}
                    className={'input'}
                />
                <button data-testid='buttonSearch' onClick={() => onSearch(inputValue)} className={'button'}>SEARCH</button>
            </div>
        </div>
    )
}

SearchForm.propTypes = {
    /**
     * Is this the initial query
     */
    initialQuery: PropTypes.string,
    /**
     * Is this the funtion for execute to on change
     */
    onSearch: PropTypes.func,
}

SearchForm.defaultProps = {
    initialQuery: ''
}


