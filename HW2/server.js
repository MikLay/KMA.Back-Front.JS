var http = require("http");
var express = require("express");
var studentUtills = require("./csvWork");

var server = express();
server.listen(8888);
console.log("Server is running on port 8888");

server.use(express.static(__dirname));

server.set("view engine", "twig");
server.set("views", ".");

server.get("/", function (req, res) {
  let students = studentUtills.readStudents("Students.csv");
  const sortingOption = req.query.sorting;
  if (sortingOption) {
    students = studentUtills.sortStudents(students, sortingOption);
  }
  res.render(__dirname + "/templ.twig", { students: students });
});
