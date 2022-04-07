const fs = require('fs')
const inputDirectory = '../data/input/'

function readInputFiles(callback) {
    let fileContent = []

    let fileNames = fs.readdir(inputDirectory, (err, fileNames) => {
        if (err) {
            console.error(err)
            return;
        }

        fileNames.forEach(function (fileName) {
            console.log('Reading file ' + fileName)
            fs.readFile(inputDirectory + fileName, 'utf8' , (err, data) => {
                if (err) {
                    console.error(err)
                    return
                }
                fileContent.push(data)
            })
        });

        callback(fileContent);
    })
}

module.exports = { readInputFiles }
