"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */

Object.defineProperties(Array.prototype, {
  count: {
    value: function (query) {
      /* 
        Counts number of occurrences of query in array, an integer >= 0 
        Uses the javascript == notion of equality.
      */
      var count = 0;
      for (const value of this) {
        value === query && count++;
      }
      return count;
    },
  },
});

/**
 *
 * @param {Array<string>} strings
 * @param {Array<string>} queries
 */
function matchingStrings(strings, queries) {
  return queries.map((e) => strings.count(e));
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const stringsCount = parseInt(readLine().trim(), 10);

  let strings = [];

  for (let i = 0; i < stringsCount; i++) {
    const stringsItem = readLine();
    strings.push(stringsItem);
  }

  const queriesCount = parseInt(readLine().trim(), 10);

  let queries = [];

  for (let i = 0; i < queriesCount; i++) {
    const queriesItem = readLine();
    queries.push(queriesItem);
  }

  const res = matchingStrings(strings, queries);

  ws.write(res.join("\n") + "\n");

  ws.end();
}
