function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        }
        else if (arr[i] > pivot) {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]

}

const arr = [-9, 2, 3, 1, -10, 10]
console.log(arr)
const arrNew = quickSort(arr)
console.log(arrNew)
