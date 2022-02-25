function collectStrings(obj) {
    const result = [];
    
    if(typeof obj !== 'object') {
        return null;
    }
    
    function helper(obj) {
        for(let key in obj) {
            const val = obj[key];
            
            if (typeof val === 'string') result.push(val);
            
            if (typeof val === 'object') helper(val);
        }
    }
    
    helper(obj);
    
    return result;
}

// function collectStrings(obj) {
//     var stringsArr = [];
//     for(var key in obj) {
//         if(typeof obj[key] === 'string') {
//             stringsArr.push(obj[key]);
//         }
//         else if(typeof obj[key] === 'object') {
//             stringsArr = stringsArr.concat(collectStrings(obj[key]));
//         }
//     }
 
//     return stringsArr;
// }

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"])