const arr = [9, 4, 12, 1, 2, 3, 76, 89]

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j + 1] = numberToInsert
    }
}

insertionSort(arr)
console.log(arr)
