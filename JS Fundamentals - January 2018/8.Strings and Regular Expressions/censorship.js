function solve(str, arr) {


    for (let obj of arr) {

        let replaced = '-'.repeat(obj.length);
        while(str.indexOf(obj) > -1){
            str = str.replace(obj, replaced);
        }
    }

    console.log(str);
}

solve('roses are red, violets are blue', ['violets are', 'red'])