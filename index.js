const import1 = require("./formatting")

const arg1 = process.argv[2]
const arg2 = process.argv[3]

console.log(import1.trimSpace(arg1))
import1.showHelp(arg1,arg2)