/**
 *
 * @param {string[]} unsorted
 * @returns {bigint[]}
 */
function bigSorting(unsorted) {
  const sorted = unsorted
    .map((string) => BigInt(string))
    .sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));

  return sorted;
}

// bigSorting(["31415926535897932384626433832795", "1", "3", "10", "3", "5"]);
