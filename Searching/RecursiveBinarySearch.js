arr = [1, 34, 56, 90, 120, 678, 679, 890]


// For Binary Search the arr should be in sorted Order
function recursivebinarySearch(arr, searchItem) {
    return search(arr, searchItem, 0, arr.length - 1)
}

function search(arr, searchItem, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        return `${searchItem} not found`
    }
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (searchItem === arr[middleIndex]) {
        return `${searchItem} found at ${middleIndex}`
    }
    else if (searchItem < middleIndex) {
        return search(arr, searchItem, leftIndex, middleIndex - 1)
    }
    else {
        return search(arr, searchItem, middleIndex + 1, rightIndex)
    }
}



const searchItem = 90
console.log(recursivebinarySearch(arr, searchItem))