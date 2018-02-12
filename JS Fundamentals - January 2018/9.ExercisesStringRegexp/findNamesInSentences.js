function solve(str) {

    let regexp = /\b_[a-zA-Z0-9]+\b/g;

    let matches = str.match(regexp);

    console.log(matches.map(word => word.substring(1,word.length)).join(','));



}

solve('The _id and _age variables are both integers.');