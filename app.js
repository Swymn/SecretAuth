const express = require("express");
const bodyParser = require("body-parser");

// Models
const { User } = require("./model/User");
const { Post } = require("./model/Post");

// DataBase
const init = require("./database/init");

init.openConnexion();

// Setup App (Express)
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.listen(port, () => {
    console.log("Server started on port " + port);
});