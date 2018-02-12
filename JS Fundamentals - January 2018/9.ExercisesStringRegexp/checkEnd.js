function solve(mainString, subString) {


    console.log(mainString.substr(mainString.length - subString.length, subString.length) === subString);
}

solve("This sentence ends with fun?","fun?");