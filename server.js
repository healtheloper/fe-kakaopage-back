const express = require("express");
const globalRouter = require("./src/globalRouter");

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  const origins = ["localhost:5500", "https://codesquard-fe-park.github.io"];
  if (origins.includes(req.headers.origin)) {
    res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
  }
  next();
});

app.use("/", globalRouter);

app.listen(port, () => {
  console.log(`✅ Back Server Listening on port ${port}`);
  console.log(`  webtoons data → GET /webtoons `);
  console.log(`  categories data → GET /categories `);
  console.log(`  genres data → GET /genres `);
});
