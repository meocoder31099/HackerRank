/**
 *
 * @param {Number[]} arr
 * @returns {Number}
 */
const sum = (arr) => arr.reduce((sum, value) => (sum += value));

/**
 *
 * @param {{
 * h1: {height: Number, stack: Number[]},
 * h2: {height: Number, stack: Number[]},
 * h3: {height: Number, stack: Number[]}
 * }} stack
 * @param {'h1'|'h2'|'h3'} key1
 * @param {'h1'|'h2'|'h3'} key2
 * @returns {Number}
 */
const balancing = (stack, key1, key2) => {
  while (
    stack[key1].height &&
    stack[key2].height &&
    stack[key1].height !== stack[key2].height
  ) {
    if (stack[key1].height > stack[key2].height)
      stack[key1].height -= stack[key1].stack.pop();
    else stack[key2].height -= stack[key2].stack.pop();
  }

  if (stack[key1].height === 0 || stack[key2].height === 0) return 0;
  return stack[key1].height;
};

/**
 *
 * @param {Number[]} h1
 * @param {Number[]} h2
 * @param {Number[]} h3
 * @returns {Number}
 */
function equalStacks(h1, h2, h3) {
  h1 = h1.reverse();
  h2 = h2.reverse();
  h3 = h3.reverse();

  const sumStack = {
    h1: { height: sum(h1), stack: h1 },
    h2: { height: sum(h2), stack: h2 },
    h3: { height: sum(h3), stack: h3 },
  };

  let stackHeight = 0;

  if (!sumStack.h1.height || !sumStack.h2.height || !sumStack.h3.height)
    return 0;
  if (
    sumStack.h1.height === sumStack.h2.height &&
    sumStack.h2.height === sumStack.h3.height
  )
    return sumStack.h1.height;

  const stackHeightSorted = Object.keys(sumStack).sort(
    (a, b) => sumStack[b].height - sumStack[a].height
  );

  while (
    sumStack.h1.height > 0 &&
    sumStack.h2.height > 0 &&
    sumStack.h3.height > 0
  ) {
    let tempBalance = 0;

    const [maxId, mediumId, minId] = stackHeightSorted;

    // @ts-ignore
    const balancing1 = balancing(sumStack, maxId, minId);
    if (balancing1 === 0) break;
    else tempBalance = balancing1;

    // @ts-ignore
    const balancing2 = balancing(sumStack, mediumId, minId);
    if (balancing2 === 0) break;
    else if (balancing2 === tempBalance) {
      stackHeight = balancing2;
      break;
    }
  }

  return stackHeight;
}

// const h1 = [3, 2, 1, 1, 1];
// const h2 = [4, 3, 2];
// const h3 = [1, 1, 4, 1];
// equalStacks(h1, h2, h3);
