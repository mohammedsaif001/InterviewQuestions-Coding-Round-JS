// Calculate Fibonacci Series upto n series
function Fibonacci(n) {
    let arr = [0, 1]
    for (let i = 2; i < n; i++) {
        arr.push(arr[i - 1] + arr[i - 2])
    }
    return arr
}

const fibSeries = Fibonacci(6)
console.log(fibSeries)