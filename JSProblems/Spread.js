// Spreaad Operator
// Example 1 
let name = "saif"
let arr = [...name]
console.log(arr)  // [s,a,i,f]


// Example 2
let arr1 = [10, 20, 30]
let obj = { ...arr1 }
console.log(obj)  //{0:10.1:20,2:30}

// Example 3
function sum(a, b, c) {
    return a + b + c
}

console.log(sum(...arr1))


// Example 3
// Practical

const obj2 = {
    name: "Saif",
    company: "xyz",
    address: "pqr"
}

console.log({ ...obj2, address: "Bangalore" })  //Changing a part of the object by spreading everything else as it is
