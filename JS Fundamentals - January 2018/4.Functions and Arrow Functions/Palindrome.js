function checkPalindrome(word) {

    let checker = true;
    for(let i = 0; i < word.length/2; i++){

        if(word[i] != word[word.length - i - 1])
            checker = false;
    }
    console.log(checker);
}

checkPalindrome("haha");