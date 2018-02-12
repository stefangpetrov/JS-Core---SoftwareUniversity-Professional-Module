function solve(strArr) {

    let input = strArr.reduce((a,b) => a+b);

    let regex = /\w+/g;

    let Allwords = input.match(regex);

    let wordCounter = {};

    for (let word of Allwords) {

        if(!wordCounter.hasOwnProperty(word)){
            wordCounter[word] = 0;
        }
        wordCounter[word]++;

    }

    console.log(JSON.stringify(wordCounter));
}

solve(['dasd afs fad awra.', 'dasd fafa gse sdgh.'])