import React, { useEffect, useState } from "react";
import './GenreSelect.css';
import { Checkbox, FormControl, ListItemText, MenuItem, Select } from "@mui/material";
import PropTypes from "prop-types";

const ITEM_HEIGHT = 58;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export const GenreSelect = ({listGenres, onSelect, initialGenre}) => {
    const [genres, setGenres] = useState([]);
    useEffect(() => {
        const initialGenreFiltered = listGenres?.find((genres) => genres.name === initialGenre);
        if(initialGenreFiltered) {
            setGenres([initialGenre])
        }
    }, [initialGenre, listGenres]);

    return (
      <div data-testid='containerGenreSelect' className={'containerGenreSelect'}>
          <div data-testid='subContainerGenreSelect' className="subContainerGenreSelect">
              <label data-testid='labelMultipleGenres' id="label-multiple-genres" className={'inputLabel'}>Genre</label>
              <FormControl data-testid='containerGenreSelect' sx={{ m: 1, width: '100%' }}>
                  <Select
                      data-cy='selectGenreSelect'
                      data-testid='selectGenreSelect'
                      className={'selectGenre'}
                      name={'selectGenre'}
                      labelId="multiple-checkbox-genres"
                      id="multiple-genres"
                      multiple
                      value={genres}
                      onChange={(e) => onSelect(e, setGenres)}
                      renderValue={(selected) => selected.join(', ') || 'Select genre'}
                      MenuProps={MenuProps}
                      displayEmpty
                  >
                      {listGenres?.map((genreInit) => (
                          <MenuItem data-testid={`menuItemGenreSelect${genreInit.name}`} key={genreInit.id} value={genreInit.name} className={'menuItemGenre'}>
                              <Checkbox data-testid={`checkboxGenreSelect${genreInit.name}`} checked={genres.includes(genreInit.name)} />
                              <ListItemText data-testid={`itemGenreSelect${genreInit.name}`} primary={genreInit.name} />
                          </MenuItem>
                      ))}
                  </Select>
              </FormControl>
          </div>
      </div>
  )
}

GenreSelect.propTypes = {
    /**
     * Is this the list of the genres to render
     */
    listGenres: PropTypes.array,
    /**
     * Is this the function for the on changed
     */
    onSelect: PropTypes.func,
    /**
     * Is this the initial value in the component
     */
    initialGenre: PropTypes.string
}


