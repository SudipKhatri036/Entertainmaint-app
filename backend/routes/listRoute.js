const express = require("express");
const {
  getLists,
  getListsFromGenre,
  getDataDetail,
} = require("../controller/list.controller");

const listRouter = express.Router();

listRouter.get("/:typeOfData", getLists);
listRouter.get("/discover/:typeOfData", getListsFromGenre);
listRouter.get("/:typeOfData/detail/:id", getDataDetail);

exports.listRouter = listRouter;
