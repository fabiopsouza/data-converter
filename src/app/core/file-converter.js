const parser = require("./json-parser.js");

function convertInputs(fileData) {
    return fileData.map(content => convertSingleInput(content));
}

function convertSingleInput(input) {
    lines = getLines(input)

    header = getHeader(lines)
    rows = getRows(lines)

    return parser.parseToJson(header, rows)
}

function getLines(input) {
    matchLineBreak = /\r?\n/
    lines = input.trim().split(matchLineBreak)
    
    return lines.map(line => line.split(';'));
}

function getHeader(lines) {
    return lines.slice(0, 1)[0]
}

function getRows(lines) {
    return lines.slice(1, lines.length)
}

module.exports = { convertInputs }