// Immediately Invoked Function Expression
(() => {
    console.log("Hello World")
})()

let a = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(200)
        }, 4000)
    })
}

// Asynchronous IIFE

(async () => {
    let b = await a()
    console.log(b)
    let c = await a()
    console.log(c)
    let d = await a()
    console.log(d)
})()