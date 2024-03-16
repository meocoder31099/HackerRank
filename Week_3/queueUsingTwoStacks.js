/**
 *
 * @param {String} input
 */
function processData(input) {
  const splitInput = input.split(/\n|\r/);

  splitInput.shift();
  const queue = new Queue();

  while (splitInput.length) {
    const query = splitInput
      .shift()
      .split(" ")
      .map((e) => parseInt(e));

    // @ts-ignore
    queue.query(...query);
  }
}

class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(value) {
    this.data.push(value);
  }

  dequeue() {
    this.data.shift();
  }

  printFrontElement() {
    console.log(this.data[0]);
  }

  /**
   *
   * @param {Number} type
   * @param {Number | undefined} value
   */
  query(type, value) {
    switch (type) {
      case 1:
        this.enqueue(value);
        break;

      case 2:
        this.dequeue();
        break;

      default:
        this.printFrontElement();
        break;
    }
  }
}

// processData(`10
// 1 76
// 1 33
// 2
// 1 23
// 1 97
// 1 21
// 3
// 3
// 1 74
// 3`);

// 1 x: Enqueue element  into the end of the queue.
// 2: Dequeue the element at the front of the queue.
// 3: Print the element at the front of the queue.
