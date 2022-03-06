class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
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
            this.tail = node;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.tail) {
            return undefined;
        }

        let temp = this.head;
        let newTail = current;
        while(temp.next) {
            newTail = temp;
            temp = temp.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) this.head = this.tail = null;

        return temp;
    }

    shift() {
        if (!this.head) return undefined;

        const oldHead = this.head;
        this.head = this.head.next;
        oldHead.next = null;
        this.length--;

        if(this.length === 0) {
            this.tail = null;
        }

        return oldHead;
    }

    unshift(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = this.tail = node;
        } else {
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
        node.next = temp;
        this.length++;

        return true;
    }

    get(position) {
        if(position < 0 || position > this.length) {
            return null;
        }

        let i = 0;
        let node = this.head;

        while (i < position) {
            node = node.next;
            i++;
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
        let prev = this.get(position - 1);
        let removed = prev.next;
        prev.next = prev.next.next;
        this.length--;

        return removed;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let prev = null;
        let next;
        for(let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return this;
    }
}

const ll = new SinglyLinkedList();
