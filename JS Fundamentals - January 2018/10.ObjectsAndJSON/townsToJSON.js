function solve(strArr) {


    strArr.shift();
    let townsArr = [];

    for (let row of strArr) {

        let tokens = row.split('|')
            .filter(e => e !== '')
            .map(e => e.trim());

        let town = tokens[0];
        let latitude = tokens[1];
        let longitude = tokens[2];

        townsArr.push({"Town": town,"Latitude": Number(latitude), "Longitude": Number(longitude)});
    }


    console.log(JSON.stringify(townsArr));
}