function solve(arr) {

    function getPrice(total, current) {
        return total + current;
    }

    let products = [];
    let totalPrice = [];

    for (let i = 0; i < arr.length; i+=2) {

        let product = arr[i];
        let price = Number(arr[i + 1]);

        products.push(product);
        totalPrice.push(price);


    }


    console.log(`You purchased ${products.join(", ")} for a total sum of ${totalPrice.reduce(getPrice, 0)}`);
}

solve(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);