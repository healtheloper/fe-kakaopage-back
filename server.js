const express = require("express");
const webtoonsData = require("./data/webtoons");
const categoriesData = require("./data/categories");
const genresData = require("./data/genres");

const app = express();
const port = process.env.PORT || 3000;

app.get("/genres", (req, res) => {
  res.send(genresData);
});
app.get("/categories", (req, res) => {
  res.send(categoriesData);
});
app.get("/webtoons", (req, res) => {
  res.send(webtoonsData);
});

app.listen(port, () => {
  console.log(`✅ Back Server Listening on port ${port}`);
  console.log(`  webtoons data → GET /webtoons `);
  console.log(`  categories data → GET /categories `);
  console.log(`  genres data → GET /genres `);
});
