var fs = require('fs');
var inputString = fs.readFileSync('2a.txt', 'utf8');

var num = 5;
var solution = '';

const DIRECTIONS = {
    U: -3,
    D: 3,
    R: 1,
    L: -1
}

var lines = inputString.split('\n');

for (var i in lines) {
    let line = lines[i];
    line = removeThreeConsecutivesOrMore(line);

    for (var j in line) {
        let dir = line[j];
        // console.log('Moving', dir, 'from', num);
        num = tryMove(num, dir);
        if (num === undefined) {
            console.error('Something went wrong!');
            return;
        }
    }

    solution += num;
}
console.log('Code:', solution);

function removeThreeConsecutivesOrMore(line) {
    line = line.replace(/R{3,}/, 'RR')
        .replace(/L{3,}/, 'LL')
        .replace(/U{3,}/, 'UU')
        .replace(/D{3,}/, 'DD');
    return line;
}

function tryMove(num, dir) {
    // Check to see if we're moving off the pad
    switch(num) {
        case 6:
        case 9:
            if (dir === 'R') return num;
        case 4:
        case 7:
            if (dir === 'L') return num;
        default:
            let val = num + DIRECTIONS[dir];
            // console.log('Checking value of',val);
            if (val > 0 && val < 10)  return val;
            // console.log('Value is',val,'Returning original num',num);
            return num;
    }
    
}