function flatten(arr){
    let result = [];
    
    function helper(arr) {
        if (arr.length !== 0) {
            if (Array.isArray(arr[0])) {
                helper(arr[0]);
            } else {
                result.push(arr[0]);
            }
            
            helper(arr.slice(1));
        }
    }
    
    helper(arr);
    
    return result;
}