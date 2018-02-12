function solve(str){

    let matches = str.split(/[\s,;\.()]+/);

    for (let obj of matches) {

        console.log(obj);
    }
}