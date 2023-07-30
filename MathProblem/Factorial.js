function Factorial(n) {
    let res = 1
    if (n === 1 || n === 0) return res
    for (i = 1; i <= n; i++) {
        res *= i
    }
    return res
}

const fact = Factorial(5)
console.log(fact)