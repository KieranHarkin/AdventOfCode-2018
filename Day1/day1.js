const fs = require('fs');

const getInput = () => {
    return fs.readFileSync('./input.txt', 'utf8').split('\n');
}

const part1 = () => {
    return getInput().reduce((prev, next) => +prev + +next, 0);
}

const part2 = () => {

    const inputData = getInput();
    let history = [0];
    let runningTotal = 0;
    
    const findDuplicate = () => {
        let exists = false;

        for(const num of inputData) {
            runningTotal += +num;
            exists = history.includes(runningTotal)
            history.push(runningTotal);
            if(exists) {
                exists = true;
                break;
            };     
        }

        if(!exists) {
            findDuplicate();
        }
    }

    findDuplicate();
    return history.pop();
}

console.log(part1());
console.log(part2());