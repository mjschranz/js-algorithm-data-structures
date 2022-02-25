function merge(arr1, arr2) {
    let merged = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length) {
        const a1 = arr1[i];
        const a2 = arr2[j];
        
        if (a1 > a2) {
            merged.push(a2);
            j++;
        }
        else if (a1 < a2) {
            merged.push(a1);
            i++;
        }
    }

    while(i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }

    while(j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    return merged;
}


function mergeSort(arr) {
    if(arr.length <=1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

mergeSort([10,24,76,73,34,5,70])