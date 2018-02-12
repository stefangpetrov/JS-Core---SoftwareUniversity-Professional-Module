function solve(arr) {


    let towns = new Map();

    for (let dataTown of arr) {


        let [town, pop] = dataTown.split(' <-> ');

        pop = Number(pop);

        if(!towns.has(town)){
            towns.set(town, pop);
        }
        else{
            towns.set(town, towns.get(town) + pop );
        }


    }


    for (let town of towns) {

        console.log(`${town[0]} : ${town[1]}`)
    }
}