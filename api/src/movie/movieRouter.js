const { Router } = require("express")
const movieRouter = Router()
const {listMovies, addMovie, deleteMovie, deleteMovies, editTitle, editActor} = require("./movieController")
const { tokenCheck } = require("../middleware");

movieRouter.get("/movie/list", listMovies);
movieRouter.post("/movie/add", tokenCheck, addMovie);
movieRouter.delete("/movie/delete", tokenCheck, deleteMovie);
movieRouter.delete("/movie/deleteall", tokenCheck, deleteMovies);
movieRouter.put("/movie/edittitle", tokenCheck, editTitle);
movieRouter.put("/movie/editactor", tokenCheck, editActor);

module.exports = movieRouter