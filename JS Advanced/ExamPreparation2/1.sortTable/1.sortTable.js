function sort(colIndex, descending) {

    let tableRows = $('tbody > tr');
    if(colIndex === 0){

        if(descending === true){
            tableRows = tableRows.sort((a, b) => $($(b).children()[0]).text().localeCompare($($(a).children()[0]).text()));
        }
        else{
            tableRows = tableRows.sort((a, b) => $($(a).children()[0]).text().localeCompare($($(b).children()[0]).text()))
        }



    }else{
        if(descending === true){
            tableRows = tableRows.sort((a, b) => Number($($(b).children()[1]).text()) - Number($($(a).children()[1]).text()));
        }
        else{
            tableRows = tableRows.sort((a, b) => Number($($(a).children()[1]).text()) - Number($($(b).children()[1]).text()));
        }

    }

    $('tbody').append(tableRows);
}