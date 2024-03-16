/**
 *
 * @param {String} string
 * @returns {String}
 */
const miniumString = (string) => {
  let isExist9 = false;
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (!isExist9 && char === "9") (isExist9 = true) && (newString += char);
    // Chu so '9' xuat hien bao nhien lan trong chuoi thi 'superDigit' cua no van bang mot lan 9.
    // 9999999, 999999 hoac 9 thi superDigit deu bang 9
    // Vi vay chi can lai mot chu so 9 trong chuoi.
    else if (char !== "0" && char !== "9") newString += char; // Chu so '0' khong co y nghia gi vi tong cua 0 luon bang 0.
    // Co the xoa bo cac chu so '0' ma khong lam sai lech ket qua.
  }
  return newString;
};

/**
 *
 * @param {String} string
 * @returns {Number}
 */
const onedig = (string) => {
  let superDigit = 0;
  while (true) {
    let sum = 0;
    for (let i = 0; i < string.length; i++) {
      sum += parseInt(string[i]);
    }
    superDigit = sum;
    if (superDigit <= 9) return superDigit;
    string = superDigit.toString();
    sum = 0;
  }
};

/**
 *
 * @param {String} n
 * @param {Number} k
 * @returns {Number}
 */
function superDigit(n, k) {
  if (n.length > 100) n = miniumString(n);
  if (k > 9) k = 9;
  // Ket qua cua 'superDigit' chi thay doi trong pham phi lap lai cua chuoi nam trong khoang (0 - 9)
  // '1' lap lai 1 lan => superDigit('1) = 1.
  // '1' lap lai 2 lan => superDigit('11') = 2
  // '1' lap lai 9 lan => superDigit('111111111') = 9
  // '1' lap lai 10 lan => superDigit('1111111111') = 1 trung voi superDigit('1') lap lai 1 lan.
  // Cac lan lap lai lon hon 9 la khong can thiet de tim ra superDigit

  // Cach 1
  const oneDig = onedig(n);
  const superDigit = onedig((oneDig * k).toString());
  // superDigit(superDigit(n) * k) === superDigit('n' lap lai 'k' lan).
  // Chi can tinh a = superDigit(n), sau do tinh superDigit(a * k) giup giam do dai cua chuoi 'n' vi khong phai lap lai no 'k' truoc khi tim superDigit.
  return superDigit;

  // Cach 2
  // let p = "";
  // for (let i = 0; i < k; i++) {
  //   p += n;
  // }
  // while (true) {
  //   let superDigit = 0;
  //   let sum = 0;
  //   for (let i = 0; i < p.length; i++) {
  //     sum += parseInt(p[i]);
  //   }
  //   superDigit = sum;
  //   if (superDigit <= 9) return superDigit;
  //   p = superDigit.toString();
  //   sum = 0;
  // }
}

// const a = superDigit("4", 10);
// console.log(a);
