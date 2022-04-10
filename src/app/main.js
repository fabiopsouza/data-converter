const io = require("./io/file.js");
const converter = require("./core/file-converter.js");

function main() {
    fileData = io.readInputFiles()
    jsons = converter.convertInputs(fileData)
}

module.exports = { main }
