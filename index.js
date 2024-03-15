"use strict";

const express = require("express");

// Constants
const PORT = 3000;
const HOST = "0.0.0.0";

// App
const app = express();
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/hello", function (req, res) {
  res.status(200).json({ message: "Hello World!" });
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});

/////https://www.youtube.com/watch?v=vm3YfOHf_Cc
