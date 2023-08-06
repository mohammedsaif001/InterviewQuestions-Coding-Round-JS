// Rest Operator
// Example 1
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const [a, b, ...rest] = arr
// console.log(a, b, rest) // a = 1, b=2, rest = [3,4,5,6,7,8,9]

// If i dont want to unbind then i expect few elements
const [a, , , ...rest] = arr
console.log(a, rest)


// Example 2
function sum(a, b, ...rest) {
    let sum = a + b
    if (rest.length === 0) return sum
    rest.forEach((ele) => sum += ele)
    console.log(sum)
    return sum

}

sum(10, 20, 39, 44, 90)


