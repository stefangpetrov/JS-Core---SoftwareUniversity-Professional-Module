function addProduct() {
    let productName = $($(":input")[0]).val();
    let productPrice = $($(":input")[1]).val();

    let totalPrice = Number($($('tfoot > tr')[0].children[1]).text());



    let tbody= $('#product-list');

    if(productName !== '' && productPrice !== ''){

        let tableRow = $('<tr>');
        tableRow.append(`<td>${productName}</td>`);
        tableRow.append(`<td>${Number(productPrice).toFixed(2)}</td>`);
        $(tbody).append(tableRow);


        totalPrice = (Number(totalPrice) + Number(productPrice)).toFixed(2);
        $($('tfoot > tr')[0].children[1]).text(totalPrice.toString());


        $($(":input")[0]).val('');
        $($(":input")[1]).val('');
    }
    else{
        return;
    }
}



function Delete() {


}