const arr = [-5, -4, -2, 0, 2, 4, 6, 8]

function sumZero(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[j] + arr[i] === 0) return [arr[i], arr[j]]
        }
    }
    return []
}

function sumZeroOptimized(arr) {
    let left = 0
    let right = arr.length - 1
    while (left < right) {
        let sum = arr[left] + arr[right]

        if (sum === 0) return [arr[left], arr[right]]
        else if (sum > 0) right--;
        else left++;
    }
    return []
}

console.log(sumZero(arr))  //  [-4,4]
console.log(sumZeroOptimized(arr))  //  [-4,4]