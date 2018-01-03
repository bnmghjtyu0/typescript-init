// a:any;      //動態型別
// a:number;   //數字
// a:string;   //字串
// a:boolean;  //布林
// a:void;     //未定義型別 undefined & 空值型別 null
// a:number[]; //陣列1
// x:[string,number] //陣列2
// enum Color {Red, Green, Blue}  //列舉型別
// let c: Color = Color.Green;

// 布林型別(boolean)
let isDone: boolean = true;

// 數值型別(number)
let decimal: number = 6;
let hex: number = 0xf00d;

// 字串型別(string)
let color: string = "blue";
// back tick `` 反向單引號、重音符(可包含斷行符號)
let fullName: string = `Will`;
let age: number = 27;
let sentence: string = `Hello, my name is ${fullName}. I'll be ${age + 1}`;

// 簡單陣列型別( Array )
let list: any[] = [1,true,"free"];
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];

// 複雜陣列型別( Tuple )
let x: [string, number];
x = ["hello", 10];         //ok
x = ["hello", 10, true];   //ok
x = [10,"hello"]           //error
x = [10]                   //error

// 列舉型別 ( enum )
enum Color {Red, Green, Blue};
let c:Color = Color.Green //1

enum Color {Red=1,Green,Blue};
let c:Color = Color.Green; //2

enum Color {Red=1,Green=2,Blue=4};
let c:Color = Color.Green; //2

enum Color {Red=1,Green,Blue};
let colorName:string = Color[2]; //Green

// 物件型別 (Object)
let prettySure:{} = 4;
let obj:{name:string};
obj.name = "will"       //ok

// arrow function 箭頭函式
// print 型別為 function 回傳值為 number
let obj: {print () => number} 

// void 型別
// 通常只會在 function的回傳值
function warnUser():void {
  alert("This is my warning message")
}


// Interface 介面
// 宣告物件型別
// 方法一
function printLable(labelledObj: {label:string}{
  console.log(labelledObj.label);
})
// 傳入參數
let myObj = {size:10,label:"Size 10 Object"};
printLable(myObj); 

// 方法二-((多傳入可以，少傳入不行
interface ILable {
  lable:string;
  size: number;
  color?:string; //透過 ? 符號設定此屬性為非必要屬性  color就不一定要傳入
  [propName: string]:any; //允許任意屬性傳入
}
function printLable(labelledObj:ILable {
  console.log(labelledObj.label);
})

// 物件實字表示法 
let myObj = {size:10,label:"Size 10 Object"};
printLable(myObj);


// Class 類別
// 基本結構
class Greeter {
  greeting:string;      // 設為公開屬性
  private title:string; //宣告為私有屬性
  // 建構式
  constructor(message: string,title:string) {
    this.greeting = message;
    this.title = title;
  }
  // 方法 不需要打function
  greet() {
    return "Hello, " + this.greeting
  }
}
let greeter = new Greeter("world");