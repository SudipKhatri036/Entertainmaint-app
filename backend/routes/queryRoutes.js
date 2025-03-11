const express = require("express");
const { getDataByQuery } = require("../controller/queryController");

const queryRouter = express.Router();

queryRouter.get("/search/:typeOfData", getDataByQuery);

exports.queryRouter = queryRouter;
