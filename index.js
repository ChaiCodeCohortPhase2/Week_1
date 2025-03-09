// const express = require('express')
import express from "express";
import dotenv from "dotenv";
import cors from "cors"

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;  //good practice either process.env.PORT(3000) or port 4000

app.get("/", (req, res) => {
  res.send('Cohort!');
}); //it runs on request

app.get("/hitesh", (req, res) => {
    res.send('Hitesh');
  });

app.get("/piyush", (request, response) => {
    response.send("Piyush!")
});

// console.log(process.env.PORT)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});