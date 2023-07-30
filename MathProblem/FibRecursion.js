// Fibonacci number of nth numbner

function fibonacciRecursion(n) {
    if (n < 0) return
    if (n < 2) return n
    return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2)
}

console.log(fibonacciRecursion(0));