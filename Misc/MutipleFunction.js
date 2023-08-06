function sum(a, b) {
    return a + b
}
function sub(a, b) {
    return a - b
}
function div(a, b) {
    return a / b
}
function mul(a, b) {
    return a * b
}

const arr = [sum, sub, div, mul]

for (item of arr) {
    console.log(item(20, 10))
}