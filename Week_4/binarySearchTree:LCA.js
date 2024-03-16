/**
 *
 * @param {Number[]} a
 * @param {Number[]} b
 * @returns {Number[]}
 */
const intersect = (a, b) => {
  var setB = new Set(b);
  return [...new Set(a)].filter((x) => setB.has(x));
};

/**
 * @typedef { {data: Number, left: CustomNode | null, right: CustomNode | null, parent: CustomNode | null} } CustomNode
 */
class BinaryTree {
  /**
   * @param {Map<Number, CustomNode>} treeMap
   */
  constructor(treeMap) {
    this.treeMap = treeMap;
    this.root = null;
  }

  /**
   * @param {Number} value
   */
  insert(value) {
    if (this.root === null) {
      this.root = this.treeMap.get(value);
    } else {
      this.insertNode(this.root, this.treeMap.get(value));
    }
  }

  /**
   * @param {CustomNode} node
   * @param {CustomNode} newNode
   */
  insertNode(node, newNode) {
    if (node.data > newNode.data) {
      if (node.left === null) {
        node.left = newNode;
        newNode.parent = node;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
        newNode.parent = node;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
}

/**
 *
 * @param {String} input
 */
function processData(input) {
  const [_n, nodeValues, v] = input
    .split(/\n|\r/)
    .map((e) => e.split(" ").map((e) => parseInt(e)));

  /** @type {Map<Number, CustomNode>} */
  const treeMap = new Map();

  /** @type {CustomNode[]} */
  nodeValues.forEach((value) => {
    /** @type {CustomNode} */
    const newNode = {
      data: value,
      left: null,
      right: null,
      parent: null,
    };
    treeMap.set(value, newNode);
  });

  const binaryTree = new BinaryTree(treeMap);

  nodeValues.forEach((value) => binaryTree.insert(value));

  const v1Parents = [];
  let nodeV1 = treeMap.get(v[0]);
  while (nodeV1 !== null) {
    v1Parents.push(nodeV1.data);
    nodeV1 = nodeV1.parent;
  }

  const v2Parents = [];
  let nodeV2 = treeMap.get(v[1]);
  while (nodeV2 !== null) {
    v2Parents.push(nodeV2.data);
    nodeV2 = nodeV2.parent;
  }

  const LCA = intersect(v1Parents, v2Parents);
  console.log(LCA[0]);
}

// processData(`8
// 8 4 9 1 2 3 6 5
// 1 2`);
