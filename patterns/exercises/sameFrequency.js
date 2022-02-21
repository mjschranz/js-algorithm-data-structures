function sameFrequency(num1, num2){
    const cache = {};
    
    for (let c of num1.toString()) {
        cache[c] =  ++cache[c] || 1;
    }
  
    for (let c of num2.toString()) {
        if (!cache[c]) {
            return false;
        }
        
        cache[c]--;
    }
    
    return true;
  }
  
  sameFrequency(182,281);
  sameFrequency(34,14);
  sameFrequency(3589578, 5879385);
  sameFrequency(22,222);