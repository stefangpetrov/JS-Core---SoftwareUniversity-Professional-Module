function solve(strArr) {

    let towns = {};

    for (let i = 0; i < strArr.length; i+=2) {

        let town = strArr[i];
        let income = Number(strArr[i+1]);

        if(!towns.hasOwnProperty(town)){
            towns[town] = 0;
        }

        towns[town] += income;

    }


    console.log(JSON.stringify(towns));
    
}

solve(['Sofia',
    '20',
    'Varna',
    '3',
    'Sofia',
    '5',
    'Varna',
    '4'
]);