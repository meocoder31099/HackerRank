/**
 * k = 3;
 * Bước 1: Khởi tạo một deque rỗng. Deque là một cấu trúc dữ liệu đặc biệt, cho phép thêm và xóa phần tử ở cả hai đầu3.
 * Bước 2: Duyệt qua các phần tử của mảng từ trái sang phải. Với mỗi phần tử, thực hiện các thao tác sau:
 *  Bước 2.1: Loại bỏ các phần tử không thuộc cửa sổ hiện tại khỏi deque. Cửa sổ hiện tại là một đoạn liên tiếp của mảng có độ dài bằng 3(k=3), bắt đầu từ phần tử hiện tại. Các phần tử không thuộc
 *  cửa sổ hiện tại là những phần tử có chỉ số nhỏ hơn chỉ số của phần tử hiện tại trừ đi 3(k=3). Để loại bỏ các phần tử này, ta lấy ra các phần tử ở đầu deque cho đến khi gặp phần tử thuộc cửa sổ
 *  hiện tại hoặc deque rỗng.
 *  Bước 2.2: Loại bỏ các phần tử nhỏ hơn phần tử hiện tại khỏi deque. Các phần tử này không còn cơ hội trở thành max của bất kỳ subarray nào trong tương lai, vì phần tử hiện tại đã lớn hơn chúng.
 *  Để loại bỏ các phần tử này, ta lấy ra các phần tử ở cuối deque cho đến khi gặp phần tử lớn hơn hoặc bằng phần tử hiện tại hoặc deque rỗng.
 *  Bước 2.3: Thêm phần tử hiện tại vào cuối deque. Phần tử này có thể trở thành max của một số subarray trong tương lai, nên ta cần lưu trữ nó trong deque.
 *  Bước 2.4: Nếu cửa sổ đã đủ 3(k=3) phần tử, in ra max của subarray hiện tại. Max của subarray hiện tại chính là phần tử đầu tiên của deque, vì deque luôn được sắp xếp theo thứ tự giảm dần.
 */
/**
 *
 * @param {Number[]} a
 * @param {Number} k
 * @returns {Number[]}
 */
const maxOfSubarrays = (a, k) => {
  // Khởi tạo một mảng rỗng để lưu kết quả
  var result = [];
  // Khởi tạo một deque rỗng
  var dq = [];
  // Duyệt qua các phần tử của mảng
  for (var i = 0; i < a.length; i++) {
    // Loại bỏ các phần tử không thuộc cửa sổ hiện tại khỏi deque
    while (dq.length > 0 && dq[0] <= i - k) {
      dq.shift();
    }
    // Loại bỏ các phần tử nhỏ hơn phần tử hiện tại khỏi deque
    while (dq.length > 0 && a[dq[dq.length - 1]] < a[i]) {
      dq.pop();
    }
    // Thêm phần tử hiện tại vào deque
    dq.push(i);
    // Nếu cửa sổ đã đủ k phần tử, thêm max của subarray vào mảng kết quả
    if (i >= k - 1) {
      result.push(a[dq[0]]);
    }
  }
  // In ra mảng kết quả
  return result;
};

/**
 *
 * @param {Number[]} arr
 * @param {Number[]} queries
 * @returns {Number[]}
 */
function solve(arr, queries) {
  queries = queries.reverse();
  const minimum = [];

  while (queries.length) {
    const d = queries.pop();

    const arrMi = maxOfSubarrays(arr, d);
    minimum.push(Math.min(...arrMi));
  }

  return minimum;
}
