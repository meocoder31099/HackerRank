// Use Disjoint Set Union DSU | Union Find.

class DSU {
  /** @type {Number[][]} */
  parent = [];

  /**
   *
   * @param { {length: Number} } initData
   */
  constructor({ length }) {
    for (let idx = 1; idx <= length; idx++) {
      this.parent[idx] = [idx];
    }
  }

  /**
   *
   * @param {Number} value
   * @param {Number[]} parent - Pointer to parent value.
   * @returns {Number} The parent of value.
   *
   * This function has been modified differently from the original DSU algorithm.
   * If you pass the function a "parent" pointer, all traversed nodes will have this pointer as their parent.
   * This means that if you use find() with a parent parameter, the union process will also take place at the same time.
   */
  find(value, parent = []) {
    const stack = [value];
    const sameParents = [];
    let parentValue;

    while (stack.length) {
      const value = stack.pop();
      if (this.parent[value][0] === value) {
        parentValue = value;
        parent[0] = this.parent[value][0];
        this.parent[value] = parent;
        break;
      }
      stack.push(this.parent[value][0]);
      sameParents.push(value);
    }

    while (sameParents.length) {
      const value = sameParents.pop();
      this.parent[value] = parent;
    }

    return parentValue;

    // if (this.parent[value][0] === value) {
    //   parent[0] = this.parent[value][0];
    //   this.parent[value] = parent;
    //   return value;
    // }

    // return (
    //   this.find(this.parent[value][0], parent) &&
    //   (this.parent[value] = parent) &&
    //   parent[0]
    // );
  }

  /**
   *
   * @param {Number} firstNode
   * @param {Number} secondNode
   * @returns {Boolean} False if firstNode and secondNode has same parent.
   */
  union(firstNode, secondNode) {
    /** @type {Number[]} */
    const parent = this.parent[firstNode];
    const root_1 = this.find(firstNode, parent);
    const root_2 = this.find(secondNode, parent);

    return !(root_1 === root_2);
  }
}

/**
 *
 * @param {Number} n
 * @param {Number} c_lib
 * @param {Number} c_road
 * @param {Number[][]} cities
 * @returns {Number}
 */
function roadsAndLibraries(n, c_lib, c_road, cities = []) {
  const maxLibrary = n;
  const maxRoad = cities.length;
  const maxLibraryCost = maxLibrary * c_lib;
  let cycleRoad = 0;

  if (c_road > c_lib) return maxLibraryCost;

  const citiesRoadMapUnique = new DSU({
    length: n,
  });

  for (const road of cities) {
    const [city_1, city_2] = road;
    const isCycle = !citiesRoadMapUnique.union(city_1, city_2);
    if (isCycle) {
      cycleRoad++;
    }
  }

  const maxRoadNotInclueCycle = maxRoad - cycleRoad;
  const minLibrary = maxLibrary - maxRoadNotInclueCycle;
  const minLibraryCost = minLibrary * c_lib;
  const maxRoadNotInclueCycleCost = maxRoadNotInclueCycle * c_road;
  const minimumCost = minLibraryCost + maxRoadNotInclueCycleCost;

  return minimumCost;
}

// /**
//  *
//  * @param {Number} n
//  * @param {Number} c_lib
//  * @param {Number} c_road
//  * @param {Number[][]} cities
//  * @returns {Number}
//  */
// function roadsAndLibraries(n, c_lib, c_road, cities = []) {
//   const maxLibrary = n;
//   const maxRoad = cities.length;
//   let cycleRoad = 0;

//   // cities.forEach((e) => {
//   //   e.sort((a, b) => a - b);
//   // });
//   // cities.sort((a, b) => a[0] - b[0]);

//   const citiesRoadMap = {};

//   /**
//    *
//    * @param {Number | String} startCity
//    * @param {Number | String} endCity
//    * @returns {Boolean}
//    */
//   const isCycle = (startCity, endCity) => {
//     const visited = {};
//     visited[startCity] = true;
//     const queue = Object.keys(citiesRoadMap[startCity]);

//     for (const childCity of queue) {
//       if (parseInt(childCity) === endCity) return true;
//       else visited[childCity] = true;
//     }

//     while (queue.length) {
//       const city = queue.shift();
//       const cities = Object.keys(citiesRoadMap[city]);
//       for (const childCity of cities) {
//         if (parseInt(childCity) === endCity) return true;
//         else
//           !visited[childCity] &&
//             queue.push(childCity) &&
//             (visited[childCity] = true);
//       }
//     }

//     return false;
//   };

//   for (const road of cities) {
//     const [city_1, city_2] = road;

//     if (citiesRoadMap[city_1] && citiesRoadMap[city_2]) {
//       const isHasCycle = isCycle(city_1, city_2);
//       if (isHasCycle) {
//         cycleRoad++;
//         continue;
//       }

//       citiesRoadMap[city_1][city_2] = true;
//       citiesRoadMap[city_2][city_1] = true;
//     } else if (citiesRoadMap[city_1] && !citiesRoadMap[city_2]) {
//       const newCity = {};
//       citiesRoadMap[city_2] = newCity;

//       citiesRoadMap[city_1][city_2] = true;
//       citiesRoadMap[city_2][city_1] = true;
//     } else if (!citiesRoadMap[city_1] && citiesRoadMap[city_2]) {
//       const newCity = {};
//       citiesRoadMap[city_1] = newCity;

//       citiesRoadMap[city_1][city_2] = true;
//       citiesRoadMap[city_2][city_1] = true;
//     } else {
//       const newCity_1 = {};
//       const newCity_2 = {};
//       citiesRoadMap[city_1] = newCity_1;
//       citiesRoadMap[city_2] = newCity_2;

//       citiesRoadMap[city_1][city_2] = true;
//       citiesRoadMap[city_2][city_1] = true;
//     }
//   }

//   const maxRoadNotInclueCycle = maxRoad - cycleRoad;
//   const minLibrary = maxLibrary - maxRoadNotInclueCycle;
//   const maxLibraryCost = maxLibrary * c_lib;
//   const minLibraryCost = minLibrary * c_lib;
//   const maxRoadNotInclueCycleCost = maxRoadNotInclueCycle * c_road;
//   const minLibraryWithRoadNotInclueCycleCost =
//     minLibraryCost + maxRoadNotInclueCycleCost;

//   const minimumCost = Math.min(
//     maxLibraryCost,
//     minLibraryWithRoadNotInclueCycleCost
//   );

//   // console.log(citiesRoadMap);
//   // console.log({
//   //   maxRoad,
//   //   maxRoadNotInclueCycle,
//   //   maxLibrary,
//   //   minLibrary,
//   // });
//   // console.log({ maxLibraryCost, minLibraryWithRoadNotInclueCycleCost });
//   // console.log({ n, c_lib, c_road });
//   // console.log(minimumCost);

//   return minimumCost;
// }

// roadsAndLibraries(8, 1, 1, [
//   [1, 2],
//   [1, 3],
//   [3, 2],
//   [5, 6],
//   [3, 4],
//   [7, 8],
//   [8, 4],
//   [4, 2],
//   [7, 3],
// ]);

// console.time("time run");

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

//   const c_lib = parseInt(firstMultipleInput[2], 10);

//   const c_road = parseInt(firstMultipleInput[3], 10);

//   let cities = Array(m);

//   for (let i = 0; i < m; i++) {
//     cities[i] = readLine()
//       .replace(/\s+$/g, "")
//       .split(" ")
//       .map((citiesTemp) => parseInt(citiesTemp, 10));
//   }

//   const result = roadsAndLibraries(n, c_lib, c_road, cities);
//   console.log(result);
// }

// console.timeEnd("time run");
