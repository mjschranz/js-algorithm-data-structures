function sumZero(arr) {
    const cachedValues = {};
    
    for(let num of arr) {
        if (num === 0) continue;

        cachedValues[num] = true;
        const flippedVal = (~num) + 1;
        if (cachedValues[flippedVal]) {
            return [num, flippedVal];
        }
    }

    return;
}

console.log(sumZero([-4,-3,-2,-1, 0,1,2,5]));
