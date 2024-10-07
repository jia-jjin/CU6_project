var maxSatisfaction = function (satisfaction) {
    satisfaction.sort((a, b) => b - a)
    let max = 0
    for (let i = 1; i <= satisfaction.length; i++) {
        const tempRes = calculateSatisfaction(satisfaction.slice(0, i))
        max = Math.max(max, tempRes)
        if (tempRes < max) break
    }
    return max
};

var calculateSatisfaction = function (z) {
    let time = 0
    for (let i = 0; i < z.length; i++) {
        time += z[z.length - i - 1] * (i + 1)
    }
    return time
}