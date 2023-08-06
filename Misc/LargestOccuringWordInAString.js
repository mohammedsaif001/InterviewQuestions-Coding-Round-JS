const str = "saif saif akbar kriti is a a a a a is a saif saif"

function mostOccuringString(str) {
    let arr = str.split(" ")
    let obj = {}
    let max = 0
    let maxWord = ""

    for (let item of arr) {
        obj[item] = obj[item] + 1 || 1
    }

    for (item in obj) {
        if (max < obj[item]) {
            max = obj[item]
            maxWord = item
        }
    }

    return maxWord

}

console.log(mostOccuringString(str))