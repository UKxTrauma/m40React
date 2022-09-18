const { Router } = require("express")
const movieRouter = Router()
const {listMovies, addMovie, deleteMovie, deleteMovies, editTitle, editActor} = require("./movieController")

movieRouter.get("/movie/list", listMovies);
movieRouter.post("/movie/add", addMovie);
movieRouter.delete("/movie/delete", deleteMovie);
movieRouter.delete("/movie/deleteall", deleteMovies);
movieRouter.put("/movie/edittitle", editTitle);
movieRouter.put("/movie/editactor", editActor);

module.exports = movieRouter