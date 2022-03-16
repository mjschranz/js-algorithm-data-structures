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

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2, weight) {
        this.adjacencyList[v1].push({node: v2, weight});
        this.adjacencyList[v2].push({node: v1, weight});
    }

    shortestPath(start, end) {
        const distances = {};
        const previous = {};
        const queue = new PriorityQueue();
        const path = [];
        let smallest;
    
        // Build initial state
        for(let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                queue.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                queue.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        while(queue.values.length) {
            smallest = queue.dequeue().val;

            if (smallest === end) {
                while(previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }

            if (smallest || distances[smallest] !== Infinity) {
                for(let n in this.adjacencyList[smallest]) {
                    let nNode = this.adjacencyList[smallest][n];
                    let candidate = distances[smallest] + nNode.weight;

                    if (candidate < distances[nNode.node]) {
                        distances[nNode.node] = candidate;
                        previous[nNode.node] = smallest;
                        queue.enqueue(nNode.node, candidate);
                    }
                }
            }
        }

        return path.concat(smallest).reverse();
    }
}

let g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);

console.log(g.shortestPath("A", "E"));