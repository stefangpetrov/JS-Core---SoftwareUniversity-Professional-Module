function solve(word, str) {



    let count = 0;

    let index = str.indexOf(word);
    while (index != -1){

        index++;
        count++;
        index = str.indexOf(word, index);


    }


    console.log(count);
}

solve('the', 'the quick brown fox jumps over the lay dog.');