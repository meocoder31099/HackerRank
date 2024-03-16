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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */
/**
 *
 * @param {String} timeString
 * @returns {String}
 */
function timeConversion(timeString) {
  const AMPM = timeString.substring(8);
  let [h, m, s] = timeString.substring(0, 8).split(":");
  if (AMPM === "AM" && h === "12") h = "00";
  else if (AMPM === "PM" && h === "12") h = h;
  else if (AMPM === "PM") h = (parseInt(h) + 12).toString();

  return `${h}:${m}:${s}`;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}
