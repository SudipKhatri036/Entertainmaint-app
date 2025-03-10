const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const {
  getHomeData,
  getTvGenre,
  getMovieGenre,
} = require("./controller/Home.controller");
const {
  getLists,
  getListsFromGenre,
  getDataDetail,
} = require("./controller/list.controller");

const port = process.env.PORT || 3000;
const corsOpt = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOpt));

app.get("/", getHomeData);
app.get("/movie/genre", getMovieGenre);
app.get("/tv/genre", getTvGenre);
app.get("/:typeOfData", getLists);
app.get("/discover/:typeOfData", getListsFromGenre);
app.get("/:typeOfData/detail/:id", getDataDetail);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
