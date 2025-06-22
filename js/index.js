var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ProductType_img;
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
// let test = 1 + "11";
// console.log(test, typeof test);
// console.log("abc");
// let test2 = "11" - 1;
// console.log("test2: ", test2);
/*
    function type
    kiểu dữ liệu trả về của hàm
    (input1: type, input2: type): responseType => {
        return response;
    }
*/
let tinhTong = (a, b) => {
    return a + b;
};
const dtb = tinhTong(3, 3);
// viết 1 function nhận vào 1 tham số là chuỗi và trả về chuỗi "Hello" + tham số
const sayHello = (name) => {
    return `Hello ${name}`;
};
sayHello("ABC");
let renderContent = (callback, content, selector) => {
    // document.querySelector("#content").innerHTML = `
    //     <h1>Chào mừng bạn đến với Cybersoft: ${content}</h1>
    // `;
    callback(selector, content);
};
let renderCard = (selector, noiDung) => {
    if (document.querySelector(selector)) {
        document.querySelector(selector).innerHTML = noiDung;
    }
};
renderContent(renderCard, "<p style='color: red'>Hello Cybersoft BC81</p>", "#content");
let renderTitle = (title) => {
    document.querySelector(".title").innerHTML = title;
};
// renderContent(renderTitle, "Đây là bài học Typescript");
renderContent(renderCard, "Đây là bài học Typescript", ".title");
let res3 = "string";
res3 = 124;
res3 = null;
let product1 = { id: "1", name: "iphone", price: 6000 };
let product2 = {
    id: "1",
    name: "iphone",
    price: 6000,
    description: "đây là iphone",
};
let student1 = {
    id: "111",
    fullName: "Nguyễn Văn A",
    email: "a@gmail.com",
    phone: "090826262627",
};
let student2 = {
    id: "111",
    fullName: "Nguyễn Văn A",
    email: "a@gmail.com",
    phone: "090826262627",
    address: "abcjs",
};
class Button {
}
class Banner {
}
let divA = {
    id: "",
    className: "",
    onclick: (e) => {
        // xử lý click
    },
};
/*
    Sự khác biệt giữa type và interface:
    ** Khi nào dùng interface:
    Khi cần mô tả cấu trúc của một đối tượng hoặc một class
    khi cần tận dụng tính năng mở rộng (extend) hoặc implement
    Khi cần hỗ trợ OOP

    ** Khi nào dùng type:
    khi cần định nghĩa format cho 1 kiểu dữ liệu phức tạp
    Khi cần khai báo các kiểu dữ liệu nâng cao như function type
*/
class ProductType {
    constructor() {
        _ProductType_img.set(this, void 0);
    }
    renderProduct() {
        console.log(__classPrivateFieldGet(this, _ProductType_img, "f"));
    }
}
_ProductType_img = new WeakMap();
let product5 = new ProductType();
// product5.img; // ko truy xuất được img do img là thuộc tính private
class NhanVien {
    constructor() {
        this.maNhanVien = "";
        this.hoTen = "";
        this.luong = 0;
        this.bonus = 1000;
    }
    hienThiLuong() {
        console.log(this.luong); // OK: Truy cập private từ bên trong lớp
    }
    hienThiBonus() {
        console.log(this.bonus); // OK: Truy cập private từ bên trong lớp
    }
    getBonus() {
        return this.bonus;
    }
}
class NhanVienFullTime extends NhanVien {
    // private hienThiBonus(): void {
    //     console.log(this.bonus); // OK: Truy cập protected từ lớp con
    // }
    hienThiLuong() {
        // console.log(this.luong); // Lỗi: private không truy cập từ bên ngoài được
    }
    handleBonus() {
        const bonusParent = this.getBonus();
        // xử lý logic
    }
}
const nv = new NhanVien();
nv.maNhanVien = "NV001"; // OK: Truy cập public
nv.hoTen = "Nguyễn Văn A"; // OK: Truy cập public
// nv.luong = 2000; // Lỗi: Không thể truy cập private từ bên ngoài
// nv.bonus = 500; // Lỗi: Không thể truy cập protected từ bên ngoài
nv.hienThiLuong(); // OK: Truy cập public
