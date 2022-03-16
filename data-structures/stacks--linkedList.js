class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        return this.unshift(val);
    }

    pop() {
        return this.shift();
    }

    shift() {
        if (!this.first) return undefined;

        const oldfirst = this.first;
        this.first = this.first.next;
        oldfirst.next = null;
        this.size--;

        if(this.size === 0) {
            this.last = null;
        }

        return oldfirst.value;
    }

    unshift(val) {
        const node = new Node(val);
        if (!this.first) {
            this.first = this.last = node;
        } else {
            node.next = this.first;
            this.first = node;
        }

        return ++this.size;
    }
}
