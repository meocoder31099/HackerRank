class CustomCache {
  data = new Map();

  /** @type {bigint[]} */
  layoutsPerRow = Array(4 + 1).fill(0n);

  constructor() {
    this.layoutsPerRow[0] = 1n; // There is only one way to fill a width of size 0, which is to have nothing noticeable.
    for (
      let withOfWall = 1;
      withOfWall < this.layoutsPerRow.length;
      withOfWall++
    ) {
      for (
        let withOfBlock = 1;
        withOfBlock <= 4 && withOfBlock <= withOfWall;
        withOfBlock++
      ) {
        this.layoutsPerRow[withOfWall] +=
          this.layoutsPerRow[withOfWall - withOfBlock];
      }
    }
  }

  /**
   *
   * @param {String} key
   * @param {*} value
   */
  set(key, value) {
    this.data.set(key, value);
  }

  /**
   *
   * @param {number} withOfWall
   * @returns {bigint}
   */
  getLayoutsPerRow(withOfWall) {
    if (this.layoutsPerRow[withOfWall] === undefined) {
      this.layoutsPerRow[withOfWall] = 0n;
      for (let withOfBlock = 1; withOfBlock <= 4; withOfBlock++) {
        this.layoutsPerRow[withOfWall] +=
          this.layoutsPerRow[withOfWall - withOfBlock];
      }
    }

    return this.layoutsPerRow[withOfWall];
  }

  /**
   *
   * @param {String} key
   * @returns {*}
   */
  get(key) {
    return this.data.get(key);
  }

  /**
   *
   * @param {String} key
   * @returns {Boolean}
   */
  has(key) {
    return this.data.has(key);
  }
}

const cache = new CustomCache();

/**
 *
 * @param {Number} n - Width of the wall.
 * @param {Number} m - Height of the wall.
 * @returns {bigint} The number of valid wall formations modulo (10**9 + 7).
 */
function legoBlocks(n, m) {
  [n, m] = [m, n];
  const modulo = BigInt(10 ** 9 + 7);
  /** @type {bigint[]} */
  const layoutsPerRow = cache.layoutsPerRow;

  if (layoutsPerRow.length - 1 < n) {
    for (
      let withOfWall = layoutsPerRow.length - 1;
      withOfWall <= n;
      withOfWall++
    ) {
      layoutsPerRow[withOfWall] = cache.getLayoutsPerRow(withOfWall);
    }
  }

  /** @type {bigint[]} */
  const totalLayouts = [];
  totalLayouts[0] = 0n;
  const height = BigInt(m);

  for (let idx = 1; idx <= n; idx++) {
    const layouts = layoutsPerRow[idx];
    totalLayouts[idx] = (layouts % modulo) ** height % modulo;
  }

  /** @type {bigint[]} */
  const solidLayout = Array(n + 1).fill(0n);
  solidLayout[1] = 1n;
  for (let withOfWall = 2; withOfWall <= n; withOfWall++) {
    solidLayout[withOfWall] = totalLayouts[withOfWall];
    for (let withOfBlock = 1; withOfBlock < withOfWall; withOfBlock++) {
      solidLayout[withOfWall] -=
        solidLayout[withOfBlock] * totalLayouts[withOfWall - withOfBlock];
    }
    solidLayout[withOfWall] = (solidLayout[withOfWall] % modulo) + modulo;
  }

  return solidLayout[n] % modulo;
}

// legoBlocks(8, 6);

// // @ts-ignore
// var inputString = require("fs").readFileSync("./input.txt", {
//   encoding: "utf-8",
// });

// // @ts-ignore
// inputString = inputString.split("\n");
// // @ts-ignore
// let currentLine = 0;
// function readLine() {
//   return inputString[currentLine++];
// }

// const t = parseInt(readLine().trim(), 10);

// for (let tItr = 0; tItr < t; tItr++) {
//   const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

//   const n = parseInt(firstMultipleInput[0], 10);

//   const m = parseInt(firstMultipleInput[1], 10);

//   const result = legoBlocks(n, m);

//   console.log(result);
// }
