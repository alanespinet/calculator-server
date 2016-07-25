"use strict";

const express = require('express');
var app = express();

app.get("/", (req, res) => {
  res.end("<h1>This is a calculator server</h1>");
});

app.get("/add/:num1/:num2", (req, res) => {
  let result = Number(req.params.num1) + Number(req.params.num2);
  res.end("" + result);
});

app.get("/subs/:num1/:num2", (req, res) => {
  let result = Number(req.params.num1) - Number(req.params.num2);
  res.end("" + result);
});

app.get("/mult/:num1/:num2", (req, res) => {
  let result = Number(req.params.num1) * Number(req.params.num2);
  res.end("" + result);
});

app.get("/div/:num1/:num2", (req, res) => {
  let result = Number(req.params.num1) / Number(req.params.num2);
  res.end("" + result);
});

app.listen(8000, () => console.log("Server listening on port " + 8000));
