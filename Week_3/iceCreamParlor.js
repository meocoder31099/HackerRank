// GIẢI THUẬT
/**
 * Tạo một mảng 'map' với key: (m - arr[i]), value: i (*)
 * Vòng lặp sẽ kiểm tra map có tồn tại map[arr[i]].
 * Nếu có map[arr[i]], gía trị của map[arr[i]] sẽ chỉ số index của giá trị cộng với arr[i] để bằng m, arr[i] + arr[map[arr[i]] === m
 * Nếu không thêm cặp key và value mới vào map theo công thức (*)
 */

/**
 *
 * @param {Number} m
 * @param {Number[]} arr
 */
function icecreamParlor(m, arr) {
  // const arrSorted = structuredClone(arr).sort((a, b) => a - b);

  // let costs = [];

  // for (let i = 0; i < arrSorted.length - 1; i++) {
  //   if (arrSorted[i] >= m) break; // Vì cần tổng của hai số != 0 nên nến arrSorted[i] >= m thì không có giá trị nào thoả điều kiện.
  //   if (costs.length === 2) break;
  //   for (let j = i + 1; j < arrSorted.length; j++) {
  //     const totalCost = arrSorted[i] + arrSorted[j];
  //     if (totalCost === m) {
  //       costs.push(arrSorted[i]);
  //       costs.push(arrSorted[j]);
  //       break;
  //     } else if (totalCost > m) {
  //       break;
  //     }
  //   }
  // }

  // for (let i = 0; i < costs.length; i++) {
  //   costs[i] =
  //     1 +
  //     arr.findIndex((e, idx) => {
  //       if (e === costs[i]) {
  //         arr[idx] = undefined; // Nếu costs chứa hai số có cùng một gía trị sẽ gây sai lệnh về chỉ số index.
  //         // VD: cần tìm costs [3, 3] => findIndex() sẽ trả về cùng một index của 3 xuất hiện đầu tiên trong mảng arr.
  //         // Gán giá trị undefined cho arr[idx] sẽ khắc phục vấn đề.
  //         return true;
  //       }
  //       return false;
  //     });
  // }

  // costs.sort((a, b) => a - b);

  // return costs;

  const costs = [];

  const map = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= m) continue;

    if (map[arr[i]]) {
      costs.push(map[arr[i]] + 1);
      costs.push(i + 1);
    }
    map[m - arr[i]] = i;
  }

  return costs;
}

// icecreamParlor(100, [5, 75, 25]);
