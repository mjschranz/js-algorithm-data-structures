class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
          let char = key[i];
          let value = char.charCodeAt(0) - 96
          total = (total * WEIRD_PRIME + value) & this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        const index = this._hash(key);
        const mapValue = this.keyMap[index] || [];
        mapValue.push([key, value]);
        this.keyMap[index] = mapValue;
    }

    get(key) {
        const index = this._hash(key);
        const mapValue = this.keyMap[index];

        if(!mapValue) {
            return undefined;
        }

        for(let pair of mapValue) {
            if(pair[0] === key) {
                return pair[1];
            }
        }

        return undefined;
    }

    keys(){
        const keys = [];

        for(let value of this.keyMap) {
            if (value){
                for(let pair of value) {
                    keys.push(pair[0]);
                }
            }        
        }

        return keys;
    }

    values(){
        const values = [];
        const cachedValues = {};

        for(let value of this.keyMap) {
            if (value){
                for(let pair of value) {
                    const val = pair[1];

                    if (!cachedValues[val]) {
                        values.push(val);
                        cachedValues[val] = true
                    }
                }
            }        
        }

        return values;
    }
}

let ht = new HashTable(17);
ht.set("Hello World", "goodbye");
ht.set("dogs", "are fine");
ht.set("cats", "are great");
ht.set("I love", "karen");
ht.set("I adore", "karen");

console.log(ht.get("cats"));
console.log(ht.keys())
console.log(ht.values())
console.log(ht)