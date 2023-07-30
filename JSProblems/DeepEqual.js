function compareObjects(obj1, obj2) {
    const keys1 = Object.keys(obj1).sort();
    const keys2 = Object.keys(obj2).sort();

    if (keys1.length !== keys2.length) {
        console.log("Length mismatch");
        return false;
    }

    for (let i = 0; i < keys1.length; i++) {
        const key = keys1[i];
        const val1 = obj1[key];
        const val2 = obj2[key];

        console.log("Comparing:", key, val1, val2);
        debugger;
        if (Array.isArray(val1) && Array.isArray(val2)) {
            if (!compareArrays(val1, val2)) {
                console.log("Array comparison failed for:", key);
                return false;
            }
        } else if (typeof val1 === "object" && typeof val2 === "object") {
            if (!compareObjects(val1, val2)) {
                console.log("Object comparison failed for:", key);
                return false;
            }
        } else if (val1 !== val2) {
            console.log("Value comparison failed for:", key);
            return false;
        }
    }

    return true;
}

function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        console.log("Array length mismatch");
        return false;
    }

    const sortedArr1 = arr1.slice().sort();
    const sortedArr2 = arr2.slice().sort();

    for (let i = 0; i < sortedArr1.length; i++) {
        const val1 = sortedArr1[i];
        const val2 = sortedArr2[i];

        console.log("Comparing array elements:", val1, val2);
        debugger;
        if (Array.isArray(val1) && Array.isArray(val2)) {
            if (!compareArrays(val1, val2)) {
                console.log("Array comparison failed in array");
                return false;
            }
        } else if (typeof val1 === "object" && typeof val2 === "object") {
            if (!compareObjects(val1, val2)) {
                console.log("Object comparison failed in array");
                return false;
            }
        } else if (val1 !== val2) {
            console.log("Value comparison failed in array");
            return false;
        }
    }

    return true;
}

let obj1 = {
    name: "Saif",
    designation: "Software Engineer",
    address: {
        state: "KA",
        country: "IND",
        fullName: { fname: "Mohammed", lname: "Saif" },
    },
    arr: [12, 5, 4, 3, [1, { key: "value" }, 3, [3, 4, 5, 6], 6]],
};
let obj2 = {
    designation: "Software Engineer",
    name: "Saif",
    address: { fullName: { fname: "Mohammed", lname: "Saif" }, country: "IND", state: "KA" },
    arr: [12, 5, 3, 4, [1, [3, 4, 5, 6], 3, { key: "value" }, 6]],
};

console.log(compareObjects(obj1, obj2));
