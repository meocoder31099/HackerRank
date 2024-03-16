/**
 * minQueue Class using array.
 */
class MinQueue {
  #data = [];
  #size = 0;

  constructor({ initData = undefined } = {}) {
    if (initData) {
      for (const value of initData) {
        this.enqueue(value);
      }
    }
  }

  /**
   *
   * @param {*} values
   */
  enqueue(values) {
    this.#data.push(values);
    this.#size++;
    this.#heapifyUp();
  }

  /**
   * @returns {*}
   */
  dequeue() {
    if (this.isEmpty()) return undefined;
    if (this.#size === 1) {
      this.#size--;
      return this.#data.pop();
    }

    [this.#data[0], this.#data[this.#size - 1]] = [
      this.#data[this.#size - 1],
      this.#data[0],
    ];
    const minNode = this.#data.pop();
    this.#size--;
    this.#heapifyDown();
    return minNode;
  }

  /**
   *
   * @param {number} childIdx
   * @param {number} parentIdx
   */
  #swap(childIdx, parentIdx) {
    [this.#data[childIdx], this.#data[parentIdx]] = [
      this.#data[parentIdx],
      this.#data[childIdx],
    ];
  }

  /**
   *
   * @param {number} childIdx
   * @param {number} parentIdx
   * @returns {boolean}
   */
  #compare(childIdx, parentIdx) {
    return this.#data[childIdx] < this.#data[parentIdx];
  }

  #heapifyUp() {
    if (this.#size === 1) return;

    let currentIdx = this.#size - 1;
    let parentIdx = this.#getParentIdx(currentIdx);
    let isNeedSwap = this.#compare(currentIdx, parentIdx);

    while (isNeedSwap) {
      this.#swap(currentIdx, parentIdx);
      currentIdx = parentIdx;
      parentIdx = this.#getParentIdx(currentIdx);
      isNeedSwap = this.#compare(currentIdx, parentIdx);
    }
  }

  #heapifyDown() {
    let currentIdx = 0;

    while (currentIdx < this.#size) {
      const leftChildIdx = this.#getLeftChildIdx(currentIdx);
      const rightChildIdx = this.#getRightChildIdx(currentIdx);
      let minChildIdx;

      // So sanh gia tri cua node con ben trai va ben phai.
      // Node nao nho hon se duoc su dung de so sanh voi node cha.
      if (
        rightChildIdx < this.#size &&
        !this.#compare(leftChildIdx, rightChildIdx)
      ) {
        minChildIdx = rightChildIdx;
      } else {
        minChildIdx = leftChildIdx;
      }

      if (this.#compare(minChildIdx, currentIdx)) {
        this.#swap(currentIdx, minChildIdx);
        currentIdx = minChildIdx;
      } else {
        break;
      }
    }
  }

  /**
   *
   * @param {number} childIdx
   * @returns {number}
   */
  #getParentIdx(childIdx) {
    return Math.floor((childIdx + 1) / 2) - 1;
  }

  /**
   *
   * @param {number} parentIdx
   * @returns {number}
   */
  #getLeftChildIdx(parentIdx) {
    return (parentIdx + 1) * 2 - 1;
  }

  /**
   *
   * @param {number} parentIdx
   * @returns {number}
   */
  #getRightChildIdx(parentIdx) {
    return (parentIdx + 1) * 2;
  }

  /**
   *
   * @returns {*}
   */
  top() {
    return this.#data[0];
  }

  /**
   *
   * @returns {*}
   */
  values() {
    return this.#data;
  }

  /**
   *
   * @returns {number}
   */
  size() {
    return this.#size;
  }

  /**
   *
   * @returns {boolean}
   */
  isEmpty() {
    return this.#data.length === 0;
  }
}

/**
 *
 * @param {Number} sweetness
 * @param {Number[]} cookies
 * @returns {Number | -1}
 */
function cookies(sweetness, cookies) {
  let iterations = 0;

  const minQueue = new MinQueue({
    initData: cookies,
  });

  while (minQueue.size() > 1 && minQueue.top() < sweetness) {
    const leastSweetCookie = minQueue.dequeue();
    const leastSweetCookie2nd = minQueue.dequeue();
    minQueue.enqueue(leastSweetCookie + 2 * leastSweetCookie2nd);
    iterations++;
  }

  return minQueue.top() < sweetness ? -1 : iterations;
}

// const result = cookies(7, [1, 2, 3, 9, 10, 12]);
// console.log(result);

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

// const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

// const n = parseInt(firstMultipleInput[0], 10);

// const k = parseInt(firstMultipleInput[1], 10);

// const A = readLine()
//   .replace(/\s+$/g, "")
//   .split(" ")
//   .map((ATemp) => parseInt(ATemp, 10));

// const result = cookies(k, A);
// console.log(result);
