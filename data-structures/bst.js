class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
        this.count = 1;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new Node(val);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let parent = this.root;

        while(parent) {
            if (newNode.value < parent.value) {
                if (!parent.left) {
                    parent.left = newNode;
                    parent = null;
                } else {
                    parent = parent.left;
                }
            } else if (newNode.value > parent.value) {
                if (!parent.right) {
                    parent.right = newNode;
                    parent = null;
                } else {
                    parent = parent.right;
                }
            } else if (newNode.value === parent.right) {
                parent.right.count++;
                parent = null;
            } else if (newNode.value === parent.left) {
                parent.left.count++;
                parent = null;
            }
        }

        return this;
    }

    find(val) {
        if (this.root === null) return false;

        let current = this.root;
        let found = false;
        while(current && !found) {
            if (val < current.value) {
                current = current.left;
            } else if (val > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }

        return current;
    }

    contains(val) {
        return !!this.find(val);
    }

    // If you know a solution is not far from the root of the tree,
    // a breadth first search (BFS) might be better.

    // If the tree is very deep and solutions are rare, depth first search (DFS) might take an
    // extremely long time, but BFS could be faster.

    // If the tree is very wide, a BFS might need too much memory, so it might be completely impractical.

    // If solutions are frequent but located deep in the tree, BFS could be impractical.

    // If the search tree is very deep you will need to restrict the search depth for depth first search (DFS),
    //  anyway (for example with iterative deepening).

    BFS() {
        if(!this.root) return null;

        const queue = [this.root];
        const data = [];
        const node = this.root;

        while(queue.length) {
            node = queue.shift();
            data.push(node.value);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return data;
    }

    // DFS
    // Look at left side first before right.
    // USeful cloning/duplicating or flattening out a tree.
    preOrder(start) {
        const data = [];
        const current = start || this.root;
        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }

    // DFS
    // 
    postOrder(start) {
        const data = [];
        const current = start || this.root;
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(current);
        return data;
    }

    // DFS
    // Set of nodes in their order
    inOrder(start) {
        const data = [];
        const current = start || this.root;
        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
}