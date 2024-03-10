import React, { useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { AppBar, Autocomplete, Toolbar, Box, TextField } from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import { useState } from "react";
import { getAllMovies } from "../api-helpers/API-helpers";
import { Link } from "react-router-dom";
const dummyArray = ["Flash", "Batman", "Superman"];

const Header = () => {
  const [Value, setValue] = useState(0);

  const [Movies, setMovies] = useState([]);
  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.Movies))
      .catch((err) => console.log(err));
  }, []); 
  
  return (
    <AppBar position="Sticky" sx={{ bgcolor: "#2b2d42" }}>
      <Toolbar>
        <Box width={"20%"}>
          <MovieIcon />
        </Box>
        <Box width={"30%"} margin={"auto"}>
          <Autocomplete
            id="free-solo-demo"
            freeSolo
                options={Movies && Movies.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                sx={{ input: { color: "white" } }}
                variant="standard"
                {...params}
                placeholder="Search Movies"
              />
            )}
          />
        </Box>

        <Box display={"flex"}>
          <Tabs
            textColor="inherit"
            indicatorColor="secondary"
            value={Value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={Link} to="/Movies" label="Movies" /> 
            <Tab LinkComponent={Link} to="/Admin" label="Admin" />
            <Tab LinkComponent={Link} to="/Auth" label="Auth" />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
