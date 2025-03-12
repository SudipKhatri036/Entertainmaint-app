const express = require("express");
const {
  addToBookmark,
  getBookmark,
} = require("../controller/bookmarkController");
const bookmarkRouter = express.Router();

bookmarkRouter.post("/bookmark", addToBookmark);
bookmarkRouter.get("/bookmark/getBookmark", getBookmark);

exports.bookmarkRouter = bookmarkRouter;
