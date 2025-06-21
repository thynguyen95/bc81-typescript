// biên dịch sang es5, es6 sẽ khác nhau
let title = "cybersoft";
{
    let title = "Nguyễn Văn A";
}
let fullName = "Thy";
console.log(`Họ Tên: ${fullName} - ${title}`);
/* ------------------------------------- */
/*
    Type:
    js: khi khai báo giá trị, js sẽ tự hiểu type
    ts: khi tạo biến phải khai báo kiểu dữ liệu
    + primitive type: number, string, boolean, null, undefined
    + non primitive: object, array,...


    syntax: variableName: type = value
*/
let score = 10;
let phone = "0902262672";
phone = "10";
let isValid = false;
// cách khi báo array
let array = []; // bản chất array là object
console.log("array: ", typeof array);
let arrScore = [1, 2, 3, 4, 5, 6];
let arrName = ["A", "B", "C"];
let arrTest = [true, false, true];
// | : union type
let responseAPI = null;
responseAPI = "abc";
let responseAPI2 = undefined;
// tuple
let tuple = ["hello", 10];
tuple = ["abc", 1];
// any, unknow: nhận tất cả các giá trị mang kiểu dữ liệu khác nhau
// any: rủi ro khi kiểu dữ liệu ko xử lý được logic
let res = 1;
res++;
// unknow: phải kiểm tra type trước khi thực hiện logic
let res2 = 1;
if (typeof res2 === "number") {
    res2++;
}
// 1 + "11" = ??? => 111
let test = 1 + "11";
console.log(test, typeof test);
// let test2 = "11" - 1;
// console.log("test2: ", test2);
