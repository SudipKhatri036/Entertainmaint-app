const express = require("express");

const {
  getHomeData,
  getMovieGenre,
  getTvGenre,
} = require("../controller/homeController");

const mainRouter = express.Router();

mainRouter.get("/", getHomeData);
mainRouter.get("/movie/genre", getMovieGenre);
mainRouter.get("/tv/genre", getTvGenre);

exports.mainRouter = mainRouter;
