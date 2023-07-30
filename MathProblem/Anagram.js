let str = "Saaadif"
let anagramStr = "aFasas"

function isAnagram(str, anagramStr) {
    if (str.length !== anagramStr.length) return false
    return str.toLowerCase().split("").sort().join("") === anagramStr.toLowerCase().split("").sort().join("")
}

const anagram = isAnagram(str, anagramStr)
console.log(anagram)