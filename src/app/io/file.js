const fs = require('fs')
const inputDirectory = './data/input/'

function readInputFiles() {
    fileNames = fs.readdirSync(inputDirectory)
    return fileNames.map(fileName => readFile(fileName));
}

function readFile(fileName) {
    filePath = inputDirectory + fileName
    return fs.readFileSync(filePath).toString()
}

function writeFile(contents) {

}

module.exports = { readInputFiles }
