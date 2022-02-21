function addUpTo(n) {
    return n * (n + 1) / 2;
}

const t3 = performance.now();
addUpTo(10000000);
const t4 = performance.now();
console.log(`Time Elapsed: ${(t4 - t3) / 1000} seconds`);