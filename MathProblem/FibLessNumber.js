// Print the fibonacci series less than n

function fibonacciLessThan(n) {
    let fibSeries = [0, 1];
    let currentFib = 1;

    while (currentFib < n) {
        fibSeries.push(currentFib);
        const nextFib = fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2];
        currentFib = nextFib;

    }

    return fibSeries;
}



console.log(fibonacciLessThan(6))
console.log(fibonacciLessThan(10))
console.log(fibonacciLessThan(20))
console.log(fibonacciLessThan(1))
console.log(fibonacciLessThan(0))