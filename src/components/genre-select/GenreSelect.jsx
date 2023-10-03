import React, { useEffect, useState } from "react";
import './GenreSelect.css';
import { Checkbox, FormControl, ListItemText, MenuItem, Select } from "@mui/material";

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
        const initialGenreFiltered = listGenres.find((genres) => genres.name === initialGenre);
        if(initialGenreFiltered) {
            setGenres([initialGenre])
        }
    }, [initialGenre, listGenres]);

    return (
      <div className={'containerGenreSelect'}>
          <div className="subContainerGenreSelect">
              <label id="label-multiple-genres" className={'inputLabel'}>Genre</label>
              <FormControl sx={{ m: 1, width: '100%' }}>
                  <Select
                      className={'selectGenre'}
                      labelId="multiple-checkbox-genres"
                      id="multiple-genres"
                      multiple
                      value={genres}
                      onChange={(e) => onSelect(e, setGenres)}
                      renderValue={(selected) => selected.join(', ') || 'Select genre'}
                      MenuProps={MenuProps}
                      displayEmpty
                  >
                      {listGenres.map((genreInit) => (
                          <MenuItem key={genreInit.id} value={genreInit.name} className={'menuItemGenre'}>
                              <Checkbox checked={genres.includes(genreInit.name)} />
                              <ListItemText primary={genreInit.name} />
                          </MenuItem>
                      ))}
                  </Select>
              </FormControl>
          </div>
      </div>
  )
}
