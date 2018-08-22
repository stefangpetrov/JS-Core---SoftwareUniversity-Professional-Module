function move(command) {

    let aTownsList = $('#available-towns');
    let sTownsList = $('#selected-towns');
    let output = $('#output');

    if(command === 'right'){

        let selectedItem = aTownsList.find(':selected');
        sTownsList.append(selectedItem);


    } else if(command === 'left'){

        let selectedItem = sTownsList.find(':selected');
        aTownsList.append(selectedItem);
    }
    else{
        output.empty();

        let allTowns = sTownsList.find('option').toArray()
            .map(el => el.textContent).join('; ');


        output.append(allTowns);
    }


}