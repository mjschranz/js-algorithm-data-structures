// Insertion - O(log n)
// Removal - O(log n)
// Search - O(n)
class MaxBinaryHeap {
    values = [];

    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
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
                if (leftChild > element) {
                    swap = leftIdx;
                }
            }

            if (rightIdx < length) {
                if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
                    swap = rightIdx;
                }
            }

            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }

    extractMax() {
        const oldMax = this.values[0];
        const end = this.values.pop();
        this.values[0] = end;
        this.sinkDown();
        return oldMax;
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(55);
heap.insert(1);
heap.insert(100);

const old = heap.extractMax();
console.log(heap.values, old);