class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        const newNode = new Node(val);
        if(!this.first) {
            this.first = this.last = newNode;
        } else {
            this.last.next = node;
            this.last = node;
        }

        return ++this.size;
    } 

    dequeue() {
        if (!this.first) return null;

        const oldfirst = this.first;
        this.first = this.first.next;
        oldfirst.next = null;
        this.size--;

        if(this.size === 0) {
            this.last = null;
        }

        return oldfirst.value;
    }
}