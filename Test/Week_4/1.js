/**
 *
 * @param {number} numNodes
 * @param {number} numEdges
 * @param {number[][]} edges
 * @param {number} startNodeIdx
 * @returns {number[]}
 */
function bfs(numNodes, numEdges, edges, startNodeIdx) {
  /** @type { Object<number, Set<number>> } */
  const graph = {};

  // Tạo đồ thị một cách tối ưu bằng cách chỉ tạo các Node có kết nối với nhau thay vì tạo các Node từ 1 -> numEdges.
  // Sẽ không có một Node nào trong đồ thị mà không kết nối với tối thiểu một Node khác.
  for (const edge of edges) {
    const [node_1, node_2] = edge;
    if (!graph[node_1]) graph[node_1] = new Set();
    if (!graph[node_2]) graph[node_2] = new Set();
    graph[node_1].add(node_2);
    graph[node_2].add(node_1);
  }

  // Nếu graph[startNodeIdx] không nằm không nằm trong đồ thị đã được khởi tạo
  // tức là nó không được kết nối với bất kỳ Node nào trong đồ thị.
  // chỉ cần trả về một mảng chứa (numNodes - 1) phần tử với giá trị -1.
  if (!graph[startNodeIdx]) return new Array(numNodes - 1).fill(-1);

  const distancesMap = {};
  distancesMap[startNodeIdx] = 0;
  const queue = [startNodeIdx];
  while (queue.length) {
    const parentNode = queue.shift();
    const distances = distancesMap[parentNode] + 6;
    // Vì không khởi tạo tất cả các Node của đồ thị, thay vào đó chỉ tạo các Node có các cạnh kết nốt với nhau.
    // Mã sẽ chạy trong đúng trong hầu hết các trường hợp.
    // Trường hợp gặp lỗi là trường hợp startNodeIdx là chỉ số của một Node không không tồn tại trong đồ thì đã được khởi tạo
    // vì nó không nằm trong trong 'edges' (là một Node độc lập, không có bất kỳ node cạnh nào) sẽ khiến giá trị của 'graph[parentNode]' là undefined.
    // Vì vậy trong vòng lặp for bên dưới cần sử dụng 'graph[parentNode] ?? []' để trả về một mảng rỗng thay vì undefined để 'for' không bị lỗi.
    for (const neighbor of graph[parentNode] ?? []) {
      if (distancesMap[neighbor]) continue;
      else {
        distancesMap[neighbor] = distances;
        queue.push(neighbor);
      }
    }
  }

  const distances = [];
  for (let idx = 1; idx <= numNodes; idx++) {
    if (idx === startNodeIdx) continue;
    const distancesValue = distancesMap[idx] ?? -1;
    distances.push(distancesValue);
  }
  return distances;
}

// bfs(
//   5,
//   3,
//   [
//     [1, 2],
//     [1, 3],
//     [3, 4],
//   ],
//   1
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

// const q = parseInt(readLine().trim(), 10);

// for (let qItr = 0; qItr < q; qItr++) {
//   const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

//   const n = parseInt(firstMultipleInput[0], 10);

//   const m = parseInt(firstMultipleInput[1], 10);

//   let edges = Array(m);

//   for (let i = 0; i < m; i++) {
//     edges[i] = readLine()
//       .replace(/\s+$/g, "")
//       .split(" ")
//       .map((edgesTemp) => parseInt(edgesTemp, 10));
//   }

//   const s = parseInt(readLine().trim(), 10);

//   const result = bfs(n, m, edges, s);

//   console.log(result.join(" ") + "\n");
// }
