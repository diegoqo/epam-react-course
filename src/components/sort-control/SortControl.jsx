import React, { useState } from "react";
import "./SortControl.css";
import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import PropTypes from "prop-types";

export const SortControl = ({
  initialValue = "releaseDate",
  handleChangeSort,
}) => {
  const [sort, setSort] = useState(initialValue);

  const handleChange = (e) => {
    setSort(e.target.value);
    handleChangeSort(e);
  };
  return (
    <Box className={"containerSortControl"}>
      <Typography className={"labelSortControl"}>SORT BY</Typography>
      <Box className={"containerSelectSortControl"}>
        <FormControl fullWidth className={"formSorControl"}>
          <Select
            className={"selectSortControl"}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            data-testid="demo-simple-select"
            value={sort}
            onChange={handleChange}
          >
            <MenuItem
              role={"option"}
              data-testid="release-date-sort-control"
              className={"itemSortControl"}
              value={"releaseDate"}
            >
              Release Date
            </MenuItem>
            <MenuItem
              role={"option"}
              className={"itemSortControl"}
              value={"title"}
            >
              Title
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

SortControl.propTypes = {
  /** This property indicates the initial value for the component. It must be sent as a string. */
  initialValue: PropTypes.string,
  /** This property indicates the function to execute once an option is selected in the component. */
  handleChangeSort: PropTypes.func,
};

SortControl.defaultProps = {
  initialValue: "releaseDate",
};
