/**
 * GIẢI THUẬT
 * Vòng lặp While:
 * * Lấy gameScore đầu tiên trong danh sách 'player' và đồng thời xoá nó khỏi danh sách 'player'.
 * * Nếu gameScore < phần tử cuối cùng trong danh sách xếp hạng 'rank'.
 * * * Push chỉ số index của phần tử cuối trong danh sách xếp hạng 'rank' + 2 vào danh sách playerRanks playerRanks.push(rank[((rank.length - 1) + 2)])
 * * Nếu gameScore === phần tử cuối cùng trong danh sách xếp hạng 'rank'.
 * * * Push chỉ số index của phần tử cuối trong danh sách xếp hạng 'rank' + 1 vào danh sách playerRanks playerRanks.push(rank[((rank.length - 1) + 1)])
 * Các trường hợp còn
 * * * Xoá phần tử cuối cùng trong trong danh sách xếp hạng 'rank' vì gameScore trong danh sách 'player' được sắp xếp theo thứ tự tăng dần,
 * * * Không có gameScore nào trong danh sách 'player' nhỏ hơn phần từ cuối cùng trong 'rank' vì gameScore sẽ luôn có thứ hạng cao hơn mức thức hạng đó.
 */

/**
 *
 * @param {Number} score
 * @param {Number[]} rank
 * @returns {Number}
 */
const findNextRank = (score, rank) => {
  // ++ LUU Y: Co the su dung 'Tim kiem nhi phan' de toi uu hoa toc do tim index
  for (let i = rank.length - 1; i >= 0; i--) {
    if (score < rank[i]) return i + 2;
    else if (score === rank[i] && i !== 0) return i + 1;
    // i cần !== 0 thì nếu i === 0, đó là mức rank cao nhất tương đương với vị trí số 1 và không thể có mức rank nào cao hơn được nữa.
    else rank.pop();
  }
  return 1;
};

/**
 *
 * @param {Number[]} ranked
 * @param {Number[]} player
 * @returns {Number[]}
 */
function climbingLeaderboard(ranked, player) {
  const rank = [...new Set(ranked)];
  const playerRanks = [];

  while (player.length) {
    const gameScore = player.shift();
    const lastRankIndex = rank.length - 1;
    if (gameScore < rank[lastRankIndex]) playerRanks.push(lastRankIndex + 2);
    else if (gameScore === rank[lastRankIndex])
      playerRanks.push(lastRankIndex + 1);
    else {
      rank.pop();
      const playerRank = findNextRank(gameScore, rank);
      playerRanks.push(playerRank);
    }
  }
  return playerRanks;
}

// /**
//  *
//  * @param {Number[]} ranked
//  * @param {Number[]} player
//  * @returns {Number[]}
//  */
// function climbingLeaderboard(ranked, player) {
//   const rank = [...new Set(ranked)];
//   const playerRanks = [];

//   while (player.length) {
//     const gameScore = player.shift();
//     const lastRankIndex = rank.length - 1;
//     if (gameScore < rank[lastRankIndex]) playerRanks.push(lastRankIndex + 2);
//     else if (gameScore === rank[lastRankIndex])
//       playerRanks.push(lastRankIndex + 1);
//     else if (gameScore > rank[lastRankIndex] && lastRankIndex !== 0) {
//       player.unshift(gameScore);
//       rank.pop();
//     } else {
//       playerRanks.push(1);
//     }
//   }
//   return playerRanks;
// }

// const result = climbingLeaderboard(
//   [100, 100, 50, 40, 40, 20, 10],
//   [5, 25, 50, 120]
// );

// console.log(result);
