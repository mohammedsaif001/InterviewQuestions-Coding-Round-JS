
let arr = [3, 4, 1, 2, 3, 76, 89]

Array.prototype.myMap = function (cb) {
    let output = []
    let arr = this
    for (i = 0; i < arr.length; i++) {
        output.push(cb(arr[i], i, arr))
    }
    return output
}

let arrRes = arr.myMap((res) => res + 10)
console.log(arrRes)
