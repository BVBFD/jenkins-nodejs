"use strict";

const dotenv = require("dotenv");
const express = require("express");
const path = require("path");

dotenv.config();

const { HOST, PORT } = process.env;

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/hello", function (req, res) {
  res.status(200).json({ message: "Hello World!!!!!" });
});

app.get("/test", (req, res) => {
  res.status(200).json({ message: "Test Jenkins Pipeline Hello World!!!!!" });
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
