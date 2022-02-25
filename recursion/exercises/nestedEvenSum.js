function nestedEvenSum(obj) {
    let total = 0;
  
    if(typeof obj !== 'object') {
        return null;
    }
    
    function helper(obj) {
      for (let key in obj) {
          const val = obj[key];
  
          if (typeof val === 'object') {
              helper(val);
          }
          
          if (typeof val === 'number' && val % 2 === 0) {
              total += val;
          }
      }
    }
    
    helper(obj);
    
    return total;
  }
  
  var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  
  nestedEvenSum(obj1); // 6
  // nestedEvenSum(obj2); // 10
  