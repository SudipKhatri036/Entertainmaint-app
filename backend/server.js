require("dotenv").config();
const express = require("express");
const cors = require("cors");
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
const { mainRouter } = require("./routes/route");
const { listRouter } = require("./routes/listRoute");
const { queryRouter } = require("./routes/queryRoutes");

const port = process.env.PORT || 3000;
const corsOpt = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(express.json());
app.use(cors(corsOpt));

app.use("/", mainRouter);
app.use("/", listRouter);
app.use("/", queryRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
