var fs = require('fs');

//Starting point is 0,0
var x = 0;
var y = 0;

// N = 0, E = 1, S = 2, W = 3
var cardinalDirection = 0;
var directionOutput = ['North', 'East', 'South', 'West'];

var count = 0;

var inputString = fs.readFileSync('1a.txt', 'utf8');
var input = inputString.split(', ');

//Calculate relative end point
function calculatePosition(direction, stepsString) {
    let steps = parseInt(stepsString);
    let isRight = direction === 'R';
    switch (cardinalDirection) {
        // Facing North
        case 0:
            if (isRight){ 
                x += steps; 
                cardinalDirection++;
            } 
            else { 
                x -= steps;  
                cardinalDirection = 3;
            }
            break;
        // Facing East
        case 1:
            if (isRight) {
                y -= steps;
                cardinalDirection++;
            }
            else {
                y += steps;
                cardinalDirection --;
            }
            break;
        // Facing South
        case 2:
            if (isRight){
                x -= steps;
                cardinalDirection++;
            }
            else {
                x += steps;
                cardinalDirection--;
            }
            break;
        // Facing West
        case 3:
            if (isRight) {
                y += steps;
                cardinalDirection = 0;
            } else {
                y -= steps;
                cardinalDirection--;
            }
    }
}

for (let i=0; i<input.length; i++){
    let currentInput = input[i];
    console.log('Facing', directionOutput[cardinalDirection], 'at', '('+x+','+y+')', 'Heading', currentInput);
    calculatePosition(currentInput[0], currentInput.substring(1, currentInput.length));
}
console.log('Endpoint at: ', '('+x+','+y+')');
console.log('Distance between points: ',Math.abs(x)+Math.abs(y));
