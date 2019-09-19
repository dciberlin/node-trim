const import1 = require("./formatting")

const arg1 = process.argv[2]
const arg2 = process.argv[3]

import1.showHelp(arg1,arg2)

//console.log(import1.removeSymbols(arg1))


if (arg1 !== "--help") {
    console.log(import1.capitalizeInitial(import1.trimSpace(import1.removeSymbols(arg1))))

}
if (arg2 === undefined) return
if (arg2 !== "--help") console.log(import1.capitalizeInitial(import1.trimSpace(import1.removeSymbols(arg2))))
