const fs = require('fs');

const getInput = () => {
    return fs.readFileSync('./input.txt', 'utf8').split('\n');
}

const part1 = () => {

let twoCount = 0;
let threeCount = 0;

const input = getInput();

for(const val of input) {
    let chars = val.split('').sort();
    let hasTwo = false;
    let hasThree = false;

    for(const char of chars) {
        const x = chars.lastIndexOf(char);

        if (x === 1 & !hasTwo) {
            twoCount++;
            hasTwo = true;
        } else if (x === 2 &!hasThree) {
            threeCount++;
            hasThree = true;
        }    
        chars = chars.slice(x+1, chars.length);
    }
}
return twoCount * threeCount;
}

console.log(part1());




