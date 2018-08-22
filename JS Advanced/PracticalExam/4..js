function solve(arrKingdoms, arrAttacks) {



    let kingdoms = new Map();

    let kingdomBattles = new Map();
    let generalBattles = new Map();



    for (let obj of arrKingdoms) {

        let currentKingdom = obj.kingdom;
        let currentGeneral = obj.general;
        let currentArmy = obj.army;

        if(!kingdoms.has(currentKingdom)){
            kingdoms.set(currentKingdom, new Map());
        }

        if(!kingdoms.get(currentKingdom).has(currentGeneral)){

            kingdoms.get(currentKingdom).set(currentGeneral, currentArmy);
            //console.log(kingdoms)
        }else{
            kingdoms.get(currentKingdom).set(currentGeneral, kingdoms.get(currentKingdom).get(currentGeneral) + currentArmy);
        }


        if(!kingdomBattles.has(currentKingdom)){
            kingdomBattles.set(currentKingdom, 0);
        }
        if(!generalBattles.has(currentGeneral)){
            generalBattles.set(currentGeneral, 0);
        }




    }



    for (let obj of arrAttacks) {

        let attackingKingdom = obj[0][0];
        let attacker = obj[0][1];
        let defendingKingdom = obj[0][2];
        let defender = obj[0][3];

        if(attackingKingdom === defendingKingdom){
            continue;
        } else{

            let attackerArmy = kingdoms.get(attackingKingdom).get(attacker);
            console.log(attackerArmy);
        }

    }



}

solve(
    [ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"] ]

);