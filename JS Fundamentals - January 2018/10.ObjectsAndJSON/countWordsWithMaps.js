function solve([text]) {

    let regex = /[a-zA-Z0-9_]+/gi;
    text = text.toLowerCase();
    let matches = text.match(regex);
    // console.log(matches);
    let words = new Map();
    for (let match of matches) {
        let matchRegEx = new RegExp(`\\b${match}\\b`, 'gi');
        words.set(match, (text.match(matchRegEx)).length);
    }
    words = [...words.entries()].sort();
    for (let [key, value] of words) {
        console.log(`'${key}' -> ${value} times`)
    }
}

