const express = require('express')
const app = express();
const hbs = require("hbs")

app.set("view engine", "hbs");

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
  res.render("about.hbs", {
    pageTitle: "Home page",
    content: "This is Home.hbs",
    currentYear: new Date().getFullYear()
  })
});

app.get("/about", (req, res) => { 
  res.render("about.hbs", {
    pageTitle: "About page",
    content: "コンテンツ",
    currentYear: new Date().getFullYear()
  })
});
app.listen(3000);