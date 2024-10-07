var candy = function (ratings) {
    const candies = Array(ratings.length).fill(1)
    //towards left
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1
        }
    }
    //towards right
    for (let j = ratings.length - 2; j >= 0; j--) {
        if (ratings[j + 1] < ratings[j]) {
            if (candies[j] <= candies[j + 1]) candies[j] = candies[j + 1] + 1
        }
    }
    return candies.reduce((cur, sum) => cur + sum)
}