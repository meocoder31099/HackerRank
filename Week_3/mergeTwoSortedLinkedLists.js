/**
 *
 * @param {SinglyLinkedListNode} head1
 * @param {SinglyLinkedListNode} head2
 * @returns {SinglyLinkedListNode}
 */
function mergeLists(head1, head2) {
  let newHead;
  if (head1.data < head2.data) {
    newHead = head1;
    head1 = head1.next;
  } else {
    newHead = head2;
    head2 = head2.next;
  }

  let currentNode = newHead;

  while (head1 !== null && head2 !== null) {
    if (head1.data < head2.data) {
      currentNode.next = head1;
      head1 = head1.next;
    } else {
      currentNode.next = head2;
      head2 = head2.next;
    }

    currentNode = currentNode.next;
  }

  if (head1 !== null) currentNode.next = head1;
  else currentNode.next = head2;
  return newHead;
}

// mergeLists(
//   { data: 1, next: { data: 2, next: { data: 3, next: null } } },
//   { data: 3, next: { data: 4, next: null } }
// );
