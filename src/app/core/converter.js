function convertInputs(fileContents) {
    fileContents.forEach(content => convertSingleInput(content));
}

function convertSingleInput(input) {
    console.log(getHeader(input));
    console.log(getLines(input));
}

function getHeader(input) {
    let headerLine = input.match(/.*/)[0]
    return headerLine.split(';')
}

function getLines(input) {
    let contentLines = input.replace(/.*/, '').trim()
    return contentLines.split('\n')
}

module.exports = { convertInputs }