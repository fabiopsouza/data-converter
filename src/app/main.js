const io = require("./io/file.js");
const converter = require("./core/converter.js");

function main() {
    io.readInputFiles((promises) => {
        Promise.all(promises).then(fileContents => converter.convertInputs(fileContents))
    })
}

module.exports = { main }
