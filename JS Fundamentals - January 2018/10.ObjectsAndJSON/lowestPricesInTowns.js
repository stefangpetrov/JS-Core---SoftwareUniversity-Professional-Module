function solve(input) {

    let productsPrice = new Map();
    let productTown = new Map();
    let initialTown = new Map();
    let initialPrice = new Map();
    for (let el of input) {
        [town, product, sales] = el.split(' | ');

        if(!initialPrice.has(product)){
            initialPrice.set(product, Number(sales));
            if(!initialTown.has(product)){
                initialTown.set(product, town);
            }
        }
        if(!productsPrice.has(product)){
            productsPrice.set(product, Number(sales));
            if(!productTown.has(product)){
                productTown.set(product, town);
            }
        }else{
            let currentProductPrice = productsPrice.get(product);
            let currentProductTown = productTown.get(product);
            if(currentProductTown === town){
                productsPrice.set(product, Number(sales));
                productTown.set(product, currentProductTown);
                productTown.set(product, initialTown.get(product));
            }
            if(Number(sales) < currentProductPrice){
                productsPrice.set(product, Number(sales));
                productTown.set(product, town);
            }
        }
    }

    for (let [product, price] of productsPrice) {
        console.log(`${product} -> ${price} (${productTown.get(product)})`);
    }
}