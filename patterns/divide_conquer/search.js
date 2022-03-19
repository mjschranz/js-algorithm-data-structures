function search(array, val) {
    let min = 0;
    let max = array.length;

    while(min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currElem = array[middle];

        if (currElem < val) min = middle + 1;
        else if (currElem > val) max = middle - 1;
        else return middle;
    }

    return -1;
}