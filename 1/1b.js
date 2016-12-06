var fs = require('fs');
var _ = require('lodash');

//Starting point is 0,0
var x = 0;
var y = 0;

// N = 0, E = 1, S = 2, W = 3
var cardinalDirection = 0;
var directionOutput = ['North', 'East', 'South', 'West'];
var locations = [];

var count = 0;

var inputString = fs.readFileSync('1a.txt', 'utf8');
var input = inputString.split(', ');

var repeatedLocation;

function checkLocation() {
    if (locations.indexOf(x+','+y) > -1) {
        repeatedLocation = x+','+y;
        return;
    }
    locations.push(x+','+y);
}

//Calculate relative end point
function calculatePosition(direction, stepsString) {
    let steps = parseInt(stepsString);
    let isRight = direction === 'R';
    switch (cardinalDirection) {
        // Facing North
        case 0:
            if (isRight){ 
                for (var step=0; step<steps; step++) {
                    checkLocation();
                    x++;
                }
                cardinalDirection++;
            } 
            else { 
                for (var step=0; step<steps; step++) {
                    checkLocation();
                    x--;
                } 
                cardinalDirection = 3;
            }
            break;
        // Facing East
        case 1:
            if (isRight) {
                for (var step=0; step<steps; step++) {
                    checkLocation();
                    y--;
                }
                cardinalDirection++;
            }
            else {
                for (var step=0; step<steps; step++) {
                    checkLocation();
                    y++;
                }
                cardinalDirection --;
            }
            break;
        // Facing South
        case 2:
            if (isRight){
                for (var step=0; step<steps; step++) {
                    checkLocation();
                    x--;
                }
                cardinalDirection++;
            }
            else {
                for (var step=0; step<steps; step++) {
                    checkLocation();
                    x++;
                }
                cardinalDirection--;
            }
            break;
        // Facing West
        case 3:
            if (isRight) {
                for (var step=0; step<steps; step++) {
                    checkLocation();
                    y++;
                }
                cardinalDirection = 0;
            } else {
                for (var step=0; step<steps; step++) {
                    checkLocation();
                    y--;
                }
                cardinalDirection--;
            }
    }
}

for (let i=0; i<input.length; i++){
    let currentInput = input[i];
    // console.log('Facing', directionOutput[cardinalDirection], 'at', '('+x+','+y+')', 'Heading', currentInput);
    calculatePosition(currentInput[0], currentInput.substring(1, currentInput.length));
    if (repeatedLocation) {
        console.log('Repeated location found at ', repeatedLocation);
        var finalLocations = repeatedLocation.split(',');
        console.log('Distance between points:', Math.abs(finalLocations[0])+Math.abs(finalLocations[1]));
        return;
    }
}
console.log('Endpoint at: ', '('+x+','+y+')');
console.log('Distance between points: ',Math.abs(x)+Math.abs(y));