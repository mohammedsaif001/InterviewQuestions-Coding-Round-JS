let arr = [3, 4, 12, 1, 2, 3, 76, 89]


function BubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
}
console.log(arr)

BubbleSort(arr)
console.log(arr)

