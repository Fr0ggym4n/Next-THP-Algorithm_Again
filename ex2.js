const fs = require('fs');
const fileName = process.argv[2];

const isNumber = (array) => {
    const diffInt = array.filter(index => !Number.isInteger(index));
    if (diffInt.length >= 1) return false;
    return true;
}

var compareCount = 0;

const sunsetView = (numbers) => {

    let hasView = 0;
    let currentIsMax;
    compareCount = 0;
    
    for (let i = 0; i < numbers.length; i++) {
      currentIsMax = true;
      for (let j = i + 1; j < numbers.length; j++) {
        compareCount++;
        if (numbers[j] >= numbers[i]) {
          currentIsMax = false;
          break;
        }
      }
      if (currentIsMax) hasView++;
    }
    return hasView;
  }

try{
    const data = fs.readFileSync(fileName, 'utf8');
    let datas = data.split(' ');
    const listed = datas.map((value, index) => index = Number.parseInt(value, 10));

    if (!isNumber(listed)) return console.error('The data is corrupted!');
    

    console.log('--------------------------------');
    console.log('------------ Hello -------------');
    console.log('--------------------------------');
    console.log(`\nYou choose the ${data} file so let's find the number of apartment with view on the sunset.\n`);

    console.log(`The number of apartments with sunset view is: ${sunsetView(listed)}, with ${compareCount} comparisons`);

    console.log('--------------------------------');
    console.log('------- This is the End --------');
    console.log('--------------------------------');
} catch (error) {
    console.error(error.message);
}
