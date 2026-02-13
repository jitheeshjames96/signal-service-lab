const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Signal service running");
});

app.listen(3000, () => console.log("Server started"));
