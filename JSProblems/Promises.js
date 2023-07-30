let p1 = new Promise((resolve, reject) => setTimeout(() => {
    resolve("Resolved after 3 sec");
}, 4000));
let p2 = new Promise((resolve, reject) => reject("Error Occurred"));
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved after 3 sec");
    }, 3000);
});

let allPromises = [p1, p2, p3]; // Include all promises in the `allPromises` array

// let promises = Promise.all(allPromises);
// let promises = Promise.allSettled(allPromises);
// let promises = Promise.any(allPromises);
let promises = Promise.race(allPromises);

promises.then((data) => console.log(data)).catch((err) => console.log(err));
