// const express = require('express')
import express from "express";
import dotenv from "dotenv";
import cors from "cors"

dotenv.config();

const app = express();

app.use(
    cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ['GET', 'POST', 'DELETE', 'OPTIONS'], //not case sensitive
    allowedHeaders: ['Content-Type', 'Authorization'] //case sensitive
})
);

const port = process.env.PORT || 4000;  //good practice either process.env.PORT(3000) or port 4000

app.get("/", (req, res) => { //request accept ____ '/' route
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