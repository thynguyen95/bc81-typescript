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

let score: number = 10;
let phone: string = "0902262672";
phone = "10";
let isValid: boolean = false;

// cách khi báo array
let array = []; // bản chất array là object
console.log("array: ", typeof array);

let arrScore: number[] = [1, 2, 3, 4, 5, 6];
let arrName: string[] = ["A", "B", "C"];
let arrTest: Array<boolean> = [true, false, true];

// | : union type
let responseAPI: string | null = null;
responseAPI = "abc";
let responseAPI2: undefined | string = undefined;

// tuple
let tuple: [string, number] = ["hello", 10];
tuple = ["abc", 1];

// any, unknow: nhận tất cả các giá trị mang kiểu dữ liệu khác nhau
// any: rủi ro khi kiểu dữ liệu ko xử lý được logic
let res: any = 1;
res++;

// unknow: phải kiểm tra type trước khi thực hiện logic
let res2: unknown = 1;
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

let tinhTong = (a: number, b: number): number => {
    return a + b;
};

const dtb = tinhTong(3, 3);

// viết 1 function nhận vào 1 tham số là chuỗi và trả về chuỗi "Hello" + tham số
const sayHello = (name: string): string => {
    return `Hello ${name}`;
};

sayHello("ABC");

// kiểu dữ liệu tự tạo
// Khi 1 hàm không có giá trị trả về thì kiểu dữ liệu của hàm là void
type CallBackType = (selector: string, input: string) => void;

let renderContent = (
    callback: CallBackType,
    content: string,
    selector: string
) => {
    // document.querySelector("#content").innerHTML = `
    //     <h1>Chào mừng bạn đến với Cybersoft: ${content}</h1>
    // `;

    callback(selector, content);
};

let renderCard = (selector: string, noiDung: string): void => {
    if (document.querySelector(selector)) {
        document.querySelector(selector).innerHTML = noiDung;
    }
};

renderContent(
    renderCard,
    "<p style='color: red'>Hello Cybersoft BC81</p>",
    "#content"
);

let renderTitle = (title: string) => {
    document.querySelector(".title").innerHTML = title;
};

// renderContent(renderTitle, "Đây là bài học Typescript");
renderContent(renderCard, "Đây là bài học Typescript", ".title");

type ResponseAPI = null | string | number;
let res3: ResponseAPI = "string";
res3 = 124;
res3 = null;

// ES6 :
// class Product {
//     id: string = "";
//     name: string = "";
//     price: number = 0;
// }

// let pro: Product = new Product();
// let prod1: Product = { id: "1", name: "iphone", price: 6000 };

// TS:
// type: dùng để format object và verify object có đầy đủ thuộc tính không
type Product = {
    id: string;
    name: string;
    price: number;
    description?: string; //optional property: có thể null
};

let product1: Product = { id: "1", name: "iphone", price: 6000 };
let product2: Product = {
    id: "1",
    name: "iphone",
    price: 6000,
    description: "đây là iphone",
};

// interface: giúp định nghĩa cấu trúc của dối tượng
// Khi khai báo 2 interface trùng tên thì sẽ không báo lỗi mà sẽ gộp 2 interface cùng tên thành 1 interface lớn
interface Student {
    id: string | number;
    fullName: string;
    email: string;
    phone: string;
}

let student1: Student = {
    id: "111",
    fullName: "Nguyễn Văn A",
    email: "a@gmail.com",
    phone: "090826262627",
};

// mở rộng interface
interface StudentEx extends Student {
    address: string;
}

let student2: StudentEx = {
    id: "111",
    fullName: "Nguyễn Văn A",
    email: "a@gmail.com",
    phone: "090826262627",
    address: "abcjs",
};

// implements interface
interface Control {
    id: string;
    className: string;
    onclick: (e: any) => void;
}

class Button implements Control {
    id: string;
    className: string;
    onclick: (e: any) => {
        // xử lý logic
        // xử lý chuyển trang
    };
}

class Banner implements Control {
    id: string;
    className: string;
    onclick: (e: any) => {
        // xử lý logic
        // xử lý hiển thị modal
    };
}

let divA: Control = {
    id: "",
    className: "",
    onclick: (e: any) => {
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
    #img: string;

    renderProduct(): void {
        console.log(this.#img);
    }
}

let product5 = new ProductType();
// product5.img; // ko truy xuất được img do img là thuộc tính private

class NhanVien {
    public maNhanVien: string = "";
    public hoTen: string = "";
    private luong: number = 0;
    protected bonus: number = 1000;

    public hienThiLuong(): void {
        console.log(this.luong); // OK: Truy cập private từ bên trong lớp
    }

    private hienThiBonus(): void {
        console.log(this.bonus); // OK: Truy cập private từ bên trong lớp
    }

    public getBonus(): number {
        return this.bonus;
    }
}

class NhanVienFullTime extends NhanVien {
    // private hienThiBonus(): void {
    //     console.log(this.bonus); // OK: Truy cập protected từ lớp con
    // }

    public hienThiLuong(): void {
        // console.log(this.luong); // Lỗi: private không truy cập từ bên ngoài được
    }

    private handleBonus() {
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
