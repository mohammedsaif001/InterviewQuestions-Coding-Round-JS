arr = [1, 34, 56, 90, 120, 678, 679, 890]


// For Binary Search the arr should be in sorted Order
function binarySearch(arr, searchItem) {
    let leftIndex = 0
    let rightIndex = arr.length - 1
    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if (searchItem < arr[middleIndex]) {
            rightIndex = middleIndex - 1
        } else if (searchItem > arr[middleIndex]) {
            leftIndex = middleIndex + 1
        } else if (searchItem === arr[middleIndex]) {
            return `${searchItem} Found at Index ${middleIndex}`
        }
    }
    return `${searchItem} not Found`
}

const searchItem = 90
console.log(binarySearch(arr, searchItem))