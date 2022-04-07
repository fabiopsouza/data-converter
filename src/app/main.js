const io = require("./io/file.js");

function main() {
    io.readInputFiles((contentFiles) => {
        console.log(contentFiles)
    })
}

module.exports = { main }
