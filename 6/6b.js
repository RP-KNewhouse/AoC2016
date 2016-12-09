var fs = require('fs');
var inputString = fs.readFileSync('6a.txt', 'utf8');

let lines = inputString.split('\r\n');

let col = [];

for (let i in lines) {
    let line = lines[i];

    for (let j in line) {
        let letter = line[j];
        if (!col[j]) col[j] = [];
        col[j][i] = letter;
    }
}

let answer = ''
// get the counts for letters in each column
for (let i in col) {
    let colCount = {};
    let letters = col[i];
    for (let j in letters) {
        let letter = letters[j];
        if (!colCount[letter]) colCount[letter] = 0;
        colCount[letter]++;
    }
    // sort the count, get highest letter and add to answer
    let colCountArray = Object.keys(colCount).map(key => [key, colCount[key]]);
    
    // console.log('column count:',colCountArray.sort(sortNumber));

    answer += colCountArray.sort(sortNumber)[0][0];
}

console.log('Answer: ', answer);

function sortNumber(a,b) {
    return a[1] - b[1];
}