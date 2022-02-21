// function fib(num){
//     var a = 1, b = 0, temp;
  
//     while (num > 0){
//       temp = a;
//       a = a + b;
//       b = temp;
//       num--;
//     }
  
//     return b;
// }

function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ....

fib(4)