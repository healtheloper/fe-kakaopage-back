const express = require("express");
const globalRouter = require("./src/routers/globalRouter");
const v2Router = require("./src/routers/v2Router");

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  const origins = [
    "http://localhost:3030",
    "http://127.0.0.1:5500",
    "https://codesquard-fe-park.github.io",
    "https://healtheloper.github.io",
  ];
  if (origins.includes(req.headers.origin)) {
    res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
  }
  next();
});

app.use("/", globalRouter);
app.use("/v2", v2Router);

app.listen(port, () => {
  console.log(`✅ Back Server Listening on port ${port}`);
});
