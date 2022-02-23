const express = require("express");
const webtoonsData = require("../data/webtoons");
const categoriesData = require("../data/categories");
const genresData = require("../data/genres");

const globalRouter = express.Router();

globalRouter.get("/webtoons", (req, res) => {
  res.send(webtoonsData);
});
globalRouter.get("/genres", (req, res) => {
  res.send(genresData);
});
globalRouter.get("/categories", (req, res) => {
  res.send(categoriesData);
});

module.exports = globalRouter;
