import  express  from "express";
import {addMovie,getAllMovie}  from "../controllers/movie-controller.js"
const movieRouter = express.Router();
movieRouter.get("/", getAllMovie);
movieRouter.post("/", addMovie);

export default movieRouter;