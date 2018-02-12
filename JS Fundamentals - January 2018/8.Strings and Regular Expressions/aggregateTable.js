function solve(arr) {

    function getIncome(total, current) {
        return total + current;
    }

    let towns = [];
    let income = [];
    for (let obj of arr) {

        let tokens = obj.split('|');
       // console.log(tokens);

        towns.push(tokens[1].trim());
        income.push(Number(tokens[2].trim()));
    }


    console.log(towns.join(", "));
    console.log(income.reduce(getIncome, 0));
}

solve(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
);