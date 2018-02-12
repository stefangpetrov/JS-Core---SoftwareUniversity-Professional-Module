function solve(arr) {


    let market = new Map();


    for (let row of arr) {

        let tokens = row.split(' -> ');
        let town = tokens[0];
        let product = tokens[1];
        let sales = tokens[2].split(' : ').reduce((a,b) => a*b);


        if(!market.has(town)){
            market.set(town, new Map());
        }
        if(!market.get(town).has(product)){
            market.get(town).set(product, 0);
        }

        let oldSales = market.get(town).get(product);
        market.get(town).set(product, oldSales + sales);


    }

    for (let [town, products] of market) {

        console.log(`Town - ${town}`);
        for (let [product, sales] of products) {

            console.log(`$$$${product} : ${sales}`);
        }
    }
}



solve([
'Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 1500',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3'

]);