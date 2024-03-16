/**
 * True in gird is Not has a bom.
 * If n=1 -> return grid.
 * If n is even -> return a grid full of O's.
 * If n=3, 7, 11, 15.. i.e if n%4==3 -> return grid after detonating once.
 * If n= 5, 9, 13, 17... i.e if n%4==1 -> return grid after detonating twice.
 */

/**
 *
 * @param {Number} rows - The number of rows.
 * @param {Number} cols - The number of cols.
 * @returns {Boolean[][]}
 */
const initGridBoolean = (rows, cols) => {
  const gird = [];
  for (let i = 0; i < rows; i++) {
    gird[i] = [];
    for (let j = 0; j < cols; j++) {
      gird[i][j] = true;
    }
  }

  return gird;
};

/**
 *
 * @param {Boolean[][]} girdBoolean
 * @returns {Boolean[][]}
 */
const nextGirdBoolean = (girdBoolean) => {
  const rows = girdBoolean.length;
  const cols = girdBoolean[0].length;
  const gird = initGridBoolean(rows, cols);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (!girdBoolean[i][j]) continue;
      gird[i][j] = false;
      if (i < rows - 1) gird[i + 1][j] = false;
      if (i > 0) gird[i - 1][j] = false;
      if (j < cols - 1) gird[i][j + 1] = false;
      if (j > 0) gird[i][j - 1] = false;
    }
  }

  return gird;
};

/**
 *
 * @param {Boolean[][]} girdBoolean
 * @returns {String[]}
 */
const convertGirdBooleanToGirdString = (girdBoolean) => {
  return girdBoolean.map((row) => row.map((col) => (col ? "O" : ".")).join(""));
};

/**
 *
 * @param {Number} n
 * @param {String[]} grid
 * @param {Number} c - The number of cols.
 * @param {Number} r - The number of rows.
 */
function bomberMan(n, grid, r, c) {
  if (n <= 1) return grid;
  if (n % 2 === 0) return convertGirdBooleanToGirdString(initGridBoolean(r, c));

  let girdBoolean = grid.map((row) => row.split("").map((col) => col === "O"));

  if (n % 4 === 3) girdBoolean = nextGirdBoolean(girdBoolean);
  if (n % 4 === 1) {
    girdBoolean = nextGirdBoolean(girdBoolean);
    girdBoolean = nextGirdBoolean(girdBoolean);
  }

  return convertGirdBooleanToGirdString(girdBoolean);
}

// const result = bomberMan(
//   181054341,
//   [
//     "O..OO........O..O........OO.O.OO.OO...O.....OOO...OO.O..OOOOO...O.O..O..O.O..OOO..O..O..O....O...O....O...O..O..O....O.O.O.O.....O.....OOOO..O......O.O.....OOO....OO....OO....O.O...O..OO....OO..O...O",
//   ] || ["...", ".O.", "..."],
//   1 || 6,
//   199 || 7
// );

// console.log(result);
