"use strict";
const fs = require("fs");

const dictionary = fs
  .readFileSync("Dictionary.txt", "utf8")
  .split(/[\n\r" "]+/gi);
const sorter = (word) => word.toLowerCase().split("").sort().join("");

const anagrams = new Map();

dictionary.forEach((word) => {
  let key = sorter(word);
  if (anagrams.has(key)) {
    anagrams.set(key, anagrams.get(key).concat(word));
  } else {
    anagrams.set(key, [word]);
  }
});

anagrams.forEach((value, key) => {
  if (value.length > 1) console.log(`${key} - ` + value.sort().join(" - "));
});
