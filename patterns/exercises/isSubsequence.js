// function isSubsequence(str1, str2) {
//     var i = 0;
//     var j = 0;
//     if (!str1) return true;
//     while (j < str2.length) {
//       if (str2[j] === str1[i]) i++;
//       if (i === str1.length) return true;
//       j++;
//     }
//     return false;
// }

//   function isSubsequence(str1, str2) {
//     if(str1.length === 0) return true
//     if(str2.length === 0) return false
//     if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
//     return isSubsequence(str1, str2.slice(1))
//   }

  function isSubsequence(str, cStr) {
    let curr = 0;
    let next = 1;
    let strIndex = 1;
    let matchedChars = 0;
    
    while (next < cStr.length) {
        const currL = cStr[curr];
        const nextL = cStr[next];
  
        if (currL !== str[0]) {
          strIndex = 1;
          matchedChars = 0;
          curr++;
          next = curr + 1;
        } else {
            matchedChars = matchedChars || 1;
            if (nextL === str[strIndex]) {
              strIndex++;
                matchedChars++;
              
              if (matchedChars === str.length) {
                  return true;
              }
            }
            next++;
        }
    }
    
    return false;
  }
  
  isSubsequence('hello', 'hello world')
  // isSubsequence('abc', 'acb')