import { useState } from "react";
import "./MovieTile.css";
import PropTypes from "prop-types";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const MovieTile = ({ image, name, year, genres, onClickMovieTile }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card className={"cardMovieTile"} l onClick={onClickMovieTile}>
      <CardHeader
        className={"cardHeaderMovieTile"}
        action={
          <IconButton
            data-testid="button-movie-tile"
            aria-label="settings"
            className="buttonMovieTile"
            name={"settings"}
          >
            <MoreVertIcon onClick={handleClick} className="iconMovieTile" />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Edit</MenuItem>
              <MenuItem onClick={handleClose}>Delete</MenuItem>
            </Menu>
          </IconButton>
        }
      />
      <CardMedia
        className={"cardMediaMovieTile"}
        component="img"
        image={image}
        alt="movie"
      />
      <CardContent className={"cardContentInfoMovieTile"}>
        <Box className={"containerInfoMovieTile"}>
          <Typography className={"nameMovieTile"}>{name}</Typography>
          <Typography className={"yearMovieTile"}>{year}</Typography>
        </Box>
        <Box>
          <Typography variant={"h7"} className={"genresMovieTile"}>
            {genres.join(", ")}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

MovieTile.propTypes = {
  /** This property indicates the movie image. It must be sent as a string. */
  image: PropTypes.string,
  /** This property indicates the name of the movie. It must be sent as a string. */
  name: PropTypes.string,
  /** This property indicates the year of the movie. It must be sent as a string.  */
  year: PropTypes.string,
  /** This property indicates the genres of the movie. It must be sent as an array of strings.  */
  genres: PropTypes.array,
  /** This property indicates the function that should be executed in the component's onClick event. */
  onClickMovieTile: PropTypes.func,
};
