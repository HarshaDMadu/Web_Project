import { Box, Typography } from "@mui/material";
import React from "react";
import MovieItems from "./Movies/MovieItems";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Box width={"100%"} height={"100%"} margin={"auto"} marginTop={2}>
      <Box width={"90%"} height={"40vh"} margin={"auto"} padding={2}>
        <img
          src="http://www.impawards.com/2021/posters/godzilla_vs_kong_ver19_xlg.jpg"
          alt="Kong"
          width={"100%"}
          height={"100%"}
        />
      </Box>
      <Box padding={5} margin={"auto"}>
        <Typography variant="h4" textAlign={"center"}>
          Latest Releases
        </Typography>
      </Box>
      <Box
        display={"flex"}
        width={"80%"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        margin={"auto"}
      >
        {[1, 2, 3, 4].map((item) => (
          <MovieItems key={item} />
        ))}
      </Box>
      <Box display={"flex"} padding={5} margin="auto" justifyContent={"center"}>
        <button
          LinkComponent={Link}
          to="/Movies"
          variant="outlined"
          sx={{ margin: "auto", color: "#2b2d42" }}
        >
          View All Movies
        </button>
      </Box>
    </Box>
  );
};

export default HomePage;
