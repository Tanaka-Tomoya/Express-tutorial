const express = require('express')
const app = express();
const hbs = require("hbs")
const fs = require('fs')

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + '/views/partials')
hbs.registerHelper("getCurrentYear", () => {
  return new Date().getFullYear()
})
hbs.registerHelper("uppercase", text => {
  return text.toUpperCase()
})
app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {
  let now = new Date();
  let log = `${now}: ${req.method} ${req.url}`
  console.log(log);
  fs.appendFile('server.log', log + "\n", err => {
    if (err) {
      console.log(err)
    }
  })
  next();
})

app.use((req, res, next) => {
  res.render("maintenance.hbs");
})

app.get("/", (req, res) => {
  res.render("about.hbs", {
    pageTitle: "Home page",
    content: "This is Home.hbs",
  })
});

app.get("/about", (req, res) => { 
  res.render("about.hbs", {
    pageTitle: "About page",
    content: "コンテンツ",
  })
});
app.listen(3000);