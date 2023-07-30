function MaxWordInStr(str) {
   let obj = {}
   let arr = str.split(" ")
   for (item of arr) {
      obj[item] = obj[item] + 1 | 1
   }
   let maxStr = ""
   let maxCount = 0

   for (let item of arr) {
      if (maxCount < obj[item]) {
         maxStr = item
         maxCount = obj[item]
      }
   }
   console.log(maxCount, maxStr)
}

let str = "Saif Hello Capital Saif Hello Saif"
MaxWordInStr(str)