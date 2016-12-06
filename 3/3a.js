var fs = require('fs');
var inputString = fs.readFileSync('3a.txt', 'utf8');

var possibleTriangles = 0;

var lines = inputString.split('\r\n  ');

// console.log('Number of lines:',lines.length);

for (i in lines) {
    let line = lines[i].split('  ');
    line = cleanArray(line);
    // console.log(line);
    let a = parseInt(line[0]);
    let b = parseInt(line[1]);
    let c = parseInt(line[2]);   
    // console.log('Checking',a,b,c); 
    if (a+b > c && b+c > a && a+c > b) {
        possibleTriangles++;
        // console.log('Good!');
    } 
}

console.log('Possible Triangles:', possibleTriangles);

function cleanArray(array) {
    let newArray = [];
    for (i in array){
        if (array[i]) newArray.push(array[i]);
    }
    return newArray;
}