let movieData = [];

let fs = require("fs");
fs.readFile('./movies.json', function(error, data) {
  movieData = JSON.parse(data.toString());
});


const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded(
{extended: true}))
const port = 2900


app.use(function(req, res, next) {
  console.log('request:', req.url,req.body, req.method);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, Authorization, X-Requested-With, Content-Type, Accept, x-token");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  if(req.method === 'OPTIONS') {
      res.end();
  }
  else {
      next();
  }
});


app.get("/movies", (req, res) => {
  res.set("Content-Type", "application/json")
  res.send(movieData)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})