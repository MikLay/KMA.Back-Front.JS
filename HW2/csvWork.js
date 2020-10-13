"use strict";
const fs = require("fs");

const readStudents = (file) => {
  try {
    const data = fs.readFileSync(file, "UTF-8");

    const lines = data.trim().split(/\r?\n/);

    const Students = [];

    lines.forEach((line) => {
      let col = line.split(";");
      let student = { name: col.shift() };
      student["grades"] = col;
      student["avarage"] = (
        col.reduce((first, second) => parseInt(first) + parseInt(second)) /
        col.length
      ).toPrecision(4);
      Students.push(student);
    });

    return Students;
  } catch (err) {
    console.error(err);
  }
};

const sortStudents = (students, option) => {
  let sorting = null;
  switch (option) {
    case "up":
      sorting = (a, b) => a.avarage - b.avarage;
      break;
    case "down":
      sorting = (a, b) => b.avarage - a.avarage;
      break;
    default:
      sorting = (a, b) => a.avarage - b.avarage;
  }
  return students.sort(sorting);
};

exports.readStudents = readStudents;
exports.sortStudents = sortStudents;
