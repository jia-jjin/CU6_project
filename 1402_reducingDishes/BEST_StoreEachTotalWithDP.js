var maxSatisfaction = function(satisfaction){
    satisfaction.sort((a,b) => b-a)
    let max = 0
    let val = satisfaction[0]
    let sum = val
    for (let i = 1; i < satisfaction.length; i++){
        val += satisfaction[i]
        sum += val
        max = Math.max(sum, max)
    }
    return max
}