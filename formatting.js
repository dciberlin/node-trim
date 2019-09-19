module.exports.capitalizeInitial = (str) => {


    str = str.split(` `)
    let format = str.map(x => x.charAt(0).toUpperCase() + x.substring(1).toLowerCase())
    format = format.join(` `)
    let formAndTrim = format.replace(/\s+/g, " ");
    formAndTrim = formAndTrim.replace(/[^a-zA-Z0-9]/g, ' ')
    console.log(formAndTrim)
}