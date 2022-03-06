class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.tail) return undefined;

        let oldTail = this.tail;
        if (this.length === 1) {
            this.head = this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;   
        }

        oldTail.prev = oldTail.next = null;
        this.length--;

        return oldTail;
    }

    shift() {
        if (!this.head) return undefined;

        const oldHead = this.head;
        if (this.length === 1) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;   
        }

        oldHead.prev = oldHead.next = null;
        this.length--;

        return oldHead;
    }

    unshift(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }

        this.length++;
        return this;
    }

    print() {
        let current = this.head;
        while(current) {
            console.log(current.val);
            current = current.next;
        }
    }

    insert(val, position) {
        if (position < 0 || position > this.length)  return false;
        if (position === this.length) return !!this.push(val);
        if (position === 0) return !!this.unshift(val);
        let node = new Node(val);
        let prev = this.get(position - 1);
        let temp = prev.next;

        prev.next = node;
        node.prev = prev;
        node.next = temp;
        temp.prev = node;
        this.length++;

        return true;
    }

    get(position) {
        if(position < 0 || position > this.length)  return null;

        if (position <= this.length / 2) {
            let i = 0;
            let node = this.head;

            while (i < position) {
                node = node.next;
                i++;
            } 
        } else {
            let i = this.length - 1;
            let node = this.tail;

            while(i > position) {
                node = node.prev;
                i--;
            }
        }

        return node;
    }

    set(position, val) {
        const node = this.get(position);
        if (node) node.val = val;

        return node;
    }

    remove(position) {
        if (position < 0 || position > this.length)  return false;
        if (position === this.length - 1) return !!this.pop();
        if (position === 0) return !!this.shift();
        let removed = this.get(position);
        
        removed.prev.next = removed.next;
        removed.next.prev = removed.prev;

        removed.next = removed.prev = null;
        this.length--;

        return removed;
    }
}

const ll = new DoublyLinkedList();