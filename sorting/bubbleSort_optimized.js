function bubbleSort(arr) {
    let noSwap = false;
    for (var i = arr.length; i > 0; i--) {
        noSwap = true;
    
        for(var k = 0; k < i - 1; k++) {
            if(arr[k] > arr[k+1]){
                const temp = arr[k];
                arr[k] = arr[k+1];
                arr[k+1] = temp;
                noSwap = false;
            }
        }

        if (noSwap) {
            break;
        }
    }

    return arr;
}