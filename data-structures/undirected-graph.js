// Undirected Graph
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList.hasOwnProperty(vertex)) {
            this.adjacencyList[vertex] = [];
        }
    }

    findVertex(vertex){
        return this.adjacencyList[vertex];
    }

    addEdge(v1, v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
    }

    removeVertex(vertex) {
        this.adjacencyList[vertex].forEach(v => this.removeEdge(v, vertex));
        delete this.adjacencyList[vertex];
    }

    DFSRecursive(start) {
        const results = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
    
        if (!Array.isArray(this.adjacencyList[vertex]) || !this.adjacencyList[vertex].length) return;

        (function dfsHelper(v) {
            results.push(v);
            visited[v] = true;
            for(let v2 in adjacencyList[v]) {
                if (!visited[v2]) dfsHelper(v2)
            }
        }(start));

        return results;
    }

    DFSIterative(start) {
        const stack = [start];
        const results = [];
        const visited = {};

        visited[start] = true;
        while(stack.length) {
            const v = stack.pop();
            results.push(v);

            this.adjacencyList[v].forEach(n => {
                if(!visited[n]) {
                    visited[n] = true;
                    stack.push(n);
                }
            });
        }

        return results;
    }

    BFS(start) {
        const queue = [start];
        const results = [];
        const visited = {};

        visited[start] = true;
        while(queue.length) {
            const v = queue.shift();
            results.push(v);

            this.adjacencyList[v].forEach(n => {
                if(!visited[n]) {
                    visited[n] = true;
                    queue.push(n);
                }
            });
        }

        return results;
    }
}

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")