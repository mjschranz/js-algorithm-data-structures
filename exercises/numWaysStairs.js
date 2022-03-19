function numWays(n) {
    if (n === 0 || n === 1) return 1;

    return numWays(n - 1) + numWays(n - 2);
}

function numWaysBottomUp(n) {
    if (n === 0 || n === 1) return 1;

    const nums = new Array(n + 1);
    nums[0] = 1;
    nums[1] = 1;

    for(let i = 2; i <= n; i++) {
        nums[i] = nums[i - 1] + nums[i - 2];
    }

    return nums[n];
}

console.log(numWaysBottomUp(4))