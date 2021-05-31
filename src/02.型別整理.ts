// 布林型別(boolean)
let isDone: boolean = true;

// 數值型別(number)
let decimal: number = 6;
let hex: number = 0xf00d;

// 字串型別(string)
let fullName: string = 'Richard';
let age: number = 18;
let sentence: string = `Hello, my name is ${fullName}. I'll be ${age + 1}`;

// 簡單陣列型別( Array )
let listA: any[] = [1, true, "free"];
let listB: string[] = ["RED", "BLUE"];
let listC: number[] = [1, 2, 3];
let listD: Array<number> = [1, 2, 3];

// 複雜陣列型別( Tuple )
let x: [string, number];
x = ["hello", 10];

// 列舉型別 ( enum )
enum Color { Red = 1, Green, Blue };
let c: Color = Color.Green; //2
let colorName: string = Color[2]; //Green

// 物件型別 (Object)
type ObjA = { name: string }
let objA: ObjA = { name: "Richard" };

// 一般 function 加入 interface
interface NumberFunction {
  (x: number, y: number): number,
}
function add(x: number, y: number): number {
  return x + y;
}

const func: NumberFunction = add;
func(1, 2); // = 3

// arrow function 箭頭函式
type Animal = (animal: string) => void
let animal: Animal = (animal) => { console.log(animal) }

// void 型別
// 通常只會在 function的回傳值
function warnUser(): void {
  alert("This is my warning message")
}

// 函數傳入物件
interface ILable {
  label: string;
  size: number;
  color?: string; //透過 ? 符號設定此屬性為非必要屬性  color就不一定要傳入
  [propName: string]: any; //允許任意屬性傳入
}
type MyObj = {
  size: number,
  label: string
}

// ---建立 function---
function printLable(labelledObj: ILable) {
  console.log(labelledObj.label);
}
// --- 執行 function---
let myObj: MyObj = { size: 10, label: "Size 10 Object" };
printLable(myObj);


// Class 類別
// 基本結構
class Greeter {
  greeting: string;      // 設為公開屬性
  private title: string | undefined; //宣告為私有屬性
  // 建構式
  constructor(message: string, title?: string) {
    this.greeting = message;
    this.title = title;
  }
  // 方法 不需要打function
  greet() {
    return "Hello, " + this.greeting
  }
}
let greeter = new Greeter("world");