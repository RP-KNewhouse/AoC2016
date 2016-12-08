var fs = require('fs');

var inputString = fs.readFileSync('4a.txt', 'utf8');

var lines = inputString.split('\r\n');

for (let i in lines){
    let line = lines[i];

    // Parse out checksum, sector id, and name from line
    let lineSplit = line.split('-');
    let sectorId = parseInt(lineSplit[lineSplit.length-1]);
    let name = lineSplit.slice(0,lineSplit.length-1).join(' ');

    let shift = sectorId % 26;

    let decryptedWord = '';

    for (let j in name) {
        var letter = line[j];
        if (letter === '-') {
            decryptedWord += ' ';
        } else {
            let decryptedLetterCode = letter.charCodeAt(0)+shift;
            if (decryptedLetterCode > 122) decryptedLetterCode = decryptedLetterCode - 26;
            let decryptedLetter = String.fromCharCode(decryptedLetterCode);
            decryptedWord += decryptedLetter;        
        }
    }
    if (decryptedWord.indexOf('northpole object storage') > -1) {
        console.log(decryptedWord+': '+sectorId);    
    }
}