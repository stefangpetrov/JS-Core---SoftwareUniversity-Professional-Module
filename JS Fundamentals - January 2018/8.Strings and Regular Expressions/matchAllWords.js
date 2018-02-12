function solve(str) {


    let regexp = new RegExp('[a-zA-Z0-9_]+', 'g');

    let words = str.match(regexp);

    console.log(words.join("|"));
}

solve('A Regular Expression needs to have the global flag in order to match all occurrences in the text');