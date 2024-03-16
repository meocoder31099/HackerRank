// @ts-ignore
class DisjSet {
  /** @type { Object<number, {parent: number[], size?: number}> } */
  data = {};
  /** @type {Set<number>} */
  rootList = new Set();

  /**
   *
   * @param {number} value
   * @param {number[]} parentPointer
   * @returns {number}
   */
  find(value, parentPointer = undefined) {
    let parentValue = value;
    const stack = [value];

    // Tao node moi neu node chua ton tai trong do thi.
    if (!this.data[value]) {
      this.data[value] = {
        parent: parentPointer || [value],
      };
      // Vi node moi duoc khoi tao nen no chinh la node cha cua chinh no.
      return value;
    }

    let i = 0;
    while (i < stack.length) {
      const node = stack[i];
      if (this.data[node].parent[0] === node) {
        parentValue = node;
        break;
      }
      stack.push(this.data[node].parent[0]);
      i++;
    }

    for (const node of stack) {
      this.data[node].parent[0] = parentValue;
      this.data[node].parent = parentPointer;
    }

    return parentValue;
  }

  /**
   *
   * @param {number} fristNode
   * @param {number} sencondNode
   */
  union(fristNode, sencondNode) {
    const parentPointer = this.data[fristNode]?.parent ?? [fristNode];
    const fristParentNode = this.find(fristNode, parentPointer);
    const sencondParentNode = this.find(sencondNode, parentPointer);

    if (fristParentNode !== sencondParentNode) {
      if (!this.data[fristParentNode].size) this.data[fristParentNode].size = 1;
      this.data[fristParentNode].size +=
        this.data[sencondParentNode]?.size ?? 1;

      this.rootList.add(fristParentNode);
      this.rootList.delete(sencondParentNode);
    }
  }
}

/**
 *
 * @param {number[][]} graphEdges
 * @returns {number[]}
 */
function componentsInGraph(graphEdges) {
  const disjSet = new DisjSet();

  for (const edge of graphEdges) {
    const [fristNode, sencondNode] = edge;
    disjSet.union(fristNode, sencondNode);
  }

  let minComponentSizes = Number.MAX_SAFE_INTEGER;
  let maxComponentSizes = Number.MIN_SAFE_INTEGER;
  for (const root of disjSet.rootList) {
    if (disjSet.data[root].size < minComponentSizes) {
      minComponentSizes = disjSet.data[root].size;
    }
    if (disjSet.data[root].size > maxComponentSizes) {
      maxComponentSizes = disjSet.data[root].size;
    }
  }

  return [minComponentSizes, maxComponentSizes];
}

// componentsInGraph([
//   [5, 56],
//   [4, 51],
//   [2, 53],
//   [8, 52],
//   [5, 43],
//   [2, 80],
//   [5, 47],
//   [4, 79],
//   [3, 75],
//   [1, 67],
//   [7, 61],
//   [2, 57],
//   [5, 47],
//   [4, 63],
//   [10, 79],
//   [1, 57],
//   [4, 42],
//   [8, 79],
//   [6, 53],
//   [3, 74],
//   [7, 60],
//   [10, 79],
//   [5, 46],
//   [3, 50],
//   [6, 57],
//   [8, 71],
//   [6, 74],
//   [10, 44],
//   [9, 80],
//   [7, 59],
//   [7, 74],
//   [6, 55],
//   [3, 77],
//   [3, 53],
//   [5, 50],
//   [9, 70],
//   [4, 72],
//   [5, 73],
//   [6, 70],
//   [7, 46],
// ]);
