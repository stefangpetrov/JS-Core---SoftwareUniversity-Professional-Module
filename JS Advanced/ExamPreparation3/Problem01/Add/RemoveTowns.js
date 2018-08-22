function attachEvents() {



    let deleteBtn = $('#btnDelete').click(() => {

        $('#towns').find("option:selected").remove();
    });



}

let addBtn = $('#btnAdd').click(() => {

    let optionText = $('#newItem').val();
    let newOption = $(`<option>${optionText}</option>`);


    $('#towns').append(newOption);

    $('#newItem').val('');


});