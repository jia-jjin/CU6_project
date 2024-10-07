var firstMissingPositive = function (nums) {
    nums = nums.filter(n => n > 0)
    for (let n of nums) {
        const index = Math.abs(n) - 1
        if (index < nums.length && nums[index] > 0) {
            nums[index] *= -1
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            return i + 1
        }
    }
    return nums.length + 1
};