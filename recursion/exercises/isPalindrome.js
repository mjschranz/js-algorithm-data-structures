function isPalindrome(str){
    let result = '';

    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    
    function helper(str2) {
        if (str2.length === 0) return;
        
        result += str2[str2.length - 1];
        
       helper(str2.slice(0, str2.length - 1));
    }
    
    helper(str);
    
    return str === result;
}