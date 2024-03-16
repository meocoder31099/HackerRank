/**
 *
 * @param {Number} n
 * @param {Number} p
 * @returns {Number}
 */
function pageCount(n, p) {
  // if(n % 2 === 0) n ++; // Vì trang cuối chỉ có thể được in ở mặt trước, khi tổng số trang là số chẵn sẽ => sẽ cần thêm một trang để in trang cuối.
  //                       // Về cơ bản thì dù có tăng thêm n nên một đơn vị hay không cũng không gây ảnh hưởng gì.
  //                       // Vì khi lật trang sách một lần thì sẽ có được cả mặt sau của trang trước và mặt trước của trang sau.

  const mid = Math.floor(n / 2);
  let nFlip = Math.floor(p / 2);
  if (p > mid) nFlip = mid - nFlip;
  return nFlip;
}
