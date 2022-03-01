const express = require("express");
const Genre = require("../enums/Genre");
const Category = require("../enums/Category");
const v2Router = express.Router();

v2Router.get("/", (req, res) => {
  const { categoryId, genreId } = req.query;
  // 데이터 불러오기, 실제로는 DB로 하겠지?
  const dataPath = `../../fakeDB/main/${Category[categoryId]}/${Genre[genreId]}.json`;
  res.send(require(dataPath));
});

module.exports = v2Router;
