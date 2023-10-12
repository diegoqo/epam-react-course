import { Box, Typography } from "@mui/material";
import "./MovieDetails.css";
import PropTypes from "prop-types";

export const MovieDetails = ({
  image,
  name,
  genres,
  year,
  score,
  duration,
  description,
}) => {
  return (
    <Box className={"containerMovieDetails"}>
      <Box className={"leftMovieDetails"}>
        <Box className={"imgMovieDetails"} component={"img"} src={image}></Box>
      </Box>
      <Box className={"containerRightMovieDetails"}>
        <Box className={"containerTitleMovieDetails"}>
          <Typography className={"titleMovieDetails"}>
            {name?.toUpperCase()}
          </Typography>
          <Typography className={"scoreMovieDetails"}>{score}</Typography>
        </Box>
        <Typography className={"genresMovieDetails"}>
          {genres?.join(", ")}
        </Typography>
        <Box className={"containerYearHourMovieDetail"}>
          <Typography className={"yearMovieDetails"}>{year}</Typography>
          <Typography className={"timeMovieDetails"}>{duration}</Typography>
        </Box>
        <Typography
          data-testid={"description-movie-details"}
          className={"descriptionMovieDetails"}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

MovieDetails.propTypes = {
  /** This property indicates which image should be rendered in the component. It must be a url like string. */
  image: PropTypes.string,
  /** This property indicates the name that should be rendered in the component. It must be sent as a string. */
  name: PropTypes.string,
  /** This property indicates the list of genres for which the movie applies. It must be sent as an array of strings. */
  genres: PropTypes.array,
  /** This property indicates the year the movie was released. It must be sent as a string. */
  year: PropTypes.string,
  /** This property indicates the score that the movie has. It must be sent as a string. */
  score: PropTypes.string,
  /** This property indicates the length of the movie. It must be sent as a string. */
  duration: PropTypes.string,
  /** This property indicates the description of the movie. It must be sent as a string. */
  description: PropTypes.string,
};
