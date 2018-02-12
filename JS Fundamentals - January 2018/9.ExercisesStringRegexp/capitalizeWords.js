function solve(str) {


    let words = str.split(" ");
    let result = [];

    for (let word of words) {

        word = word[0].toUpperCase() + word.substring(1, word.length).toLowerCase();

        result.push(word)
    }

    console.log(result.join(" "));
}
solve("Capitalize these words");