const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const app = express();
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer')
const mongoose = require('mongoose');
const $ = require('jquery');
let pdf = require("html-pdf");
let path = require("path");
let ejs = require("ejs");

app.set('view engine', 'ejs');
app.engine('handlebars', exphbs());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));


mongoose.connect("mongodb+srv://Whitneyrose:Jfkdls246^@cluster0.zxbjs.mongodb.net/rowanDB?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const userSchema = {
  password: String,
};


const User = new mongoose.model("User", userSchema);

app.get("/", function(req, res) {
  res.render("landing")
})

app.get("/Encryption", function(req, res) {
  res.render("Encryption")
})

app.post("/newUser", function(req, res) {
  const newUser = new User({
    password: req.body.password
  })

  newUser.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      res.render("home")
    }
  })
})

app.post("/oldUser", function(req, res) {
  const password = req.body.password;

  User.findOne({
    password: password
  }, function(err, foundUser) {
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        if (foundUser.password === password) {
          res.render("home");
        }
      }

    }
  })
})

app.post("/home", function(req, res){
  res.render("home");
}

app.post("/Charlie", function(req, res) {
  res.render("Charlie")
})

app.post("/Morgan", function(req, res) {
  res.render("Morgan")
})

app.post("/Ford", function(req, res) {
  res.render("Ford")
})

app.post("/Jack", function(req, res) {
  res.render("Jack")
})

app.post("/Jade", function(req, res) {
  res.render("Jade")
})

app.post("/Ivy", function(req, res) {
  res.render("Ivy")
})





app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000.");
});
