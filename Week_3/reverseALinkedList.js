/**
 * @typedef {Object} SinglyLinkedListNode
 * @property {Number | Null} SinglyLinkedListNode.data
 * @property {SinglyLinkedListNode | Null} SinglyLinkedListNode.next
 */

/**
 *
 * @param {SinglyLinkedListNode} llist
 * @returns {SinglyLinkedListNode}
 */
function reverse(llist) {
  if (llist.data === null) return llist;

  // let reverseLlist = null;

  // while (llist !== null) {
  //   const { data, next } = llist;

  //   reverseLlist = {
  //     data,
  //     next: reverseLlist,
  //   };

  //   llist = next;
  // }

  // return reverseLlist;

  let currentNode = llist;
  let prevNode = null;

  while (currentNode !== null) {
    const { next: nextNode } = currentNode;

    currentNode.next = prevNode;

    prevNode = currentNode;
    currentNode = nextNode;
  }
}

// const result = reverse({
//   data: 1,
//   next: {
//     data: 2,
//     next: { data: 3, next: { data: 4, next: { data: 5, next: null } } },
//   },
// });
