const str = "Malayalam"

function palindrome(str) {
    let newStr = str.toLowerCase()
    let reversedString = newStr.split("").reverse().join("")
    return reversedString === newStr
    retu
}

function PalindromeCore(str) {
    let strLower = str.toLowerCase()
    let lengthStr = str.length
    for (let i = 0; i < Math.floor(lengthStr / 2); i++) {
        if (strLower[i] !== strLower[lengthStr - i - 1]) {
            return false
        }
        return true
    }
}
const isPalindrome = PalindromeCore(str)
console.log(isPalindrome)