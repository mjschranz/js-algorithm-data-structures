// function capitalizeFirst(arr) {
//    return arr.map(s => s[0].toUpperCase() + s.slice(1));
// }

function capitalizeFirst (array) {
    if (array.length === 1) {
      return [array[0].toUpperCase()];
    }
    let res = capitalizeFirst(array.slice(0, -1));
    res.push(array.slice(array.length-1)[0].toUpperCase());
    return res;
   
}