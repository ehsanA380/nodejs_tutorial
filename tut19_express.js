const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log('data sent by browser=>> '+ req.query.name);
  res.send("Welcome "+req.query.name);
});
app.get("/about", (req, res) => {
  res.send("Hello , This is about page");
});
app.listen(port);
