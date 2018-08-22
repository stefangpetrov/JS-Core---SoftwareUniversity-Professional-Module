function solve(arr){

    arr = arr.map(a => Number(a));

    let days = 1;
    let leva = 0;
    let bitcoins = 0;
    let daysForBitCoins = [];


    for (let i = 0; i < arr.length; i++) {

        let dailyGold = arr[i];



        if(days % 3 === 0){

            dailyGold = dailyGold - ((30/100)*dailyGold);


        }


        leva += dailyGold * 67.51;

        if(leva >= 11949.16){

            while(leva >= 11949.16){

                leva -= 11949.16;
                bitcoins++;
            }
            daysForBitCoins.push(days);
        }

        //console.log(leva);
        days++;
    }


    console.log(`Bought bitcoins: ${bitcoins}`);
    if(bitcoins > 0){
        console.log(`Day of the first purchased bitcoin: ${daysForBitCoins[0]}`);
    }
    console.log(`Left money: ${leva.toFixed(2)} lv.`);



}
solve(['3124.15',
    '504.212',
    '2511.124']);