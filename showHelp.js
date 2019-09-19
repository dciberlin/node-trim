module.exports.showHelp = (str, help) => {
    if (help === `--help`) {

  console.log(`1. When you input a new string with more than 1 space the program will sanitize it.
        2. If you typed the name of a city without capitalization the program will capitalize it.
        3. If you included a Capitalized letter inside the wrong place of your string the program will sanitize it.`)
    }
};