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

const NUMPAD = {
    1: { D: 3 },
    2: { R: 3, D: 6 },
    3: { U: 1, D: 7, L: 2, R: 4 },
    4: { L: 3, D: 8 },
    5: { R: 6 },
    6: { U: 2, L: 5, R: 7, D: 'A' },
    7: { U: 3, D: 'B', L: 6, R: 8},
    8: { U: 4, D: 'C', L: 7, R: 9 },
    9: { L: 8 },
    A: { U: 6, R: 'B' },
    B: { U: 7, D: 'D', L: 'A', R: 'C' },
    C: { U: 8, L: 'B' },
    D: { U: 'B' }
}

var lines = inputString.split('\n');

for (var i in lines) {
    let line = lines[i];

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

function tryMove(num, dir) {
    let val = NUMPAD[num][dir];
    return val || num;    
}