/**
 * @typedef {Object} DoublyLinkedListNode
 * @property {Number | Null} SinglyLinkedListNode.data
 * @property {DoublyLinkedListNode | Null} SinglyLinkedListNode.next
 * @property {DoublyLinkedListNode | Null} SinglyLinkedListNode.prev
 */

/**
 *
 * @param {DoublyLinkedListNode} llist
 * @returns {DoublyLinkedListNode}
 */
function reverse(llist) {
  let nodeHienTai = llist;
  let nodeTruoc = null;

  while (nodeHienTai != null) {
    // Lưu trữ node tiếp theo
    let nodeTiepTheo = nodeHienTai.next;

    // Đảo ngược liên kết của node hiện tại
    nodeHienTai.next = nodeTruoc;
    nodeHienTai.prev = nodeTiepTheo;

    // Di chuyển hai node trỏ tới phía trước
    nodeTruoc = nodeHienTai;
    nodeHienTai = nodeTiepTheo;
  }

  // Trả về node mới làm đầu danh sách
  return nodeTruoc;
}

// const daoNguoc = (linkedList) => {
//   let nodeTruoc = null;

//   while (linkedList !== null) {
//     let nodeTiepTheo = linkedList.next;

//     linkedList.next = nodeTruoc;
//     linkedList.prev = nodeTiepTheo;

//     console.log({ linkedList }, { nodeTruoc });

//     nodeTruoc = linkedList;
//     linkedList = nodeTiepTheo;
//   }

//   // console.log(nodeTruoc);
// };

// daoNguoc({
//   data: 1,
//   next: {
//     data: 2,
//     next: {
//       data: 3,
//       next: null,
//       prev: 2,
//     },
//     prev: 1,
//   },
//   prev: null,
// });
