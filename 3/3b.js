var fs = require('fs');
var inputString = fs.readFileSync('3a.txt', 'utf8');

var possibleTriangles = 0;

var lines = inputString.split('\r\n  ');


for (var i=0; i < lines.length; i=i+3) {
    let line1 = lines[i].split('  ');
    let line2 = lines[i+1].split('  ');
    let line3 = lines[i+2].split('  ');
    
    line1 = cleanArray(line1);
    line2 = cleanArray(line2);
    line3 = cleanArray(line3);

    for (var j=0; j < 3; j++){
        let line = [line1[j], line2[j], line3[j]];
        let a = parseInt(line[0]);
        let b = parseInt(line[1]);
        let c = parseInt(line[2]);   
        if (a+b > c && b+c > a && a+c > b) {
            possibleTriangles++;
        }
    }
}

console.log('Possible Triangles:', possibleTriangles);

function cleanArray(array) {
    let newArray = [];
    for (k in array){
        if (array[k]) newArray.push(array[k]);
    }
    return newArray;
}