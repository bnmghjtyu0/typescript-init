// 觀念驗證 1
// 請問以下的程式回傳值為何?
// (function(){
//   function test(){return 2;}
//   var test = function() {
//     return 1;
//   }
//   return test();
// })();

// Ans: 1

// 觀念驗證 2
// 請問以下的程式回傳值為何?
// (function(){
//   return test();
//   var test = function() {
//     return 1;
//   }
//   function test(){return 2;}
// })();

// Ans: 2 (Hoisting 特性)

// 觀念驗證 3
// 請問以下的程式回傳值為何?
// var a = 1;
// (function(){
//   let a = 2;
//   var test = function() {
//     return ++a;
//   }
//   return test();
// })();

// Ans: 2+1=3 (閉包的觀念)

// 觀念驗證 4-1
// 請問以下的程式回傳值為何?
// (function() {
//   let a = 1;
//   var test = function() {
//     console.log(a);
//     let a = 2;
//     console.log(a);
//   };
//   return test();
// })();

// Ans:error (發生一個錯誤，底下不執行)

// 觀念驗證 4-2
// 請問以下的程式回傳值為何?
(function() {
  let a = 1;
  var test = function() {
    console.log(a);
    {
      let a = 2;
      console.log(a);
    }
  };
  return test();
})();

// Ans:1 2  (區域變數的觀念)

// 觀念驗證 5-1 let
// 請問以下的程式回傳值為何? (Shadowing)
(function() {
  let matrix = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i];
    for (let i = 0; i < currentRow.length; i++) {
      sum += currentRow[i];
    }
  }
  console.log(sum);
})();

// Ans:18

// 觀念驗證 5-2 var
// 請問以下的程式回傳值為何? (Shadowing)
(function() {
  var matrix = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];
  var sum = 0;
  for (var i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i];
    for (var i = 0; i < currentRow.length; i++) {
      sum += currentRow[i];
    }
  }
  console.log(sum);
})();

// Ans:6

// 觀念驗證 6
// 請問以下的程式回傳值為何? (Shadowing)
(function() {
  let getCity;
  let city = "Taiwan";
  if (true) {
    let city = "Seatte";
    getCity = function() {
      return city;
    };
  }
  return getCity();
})();

// Ans:Seatte

// 觀念驗證 7
// 請問以下兩段程式會分別如何執行?
(function() {
  for (let i = 0; i < 10; i++) {
    setTimeout(function() {
      console.log(i);
    }, 100 * i);
  }
})();
// Ans: 0 ~ 9
(function() {
  for (var i = 0; i < 10; i++) {
    setTimeout(function() {
      console.log(i);
    }, 100 * i);
  }
})();

// Ans:10個10
