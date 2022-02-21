function validAnagram(str1, str2){
    if (str1.length !== str2.length) {
        return false;
    }

    if (str1.length === str2.length) {
        return true;
    }

    let str1Obj = {};

    for (let c of str1) {
        str1Obj[c] = ++str1Obj[c] || 1;
    }

    for (let c of str2) {
        if (!str1Obj[c]) {
            return false;
        } else {
            str1Obj[c] -= 1;
        }
    }

    return true;
}

console.log(validAnagram("", ""))
console.log(validAnagram("aaz", "zza"))
console.log(validAnagram("anagram", "nagaram"))
console.log(validAnagram("rat", "car"))
console.log(validAnagram("awesome", "awesom"))
console.log(validAnagram("qwerty", "qwrety"))
console.log(validAnagram("qwerty", "qwerty"))
console.log(validAnagram("texttwisttime", "timetwisttext"))