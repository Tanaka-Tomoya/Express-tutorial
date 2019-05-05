const express = require('express')
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>HogeHoge</h1>");
});

app.get("/about", (req, res) => {
  res.send({
    name: "太郎",
    age: 20
  })
})
app.listen(3000);