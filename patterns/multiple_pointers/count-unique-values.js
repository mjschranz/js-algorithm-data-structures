function countUniqueValues(arr){
    const foundValues = {};
    let counter = 0;
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        const leftNum = arr[left];
        const rightNum = arr[right];
        
        counter = foundValues[leftNum] ? counter : counter + 1;
        counter = foundValues[rightNum] ? counter : counter + 1;
        
        foundValues[leftNum] = true;
        foundValues[rightNum] = true;

        if (leftNum > rightNum || leftNum === rightNum) {
            return counter;
        }
        
        left++;
        right--;
    }
    
    return counter;
}

console.log(countUniqueValues([1,1,1,1,2]));
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2,-1,-1,0,1]));
