const randomString = "Tran Dang Khoa";
// "Tran Dang Khoai" -> "tran dang khoai" -> "khoai" -> "KHOAI"
const randomString2 = randomString
  .concat("i")
  .toLowerCase()
  .slice(10, 15)
  .toUpperCase();
console.log(randomString2);
