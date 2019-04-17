const fs = require('fs');
const ops =  require('./src/fileops');

let incValue;

fs.readFile('./resources/number.txt', "utf8", (error, text) => {
    if (error) throw error;

    const number = text.split("\n").map( n => Number(n));
    incValue = ops.incrementValues(number);
    fs.writeFile('./resources/numbernew.txt', incValue.join('\n'), (error, result) => {
        if (error) throw error;
    });
});
