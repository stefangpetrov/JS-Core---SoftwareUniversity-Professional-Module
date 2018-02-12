function solve(input){

    let regex = /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/g;

    let result = regex.exec(input);


    while(result !== null){
        let [date, day, month, year] = result;
        console.log(`${date} (Day: ${day}, Month: ${month}, Year: ${year})`);
        result = regex.exec(input);
    }
}

solve(['I am born on 30-Dec-1994.',
    'This is not date: 512-Jan-1996.',
'My father is born on the 29-Jul-1955.'
]);