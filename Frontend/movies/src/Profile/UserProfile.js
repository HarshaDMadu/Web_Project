import React, { Fragment, useEffect, useState } from "react";
import { getUserBooking } from "../api-helpers/API-helpers";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DeleteIcon from "@mui/icons-material/Delete";

const UserProfile = () => {
  const [bookings, setBookings] = useState();
  useEffect(() => {
    getUserBooking()
      .then((res) => setBookings(res.bookings))
      .catch((err) => console.log(err));
  }, []);
  console.log("data");
  console.log(bookings);
  return (
    <Box width={"100%"} display="flex">
      {bookings && bookings.length > 0 && (
        <Fragment>
          {" "}
          <Box
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"30%"}
          >
            <AccountCircleIcon
              sx={{ fontSize: "20rem", textAlign: "center", ml: 3 }}
            />
            <Typography
              padding={1}
              width={"auto"}
              textAlign={"center"}
              border={"1px solid #ccc"}
              borderRadius={6}
              marginLeft={3}
            >
              Name: {bookings[0].user.name}
            </Typography>
            <Typography
              padding={1}
              width={"auto"}
              textAlign={"center"}
              border={"1px solid #ccc"}
              borderRadius={6}
              marginLeft={3}
            >
              Email: {bookings[0].user.email}
            </Typography>
          </Box>
          <Box width={"70%"} display={"flex"} flexDirection={"column"}>
            <Typography
              variant="h3"
              fontFamily={"verdanana"}
              textAlign={"center"}
              padding={2}
            >
              Bookings
            </Typography>
            <Box
              margin={"auto"}
              display={"flex"}
              fontDirection={"column"}
              width={"80%"}
            >
              <List>
                {bookings.map((booking, index) => (
                  <ListItem
                    sx={{
                      bgcolor: "#00d386",
                      color: "white",
                      textAlign: "center",
                      margin: 1,
                    }}
                  >
                    <ListItemText
                      sx={{ margin: 1, width: "auto", textAlign: "left" }}
                    >
                      Movie: {booking.movie.title}
                    </ListItemText>
                    <ListItemText
                      sx={{ margin: 1, width: "auto", textAlign: "left" }}
                    >
                      Seat: {booking.seatNumber}
                    </ListItemText>
                    <ListItemText
                      sx={{ margin: 1, width: "auto", textAlign: "left" }}
                    >
                      Date: {new Date(booking.date).toDateString()}
                    </ListItemText>
                    <IconButton color="error">
                      <DeleteIcon />
                    </IconButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Fragment>
      )}
    </Box>
  );
};

export default UserProfile;
