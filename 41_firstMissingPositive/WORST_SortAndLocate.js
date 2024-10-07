var firstMissingPositive = function (nums) {
    let min = 1
    nums.sort((a, b) => a - b)
    for (const num of nums) {
        if(num <= 0 || num > nums.length) continue
        if (min == num) min++
    }
    return min++
};