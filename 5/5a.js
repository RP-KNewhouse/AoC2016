var fs = require('fs');
var crypto = require('crypto');

var inputString = fs.readFileSync('5a.txt', 'utf8');

var hash = "";
var index = -1;
var answer = "";

console.log('looping...');

for (let i = 0; answer.length < 8; i++) {
    hash = crypto.createHash('md5').update(inputString+i).digest('hex');
    // if (i % 1000000 === 0)  console.log('Current Index:',i);
    if (hash.indexOf('00000') === 0) {
        console.log('Found valid index at',i,'with hash',hash,'Adding',hash[5],'to answer');
        answer += hash[5];
    }
}

console.log('done. Answer is:',answer);