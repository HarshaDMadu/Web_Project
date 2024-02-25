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
    useEffect (() => {
      getAllMovies()
      .then((data)=>console.log(data))
      .catch((err)=>console.log(err));
    },[])
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
        options={dummyArray.map((option) => option)}
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