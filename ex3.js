const fs = require('fs');
const fileName = process.argv[2];

const isNumber = (array) => {
    const diffInt = array.filter(index => !Number.isInteger(index));
    if (diffInt.length >= 1) return false;
    return true;
}

var compareCount = 0;

const sumPair = (numbers, total) => {
    compareCount = 0;
    for (let i = 0; i < numbers.length; i++) {
        compareCount++;
        let res = total - numbers[i];
        let remainingArray = [...numbers.slice(0, i), ...numbers.slice(i + 1, numbers.length)];
        if (remainingArray.includes(res)) return true;
    }
    return false;
}


try{
    const data = fs.readFileSync(fileName, 'utf8');
    let datas = data.split(' ');
    const listed = datas.map((value, index) => index = Number.parseInt(value, 10));

    if (!isNumber(listed)) return console.error('The data is corrupted!');
    const numToSum = Number(process.argv[3]);
    

    console.log('--------------------------------');
    console.log('------------ Hello -------------');
    console.log('--------------------------------');
    console.log(`\nYou choose the ${data} file so let's find if the sum of ${numToSum} is possible.\n`);

    // Sum Calculate is bellow.
    console.log(`The possibilities of finding the requested ${numToSum} by adding the numbers in the list are ${sumPair(listed, numToSum)}, for ${compareCount} comparaisons.`);
    console.log(`Aswell you can try again with writing another number after the choosen list as argument.\n`);

    console.log('--------------------------------');
    console.log('------- This is the End --------');
    console.log('--------------------------------');
} catch (error) {
    console.error(error.message);
}
