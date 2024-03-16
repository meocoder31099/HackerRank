/**
 * @typedef {Object} NodeTree
 * @property {Number} data
 * @property {NodeTree | null} left
 * @property {NodeTree | null} right
 */

/**
 * De quy
 * @param {NodeTree | null} node
 * @param {Number[]} data
 */
const brower = (node, data) => {
  if (node === null) return;

  data.push(node.data);

  brower(node.left, data);
  brower(node.right, data);
};

/**
 * Loop & Stack
 * @param {NodeTree | null} node
 * @param {Number[]} data
 */
const loopBrower = (node, data) => {
  const stack = [];
  let currentNode = node;
  while (currentNode !== null) {
    data.push(currentNode.data);

    if (currentNode.left) {
      if (currentNode.right) stack.push(currentNode.right);
      currentNode = currentNode.left;
    } else if (currentNode.right) {
      currentNode = currentNode.right;
    } else {
      currentNode = stack.pop() || null;
    }
  }
};

/**
 *
 * @param { NodeTree } root
 */
function preOrder(root) {
  const data = [];
  loopBrower(root, data);

  console.log(data.join(" "));
}
