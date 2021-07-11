const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const app = express();
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer')
const mongoose = require('mongoose');
let pdf = require("html-pdf");
let path = require("path");
let ejs = require("ejs");

app.set('view engine', 'ejs');
app.engine('handlebars', exphbs());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.render("landing")
})

app.get("/home", function(req, res) {
  res.render("home")
})

app.get("/Charlie", function(req, res) {
  res.render("Charlie")
})

app.get("/Morgan", function(req, res) {
  res.render("Morgan")
})

app.get("/Ford", function(req, res) {
  res.render("Ford")
})

app.get("/Jack", function(req, res) {
  res.render("Jack")
})

app.get("/Jade", function(req, res) {
  res.render("Jade")
})

app.get("/Ivy", function(req, res) {
  res.render("Ivy")
})

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000.");
});
