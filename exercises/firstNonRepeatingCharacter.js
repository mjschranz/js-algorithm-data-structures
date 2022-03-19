function asciiDiff(a, b = "a") {
    return a.charCodeAt(0) - b.charCodeAt(0);
}

// function firstNonRepeatingCharacter(string) {
//     const charCounts = new Array(26).fill(0);

//     for(let i = 0; i < string.length; i++) charCounts[asciiDiff(string[i])]++;
//     for(let k = 0; k < string.length; k++)  if(charCounts[asciiDiff(string[k])] === 1) return string[k];

//     return "_";
// }

function firstNonRepeatingCharacter(string) {
    for(let i = 0; i < string.length; i++) if(i === string.lastIndexOf(string[i])) return string[i];
    return "_";
}

console.log(firstNonRepeatingCharacter("abacabad"))