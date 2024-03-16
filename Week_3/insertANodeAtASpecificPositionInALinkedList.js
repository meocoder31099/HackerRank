/**
 *
 * @param {SinglyLinkedListNode} llist
 * @param {*} data
 * @param {*} position
 * @returns {SinglyLinkedListNode}
 */
function insertNodeAtPosition(llist, data, position) {
  const newNode = {
    data,
    next: null,
  };

  let i = 0;

  if (position === 0) {
    newNode.next = llist;
    return llist;
  }

  let currentNode = llist;

  while (i < position - 1) {
    if (currentNode !== null) currentNode = currentNode.next;
    i++;
  }

  newNode.next = currentNode.next;
  currentNode.next = newNode;

  return llist;
}
