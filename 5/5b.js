var fs = require('fs');
var crypto = require('crypto');

var inputString = fs.readFileSync('5a.txt', 'utf8');

var hash = "";
var index = -1;
var answer = ["","","","","","","",""];

console.log('Executing l33t hax...');

for (let i = 0; isNotAnswered(); i++) {
    hash = crypto.createHash('md5').update(inputString+i).digest('hex');
    // if (i % 1000000 === 0)  console.log('Current Index:',i);
    if (hash.indexOf('00000') === 0 && hash[5] < 8 && !answer[parseInt(hash[5])]) {
        console.log('Found valid index at',i,'with hash',hash,'Adding',hash[6],'to answer in position',hash[5]);
        
        answer[parseInt(hash[5])] = hash[6];
    }
}

console.log('done. Answer is:',answer.join(""));

function isNotAnswered() {
    for (let i = 0; i < 8; i++) {
        if (!answer[i]) return true;
    }
    return false;
}