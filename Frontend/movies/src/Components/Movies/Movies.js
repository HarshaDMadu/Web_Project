import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAllMovies } from "../../api-helpers/API-helpers";
import MovieItems from "./MovieItems";

const Movies = () => {
  const [Movies, setMovies] = useState([]);
  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box margin={"auto"} marginTop={4}>
      <Typography
        margin={"auto"}
        variant="h4"
        padding={2}
        width={"40%"}
        textAlign={"center"}
        bgcolor={"#900C3F"}
        color={"white"}
      >
        All Movies
      </Typography>

      <Box
        // display={"flex"}
        // justifyContent={"center"}
        // flexWrap={"wrap"}
        // margin={"auto"}
        width={"100%"}
        margin={"auto"}
        marginLeft={7}
        marginTop={5}
        display={"flex"}
        justifyContent={"flex-start"}
        flexWrap={"wrap"}
      >
        {Movies &&
          Movies.map((movie, index) => (
            <MovieItems
              id={movie._id}
              title={movie.title}
              posterUrl={movie.posterUrl}
              releaseDate={movie.releaseDate}
              key={index}
            />
          ))}
      </Box>
    </Box>
  );
};

export default Movies;
