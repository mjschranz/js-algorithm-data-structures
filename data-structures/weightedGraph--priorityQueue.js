class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({val, priority});
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
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