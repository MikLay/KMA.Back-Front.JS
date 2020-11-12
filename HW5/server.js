var http = require("http");
var express = require("express");
const fs = require("fs");

var server = express();
server.listen(8080);
console.log("Server is running on port 8080");

server.use(express.static(__dirname));

server.get("/visits", (req, res) => {
  const data = fs.readFileSync("visits.csv", "UTF-8");
  res.status(200).send({visits: data});
});

server.post("/visits", (req, res) => {
  const data = fs.readFileSync("visits.csv", "UTF-8");
  fs.writeFileSync("visits.csv", parseInt(data) + 1);
  res.status(200);
});

server.get("/", function (req, res) {
  res.sendFile(__dirname + "/client.html");
});
