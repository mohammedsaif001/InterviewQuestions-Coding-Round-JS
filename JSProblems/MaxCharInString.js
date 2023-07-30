const str = "abnssnknnaksckhiahiUUUUUUUUissjabjbsk"

function maxCharString(str) {
    let obj = {}
    let maxChar = ''
    let maxCount = 0

    for (let i = 0; i < str.length; i++) {
        obj[str[i]] = obj[str[i]] + 1 || 1
    }

    for (item in obj) {
        if (maxCount < obj[item]) {
            maxCount = obj[item]
            maxChar = item
        }
    }
    console.log(maxChar, maxCount)

}

maxCharString(str)