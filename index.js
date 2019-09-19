const {capitalizeInitial} = require(`./formatting`);
const {showHelp} = require(`./messaging`)

const str = process.argv[2]
const help = process.argv[3]

capitalizeInitial(str);
showHelp(help);

