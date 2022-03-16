class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
        this.insertTime = new Date().getTime();
    }
}

// Insertion - O(log n)
// Removal - O(log n)
// Search - O(n)
class PriorityQueue {
    values = [];

    enqueue(val, priority) {
        const newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    dequeue() {
        const removed = this.values[0];
        const end = this.values.pop();
        this.values[0] = end;
        this.sinkDown();
        return removed;
    }

    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true) {
            const leftIdx = (idx * 2) + 1;
            const rightIdx = (idx * 2) + 2;
            const leftChild = this.values[leftIdx];
            const rightChild = this.values[rightIdx];
            let swap = null;

            if (leftIdx < length) {
                if (leftChild.priority < element.priority) {
                    swap = leftIdx;
                }
            }

            if (rightIdx < length) {
                if (
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)) {
                    swap = rightIdx;
                }
            }

            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

let ER = new PriorityQueue();

ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("nail foot", 3)
console.log(ER.values);
ER.dequeue();
console.log(ER.values);