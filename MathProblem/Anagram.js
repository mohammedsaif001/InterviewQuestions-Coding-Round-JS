let str = "TENET"
let anagramStr = "ETENT"

function isAnagram(str, anagramStr) {
    if (str.length !== anagramStr.length) return false
    return str.toLowerCase().split("").sort().join("") === anagramStr.toLowerCase().split("").sort().join("")
}

function isAnagramScratch(str, anagramStr) {
    if (str.length !== anagramStr.length) return false
    const counter = {}
    const counter1 = {}

    for (let i = 0; i < str.length; i++) {
        counter[str[i]] = (counter[str[i]] || 0) + 1
        counter1[anagramStr[i]] = (counter1[anagramStr[i]] || 0) + 1
    }

    for (item in counter) {
        if (counter[item] !== counter1[item]) return false
    }


    return true
}
console.log(isAnagramScratch(str, anagramStr))