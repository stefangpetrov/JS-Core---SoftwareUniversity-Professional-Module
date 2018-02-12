function solve(str) {

    let result = [];

    let open = str.indexOf("(");



    while(open !== -1){

        let close = str.indexOf(")", open);
        if(close === -1){
            break;
        }
        result.push(str.substring(open + 1, close));

        open = str.indexOf('(', close + 1);



    }


    console.log(result.join(", "))
}


solve('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');