function solve(input) {


    let text = input.join('\n');
    let unique = new Set();
    words = text.split(/\W+/).filter(w => w!=='').map(w=>w.toLowerCase()).forEach(e=>unique.add(e));
    //console.log(unique);

    console.log([...unique].join(', '));
}