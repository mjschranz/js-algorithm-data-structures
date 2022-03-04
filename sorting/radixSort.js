// function getDigit(num, digit) {
//     const strNum = num.toString();

//     return +(strNum[strNum.length - 1 - digit] || 0);
// }

// function digitCount(digit) {
//     return digit.toString().length;
// }

function mostDigits(arr) {
    let max = 0;
    for (let index = 0; index < arr.length; index++) {
        max = Math.max(max, digitCount(arr[index]))
    }

    return max;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function radixSort(arr) {
    let buckets = new Map();
    const max = mostDigits(arr);

    for (let i = 0; i < max; i++){
        for(let  j = 0; j < arr.length; j++) {
            const num = getDigit(arr[j], i);
            let mapValue = buckets.get(num);

            if (!mapValue) {
                mapValue = [];
            }

            mapValue.push(arr[j]);
            buckets.set(num, mapValue);
        }

        arr = [];
        for(let [key, value] of buckets) {
            arr = [...arr, ...value];
        }
        buckets = new Map();
    }

    return arr;
}

radixSort([4,76,2222,23,89, 5,34, 3245, 26234, 23888,785]);