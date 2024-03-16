/**
 *
 * @param {number[]} data
 * @param {number[][]} edges
 * @returns {number}
 */
function cutTheTree(data, edges) {
  let minAchievable = Number.MAX_SAFE_INTEGER;
  /** @type {number[][]} */
  const graph = [];
  /** @type {number[]} */
  const sum = [];

  const nodeCut = new Set();
  for (const edge of edges) {
    let [fristNode, sencondNode] = edge;
    fristNode--;
    sencondNode--;
    graph[fristNode]
      ? graph[fristNode].push(sencondNode)
      : (graph[fristNode] = [sencondNode]);
    graph[sencondNode]
      ? graph[sencondNode].push(fristNode)
      : (graph[sencondNode] = [fristNode]);
    sencondNode !== 0 && nodeCut.add(sencondNode);
  }

  /**
   *
   * @param {number} node
   * @param {number} parent
   */
  const dfs = (node, parent) => {
    /** @type {number[][]} */
    const stack = [[node, parent]];
    /** @type {number[][]} */
    const traveledPath = [];

    while (stack.length) {
      const [currentNode, parentNode] = stack.pop();
      // Lưu lại tất cả các cạnh đã thăm dò, được sử dụng để tính tổng số giá trị của các node con của một node.
      traveledPath.push([currentNode, parentNode]);
      if (sum[currentNode] === undefined) sum[currentNode] = data[currentNode];

      for (const childNode of graph[currentNode]) {
        if (childNode !== parentNode) {
          stack.push([childNode, currentNode]);
        }
      }
    }

    // Tính tổng số giá trị của các node con của một node.
    while (traveledPath.length > 1) {
      const [childNode, parentNode] = traveledPath.pop();
      sum[parentNode] += sum[childNode];
    }
  };

  dfs(0, 0);
  const total = sum[0];
  for (const node of nodeCut) {
    const sumNodeTree_1 = total - sum[node];
    const diff = Math.abs(sumNodeTree_1 - sum[node]);
    minAchievable = Math.min(minAchievable, diff);
  }

  // console.log(nodeCut);
  // console.log(graph);
  // console.log(sum);
  // console.log(minAchievable);
  return minAchievable;
}

// cutTheTree(
//   [100, 200, 100, 500, 100, 600],
//   [
//     [1, 2],
//     [2, 3],
//     [2, 5],
//     [4, 5],
//     [5, 6],
//   ]
// );

// cutTheTree(
//   [205, 573, 985, 242, 830, 514, 592, 263, 142, 915],
//   [
//     [2, 8],
//     [10, 5],
//     [1, 7],
//     [6, 9],
//     [4, 3],
//     [8, 10],
//     [5, 1],
//     [7, 6],
//     [9, 4],
//   ]
// );

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

// const n = parseInt(readLine().trim(), 10);

// const data = readLine()
//   .replace(/\s+$/g, "")
//   .split(" ")
//   .map((dataTemp) => parseInt(dataTemp, 10));

// let edges = Array(n - 1);

// for (let i = 0; i < n - 1; i++) {
//   edges[i] = readLine()
//     .replace(/\s+$/g, "")
//     .split(" ")
//     .map((edgesTemp) => parseInt(edgesTemp, 10));
// }

// const result = cutTheTree(data, edges);
// console.log(result);
