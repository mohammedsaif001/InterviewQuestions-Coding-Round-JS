const arr = ["testost", "testrost", "testraut", "testuio"]
const arr1 = ["testost", "testrost", "testraut", "kknskndk"]

const longestPrefix = (arr) => {
    if (arr.length < 1) return

    // Initial Word in the array
    let prefix = arr[0]

    // Iterating until last array
    for (i = 1; i < arr.length; i++) {
        // Checking if the arrays are starting with the initial array
        while (arr[i].indexOf(prefix) !== 0) {
            // If not starting with the initial word then remove the last letter  and then check
            prefix = prefix.slice(0, prefix.length - 1)
            // If that particular word is not matching then return emty
            if (prefix.length === 0) return ""
        }
    }
    return prefix

}

console.log(longestPrefix(arr))
console.log(longestPrefix(arr1))