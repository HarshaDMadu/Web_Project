import React, { useEffect } from 'react'
import { 
  AppBar, 
  Autocomplete, 
  Toolbar, 
  Box, 
  TextField, 
  Tabs, 
  Tab 
} from "@mui/material";
import MovieIcon from '@mui/icons-material/Movie';
import { useState } from 'react';
import { getAllMovies } from '../api-helpers/API-helpers';
const dummyArray = ["Flash","Batman","Superman"];

const Header = () => {
    const [Value, setValue] = useState(0);
    /*const [Movies, setMovies] = useState([]);
    useEffect (() => {
      getAllMovies()
      .then((data)=>setMovies(data.movies))
      .catch((err)=>console.log(err));
    },[])*/  //Movies Not Defined error !!!!!
  return (
  <AppBar sx={{bgcolor: "#2b2d42"}}>
    <Toolbar>
      <Box width={'20%'}>
          <MovieIcon/>
      </Box>
      <Box width={"30%"} margin={"auto"}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
    //    options={movies && movies.map((option) => option.title)}
        renderInput={(params) => 
          <TextField sx={{input: {color:'white'}}}
          variant='standard'{...params} placeholder="Search Movies" 
          />
        }
      />
      </Box>

      <Box display={'flex'}>
          <Tabs 
          textColor="inherit" 
          indicatorColor="secondary" 
          value={Value} 
          onChange={(e,val)=>setValue(val)}
          >
            <Tab label="Movies"/>
            <Tab label="admin"/>
            <Tab label="Auth"/>
          </Tabs>
      </Box>
    </Toolbar>
  </AppBar>
  );
};

export default Header