let arr = [3, 4, 1, 2, 3, 76, 89]

Array.prototype.myFilter = function (cb) {
    let output = []
    let arr = this
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) { output.push(arr[i]) }
    }
    return output
}

let arrRes = arr.myFilter((item, i, arr) => {
    console.log(item, i, arr)
    return item > 10
}
)
console.log(arrRes)