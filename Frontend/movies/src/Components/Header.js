import React from 'react'
import { AppBar, Autocomplete, Toolbar, Box, TextField, Tabs, Tab } from "@mui/material";
import MovieIcon from '@mui/icons-material/Movie';
const dummyArray = ["Flash","Batman","Superman"];
const Header = () => {
  return (
  <AppBar>
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
        <TextField variant='standard'{...params} label="Search Movies" />}
      />
      </Box>

      <Box display={'flex'}>
          <Tabs >
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