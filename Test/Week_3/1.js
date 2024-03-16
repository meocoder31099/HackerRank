/**
 *
 * @param {number[][]} petrolpumps
 * @returns {number}
 */
function truckTour(petrolpumps) {
  let minIdxPetrolPumps = undefined;

  let currentPetrol = 0;
  //   let needAmountOfPetrol = 0;

  for (let idx = 0; idx < petrolpumps.length; idx++) {
    const [amountOfPetrol, distance] = petrolpumps[idx];
    currentPetrol += amountOfPetrol - distance;

    if (currentPetrol < 0) {
      //   needAmountOfPetrol += currentPetrol;
      minIdxPetrolPumps = undefined;
      currentPetrol = 0;
    } else if (currentPetrol > 0 && minIdxPetrolPumps === undefined) {
      minIdxPetrolPumps = idx;
    }
  }

  //   currentPetrol + needAmountOfPetrol need to bigger 0.
  //   console.log({ currentPetrol, needAmountOfPetrol, minIdxPetrolPumps });

  return minIdxPetrolPumps;
}

// truckTour([
//   [1, 5],
//   [10, 3],
//   [3, 4],
// ]);
