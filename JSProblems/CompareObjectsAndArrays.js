// function compareObjects(obj1, obj2) {
//     // Checking Lengths of two objects if its not equal return false
//     let obj1Length = Object.keys(obj1).length;
//     let obj2Length = Object.keys(obj2).length;
//     if (obj1Length !== obj2Length) return false

//     // Looping each key value pair
//     for (let item in obj1) {
//         // If value is further object do recursion and check
//         // console.log(obj1[item], typeof obj1[item])
//         if (typeof obj1[item] === 'object' && typeof obj2[item] === 'object') {
//             if (!compareObjects(obj1[item], obj2[item])) {
//                 console.log("Inside type compare===============", obj1[item], obj2[item])

//                 return false
//             }

//         }
//         // If value is array then call Array Function
//         else if (Array.isArray(obj1[item]) && Array.isArray(obj2[item])) {
//             if (!compareArrays(obj1[item], obj2[item])) return false
//         }

//         // Basic Comparison of Objects
//         else if (obj1[item] !== obj2[item]) return false
//     }
//     return true
// }


// function compareArrays(arr1, arr2) {
//     console.log("Inside Array compare===============", arr1, arr2)
//     // Check length of 2 arrays
//     if (arr1.length !== arr2.length) return false

//     // Make a copy of 2nd Array
//     let arr2copy = [...arr2]
//     let arr1Copy = [...arr1]
//     arr1Copy.sort()
//     arr2copy.sort()
//     // Iterate through  1st array
//     for (let item of arr1) {

//         // Check index of item in 2nd array if doesnt exist return false
//         let index = arr2copy.indexOf(item)
//         // console.log(index, arr2copy)
//         if (index === -1) return false

//         // if exist remove that item from 2nd array Copy
//         arr2copy.splice(index, 1)
//     }

//     // Finally Return true
//     return true
// }

function compareObjects(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        const val1 = obj1[key];
        const val2 = obj2[key];

        if (typeof val1 === 'object' && typeof val2 === 'object') {
            if (!compareObjects(val1, val2)) {
                return false;
            }
        } else if (Array.isArray(val1) && Array.isArray(val2)) {
            if (!compareArrays(val1, val2)) {
                return false;
            }
        } else if (val1 !== val2) {
            return false;
        }
    }

    return true;
}


function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        const val1 = arr1[i];
        const val2 = arr2[i];

        if (typeof val1 === 'object' && typeof val2 === 'object') {
            if (!compareObjects(val1, val2)) {
                return false;
            }
        } else if (Array.isArray(val1) && Array.isArray(val2)) {
            if (!compareArrays(val1, val2)) {
                return false;
            }
        } else if (val1 !== val2) {
            return false;
        }
    }

    return true;
}



let obj1 = { name: "Saif", designation: "Software Engineer", address: { state: "KA", country: "IND" }, arr: [12, 5, 4, 3] }
let obj2 = {
    designation: "Software Engineer", name: "Saif", address: { country: "IND", state: "KA", }, arr: [12, 5, 3, 4]
}
console.log(compareObjects(obj1, obj2))