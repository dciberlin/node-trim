module.exports.trimSpace = (str1) => {
    let res = str1.split(" ");
    res = res.filter(elem => elem !== "")
    return res.join(" ")
};

module.exports.showHelp = (arg11,arg22) => {
    if (arg11 === "--help" || arg22 ==="--help") {
        console.log(`How to use this program:`)
        console.log(`   1. When you input a new string with more than 1 space the program will sanitize it.`)
        console.log(`   2. If you typed the name of a city without capitalization the program will capitalize it.`)
        console.log(`   3. If you included a Capitalized letter inside the wrong place of your string the program will sanitize it.`)
    }    
};

module.exports.capitalizeInitial = (str1) => {
    let res = str1.toLowerCase().split(" ");
    return res.map(elem => {
        return elem.replace(elem[0],elem[0].toUpperCase())
    }).join(" ");       
}

module.exports.removeSymbols = (str1) => {
    return str1.split("").filter(elem=> {
        let arraySymb = [`%`,`$`,`&`,`-`,`_`,`§`,`#`,`(`,`)`]
        for (let i = 0; i < arraySymb.length; i++) {
            if (elem === arraySymb[i]) return false;
        }
        return true
    }).join("")
}

