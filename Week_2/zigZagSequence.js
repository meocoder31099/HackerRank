/**
 *
 * @param {String} input
 */
function processData(input) {
  const arr = input
    .split(/\n|\r/)[2]
    .split(" ")
    .map((e) => parseInt(e));

  arr.sort((a, b) => a - b);
  const n = arr.length;
  const end = n - 1;
  const mid = Math.floor(n / 2);
  [arr[mid], arr[end]] = [arr[end], arr[mid]];

  let st = mid + 1;
  let ed = n - 2;
  while (st <= ed) {
    [arr[st], arr[ed]] = [arr[ed], arr[st]];
    st++;
    ed--;
  }
  console.log(arr.join(" "));
}

processData(`1
7
1 2 3 4 5`);

// [1, 2, 3, 7, 5, 6, 4];
