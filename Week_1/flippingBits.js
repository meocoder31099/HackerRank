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
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

/**
 *
 * @param {Number} n
 * @returns {Number}
 */
function flippingBits(n) {
  // const binary = n.toString(2);
  // const countLeadingZeros = Math.clz32(n);
  // const flipLeadingZeros = Array(
  //   n === 0 ? countLeadingZeros - 1 : countLeadingZeros
  // )
  //   .fill(1)
  //   .join("");
  // const flipBinary = binary
  //   .split("")
  //   .map((e) => (e === "1" ? "0" : "1"))
  //   .join("");
  // const flip = flipLeadingZeros + flipBinary;

  // return parseInt(flip, 2);

  const v = 2 ** 32 - 1;
  return v - n;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine().trim(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const n = parseInt(readLine().trim(), 10);

    const result = flippingBits(n);

    ws.write(result + "\n");
  }

  ws.end();
}
