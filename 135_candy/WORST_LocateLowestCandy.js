var candy = function (ratings) {
    let candies = Array(ratings.length).fill(1)
    let tempRatings = ratings.slice()
    while (!checkIfCorrect(candies, ratings)) {
        const lowestIdx = parseInt(findLowestNumIdx(tempRatings))
        //towards left
        for (let i = lowestIdx - 1; i >= 0; i--) {
            if (ratings[i] > ratings[i + 1]) {
                if (candies[i] <= candies[i + 1]) candies[i] = candies[i + 1] + 1
            } else break
        }
        //towards right
        for (let j = lowestIdx + 1; j < ratings.length; j++) {
            if (ratings[j - 1] < ratings[j]) {
                if (candies[j - 1] >= candies[j]) candies[j] = candies[j - 1] + 1
            } else break
        }
        tempRatings[lowestIdx] = Infinity
    }
    return candies.reduce((cur, sum) => cur + sum, 0)
};

var findLowestNumIdx = function (ratings) {
    var lowest = Infinity
    var lowestIdx = 0
    for (let ratingIdx in ratings) {
        if (ratings[ratingIdx] < lowest) {
            lowest = ratings[ratingIdx]
            lowestIdx = ratingIdx
        }
    }
    return lowestIdx
}

var checkIfCorrect = function (candies, ratings) {
    for (let i = 0; i < candies.length - 1; i++) {
        if (ratings[i] < ratings[i + 1]) {
            if (candies[i] >= candies[i + 1]) return false
        } else if (ratings[i] > ratings[i + 1]) {
            if (candies[i] <= candies[i + 1]) return false
        }
    }
    return true
}

