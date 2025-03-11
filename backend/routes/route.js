const express = require("express");

const {
  getHomeData,
  getMovieGenre,
  getTvGenre,
} = require("../controller/Home.controller");

const mainRouter = express.Router();

mainRouter.get("/", getHomeData);
mainRouter.get("/movie/genre", getMovieGenre);
mainRouter.get("/tv/genre", getTvGenre);

exports.mainRouter = mainRouter;
