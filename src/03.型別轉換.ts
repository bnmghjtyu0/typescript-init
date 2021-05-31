// 型別轉換
// string to number 方法1
let someValueA: any = "this is a string";
let strLengthA: number = (<string>someValueA).length;

// string to number 方法2
let someValueB: any = "this is a string";
let strLengthB: number = (someValueB as string).length;

// 轉型為HTMLAnchorElement 此時才會有 href 屬性
// let a = <HTMLAnchorElement>document.getElementById('myLink'); // HTMLElement 型別
// a.href = "http://google.com.tw"