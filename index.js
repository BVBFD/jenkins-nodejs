"use strict";
const dotenv = require("dotenv");
const express = require("express");

dotenv.config();

const { HOST, PORT } = process.env;

const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/hello", function (req, res) {
  res.status(200).json({ message: "Hello World!" });
});

app.get("/test", (req, res) => {
  res.status(200).json({ message: "Test Hello World!!" });
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
