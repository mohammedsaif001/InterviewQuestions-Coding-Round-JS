arr = [1, 90, 56, 87, 45, 10, 78]

function linearSearch(arr, searchItem) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchItem) {
            return `${searchItem} found at index ${i}`
        }
    }
    return `${searchItem} not Found`
}

const searchItem = 78
console.log(linearSearch(arr, searchItem))