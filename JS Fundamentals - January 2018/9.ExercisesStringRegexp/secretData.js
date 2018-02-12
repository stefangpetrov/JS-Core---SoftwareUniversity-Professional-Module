function solve(arr) {


    let namesRegexp = /\*[A-Z][A-Za-z]*(?=\s|$)/g;
    let phonesRegexp = /\+[0-9-]{10}(?=\s|$)/g;
    let idRegexp = /![A-Za-z0-9]+(?=\s|$)/g;
    let baseNameRegexp = /_[a-zA-Z0-9]+(?=\s|$)/g;

    let result = [];

    function replace(line, regex) {
        let matches = line.match(regex);
        if(matches!==null){
            for (let match of matches) {
                // console.log(match);
                line = line.replace(match, '|'.repeat(match.length));
                // console.log(line);
            }
        }
        return line;
    }

    for (let obj of arr) {
        obj = replace(obj, namesRegexp);
        obj = replace(obj, phonesRegexp);
        obj = replace(obj, idRegexp);
        obj = replace(obj, baseNameRegexp);

        result.push(obj);
    }

    console.log(result.join('\n'))
    
}
solve(['Agent *Ivankov was in the room when *Ivankov it all happened.',
    'The person in the room was heavily armed.',
    'Agent *Ivankov had to act quick in order.',
    'He picked up his phone and called +555-34-54135 some unknown number.',
    'I think it was +555-49-796',
"I can't really remember...",
'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
'Then after that he disappeared from my sight .',
    'As if he vanished in the shadows.',
    'A moment, shorter than a second, later, I saw the person flying off the top floor.',
    "I really don't know what happened there.",
'This is all I saw, that night.',
    'I cannot explain it myself...'
    ]);