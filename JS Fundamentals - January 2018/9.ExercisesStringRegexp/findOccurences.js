function solve(str, word) {



    let regex = new RegExp(`\\b${word}\\b`, 'gi');
    let matches = str.match(regex);
    console.log(matches!== null ? matches.length : 0);

}

solve("The waterfall was so high, that the child couldn’t see its peak.",
    "the");