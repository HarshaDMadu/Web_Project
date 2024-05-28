import {
  Box,
  Button,
  Checkbox,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
const labelProps = {
  mt: 1,
  mb: 1,
};

const AddMovie = () => {
  return (
    <div>
      <form>
        <Box
          width={"50%"}
          padding={10}
          margin={"auto"}
          display={"flex"}
          flexDirection={"column"}
          boxShadow={"10px 10px #ccc"}
        >
          <Typography textAlign={"center"} variant="h5" fontFamily={"verdana"}>
            Add New Movie
          </Typography>
          <FormLabel sx={{ labelProps }}>Title</FormLabel>{" "}
          <TextField name="title" variant="standard" margin="normal" />
          <FormLabel sx={{ labelProps }}>Description</FormLabel>{" "}
          <TextField name="description" variant="standard" margin="normal" />
          <FormLabel sx={{ labelProps }}>Poster URL</FormLabel>{" "}
          <TextField name="posterUrl" variant="standard" margin="normal" />
          <FormLabel sx={{ labelProps }}>Release Date</FormLabel>{" "}
          <TextField name="releaseDate" variant="standard" margin="normal" />
          <FormLabel sx={{ labelProps }}>Actors</FormLabel>{" "}
          <Box display={"flex"}>
            <TextField name="actor" variant="standard" margin="normal" />
            <Button>Add</Button>
          </Box>
          <FormLabel> Featured</FormLabel>
          <Checkbox sx={{ mr: "auto" }} />
          <Button
            variant="contained"
            sx={{
              width: "30%",
              margin: "auto",
              bgcolor: "#2b2d42",
              ":hover": { bgcolor: "#121217" },
            }}
          >
            Add New Movie
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default AddMovie;
