const fs = require('fs')
const inputDirectory = './data/input/'

function readInputFiles(callback) {
    let promises = [];

    fs.readdir(inputDirectory, (err, fileNames) => {
        if (err) {
            console.error(err)
            return;
        }

        fileNames.forEach(fileName => promises.push(readFilePromise(fileName)));
        
        callback(promises)
    })
}

function readFilePromise(fileName) {
    return new Promise((resolve, reject) => {
        console.log('Reading file ' + fileName)
        fs.readFile(inputDirectory + fileName, 'utf8' , (err, data) => {
            if (err) {
                console.error(err)
                return
            }
            resolve(data);
        })
    });
}

module.exports = { readInputFiles }
