// function areThereDuplicates() {
//   const values = [...arguments];
//   const cache = {};

//   for (let v of values) {
//       cache[v] = ++cache[v] || 1;

//       if (cache[v] === 2) {
//           return true;
//       }
//   }
  
//   return false;
// }

// function areThereDuplicates() {
//   const values = [...arguments];
//   const cache = {};
//     let left = 0;
//     let right = values.length - 1;

//   while (left <= right) {
//       let rightVal;

//       const leftVal = values[left];
//       cache[leftVal] = ++cache[leftVal] || 1;

//       if (left !== right) {
//           rightVal = values[right];
//           cache[rightVal] = ++cache[rightVal] || 1;
//       }

//       if (cache[leftVal] >= 2 || cache[rightVal] >= 2) {
//           return true;
//       }

//       left++;
//       right--;
//   }
  
//   return false;
// }

function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
  }
  
  // function areThereDuplicates() {
  //   return new Set(arguments).size !== arguments.length;
  // }
  
  areThereDuplicates(1,2,3);
  // areThereDuplicates(1,2,2);
  // areThereDuplicates('a', 'b', 'c', 'a');