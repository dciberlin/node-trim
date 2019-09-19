module.exports.showHelp = (str, help) => {
    if (help === `--help`) {

        str = str.split(` `);
        str.map(x => x.charAt(0).toUpperCase() + x.substring(1).toLowerCase()).join(` `).replace(/\s+/g, " ");
    }
};