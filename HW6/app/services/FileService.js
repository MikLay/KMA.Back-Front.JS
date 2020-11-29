"use strict";

const fs = require("fs");

exports.readFile = async (filePath) => {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

exports.writeFile = async (filePath, data) => {
  let dataRaw = JSON.stringify(data);

  return fs.writeFile(filePath, dataRaw, (err) => {
    if (err) throw err;
    return true;
  });
};
