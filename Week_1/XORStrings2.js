process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
  input += chunk;
});
process.stdin.on("end", function () {
  const [l1, l2] = input
    .trim()
    .split(/\n|\r/)
    .map((e) => e.trim().split(""));
  const XOR = [];
  l1.forEach((e, i) => {
    e === l2[i] ? XOR.push(0) : XOR.push(1);
  });

  console.log(XOR.join(""));
});
