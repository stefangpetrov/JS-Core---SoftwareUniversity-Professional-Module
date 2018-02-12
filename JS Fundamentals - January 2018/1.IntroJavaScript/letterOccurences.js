function letterOcc(word, letter) {
    let count = 0;
    for (let search of word){
        if(search == letter)
            count++;
    }

    console.log(count);
}

