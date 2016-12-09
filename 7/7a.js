var fs = require('fs');
var inputString = fs.readFileSync('7a.txt', 'utf8');

let lines = inputString.split('\r\n');

let supportTLSCount = 0;

for (let i in lines) {
    let line = lines[i];

    let parts = line.split(/\[|\]/);

    let support;

    // Check all the brackets first
    for (let j=0; j < parts.length; j++) {
        if (supportsTLS(parts[j])) {
            if (j%2) {
                support = false;    
                break;           
            }
            support = true;
        }
    }
    
    // console.log(line);
    // console.log('First condition:',!supportsTLS(second));
    // console.log('Second condition:',supportsTLS(first));
    // console.log('Third condition:',supportsTLS(third));
    // console.log();
    if (support) {
        supportTLSCount++;
        // console.log('Supports TLS');
    }
    // console.log();
}

console.log(supportTLSCount+' IPs support TLS.');

function supportsTLS(str) {
    for (let i in str) {
        if(isABBA(str.substr(i,i+4))) return true;
    }
    return false;
}

function isABBA(str) {
    if (str[0] === str[1]) return false;
    return str[0]+str[1] === str[3]+str[2];
}