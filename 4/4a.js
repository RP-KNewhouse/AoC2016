var fs = require('fs');

var inputString = fs.readFileSync('4a.txt', 'utf8');

var sectorSum = 0;

var lines = inputString.split('\r\n');

for (let i in lines) {
    let line = lines[i];

    // Parse out checksum, sector id, and name from line
    let lineSplit = line.split('[');
    let checksum = lineSplit[1].replace(']','');
    lineSplit = lineSplit[0].split('-');
    let sectorId = parseInt(lineSplit[lineSplit.length-1]);
    let name = lineSplit.slice(0,lineSplit.length-1).join('');

    let letterCount = {}

    for (let j in name) {
        let letter = name[j];
        if (letterCount[letter]) letterCount[letter]++;
        else {
            letterCount[letter] = 1;
        }
    }

    let letterCountArray = Object.keys(letterCount).map(key => [key, letterCount[key]]);
    letterCountArray.sort(sortNumber);
    if (letterCountArray.length < 5) {
        console.error('Less than five letters in name, skipping...');
        break;
    }
    let topFive = [];
    for (let j=0; j<5; j++){
        topFive.push(letterCountArray[j]);
        // Keep going until the next value isn't the same
        for (let k=1; j>3 && letterCountArray[j+k] && letterCountArray[j][1] === letterCountArray[j+k][1]; k++){
            // console.log('Comparing', letterCountArray[j+k][0], 'with', topFive[j])
            if (letterCountArray[j+k][0] < topFive[j]) {
                topFive[j] = letterCountArray[j+k][0]
            }
            topFive.push(letterCountArray[j+k]);
        }
    } 
    // Sort TopFive by number first, then alphabetically
    topFive = topFive.sort(sortNumber);
    let topFiveLetters = topFive.join('').replace(/[0-9]/g,'').replace(/,/g,'').substr(0,5);

    // console.log('All letters:', letterCountArray);
    // console.log('Top five letters:',topFiveLetters);
    // console.log('Checksum',checksum);
    // console.log('Intersection: ',(_.intersection(topFive, checksum.split(''))).length);
    // console.log();
    if (topFiveLetters === checksum) {
        // console.log('Line input:',line);
        // console.log('Top five letters:',topFive.join(','));
        // console.log('SectorId to be added to sum:', sectorId);
        // console.log();
        sectorSum += sectorId;
    }

}

console.log(sectorSum);

function sortNumber(a,b) {
    if (b[1] > a[1]) return 1;
    else if (b[1] < a[1]) return -1;

    if (b[0] > a[0]) return -1;
    else if (b[0] < a[0]) return 1;

    return 0;
}