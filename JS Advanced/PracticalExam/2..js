function solve(SofiaMap, changesInTemperature) {
    SofiaMap = SofiaMap.map(a => a.split(' ').map(b => Number(b)));
    changesInTemperature = changesInTemperature.map(a => a.split(' '));
    let pollutedAreas = [];
    for (let changes = 0; changes < changesInTemperature.length; changes++) {
        let currentChangeAction = changesInTemperature[changes][0];
        let currentChangeNumber = Number(changesInTemperature[changes][1]);

        if(currentChangeAction === "smog" ){

            SofiaMap = SofiaMap.map(a => a.map(b => b+currentChangeNumber));
            continue;

        }


        for (let sofiaRow = 0; sofiaRow < SofiaMap.length; sofiaRow++) {

            for (let sofiaCol = 0; sofiaCol < SofiaMap[sofiaRow].length; sofiaCol++) {




                let currentBlock = SofiaMap[sofiaRow][sofiaCol];

                if(currentChangeAction === "breeze" ){

                    if(currentChangeNumber >= 0 && currentChangeNumber <= 5){

                        if(sofiaRow === currentChangeNumber){


                            SofiaMap[sofiaRow][sofiaCol] -= 15;
                            if(SofiaMap[sofiaRow][sofiaCol] < 0){
                                SofiaMap[sofiaRow][sofiaCol] = 0;
                            }
                        }
                    }
                }
                if(currentChangeAction === "gale" ){

                    if(currentChangeNumber >= 0 && currentChangeNumber <= 5){

                        if(sofiaCol === currentChangeNumber){

                            SofiaMap[sofiaRow][sofiaCol] -= 20;
                            if(SofiaMap[sofiaRow][sofiaCol] < 0){
                                SofiaMap[sofiaRow][sofiaCol] = 0;
                            }
                        }
                    }
                }



            }
        }


    }




    //console.log(SofiaMap);


    for (let sofiaRow = 0; sofiaRow < SofiaMap.length; sofiaRow++) {

        for (let sofiaCol = 0; sofiaCol < SofiaMap[sofiaRow].length; sofiaCol++) {

            if(SofiaMap[sofiaRow][sofiaCol] >= 50){

                pollutedAreas.push(`[${sofiaRow.toString()}-${sofiaCol.toString()}]`);

            }
        }
    }

    if(pollutedAreas.length < 1){
        console.log("No polluted areas");
    }
    else {
        console.log(`Polluted areas: ${pollutedAreas.join(', ')}`);

    }

}
solve(
    [
        "5 7 72 14 4",
        "41 35 37 27 33",
        "23 16 27 42 12",
        "2 20 28 39 14",
        "16 34 31 10 24",
    ],
    ["breeze 1", "gale 2", "smog 25"]

);