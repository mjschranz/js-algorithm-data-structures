class Stack {
    _stack = [];

    push(val) {
        this._stack.push(val);
    }

    pop() {
        return this._stack.pop();
    }
}