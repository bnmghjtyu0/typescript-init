// 型別轉換

// string to number 方法1
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// string to number 方法2
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

// 轉型為HTMLAnchorElement 此時才會有 href 屬性
let a = <HTMLAnchorElement>document.getElementById('myLink'); // HTMLElement 型別
a.href = "http://google.com.tw"