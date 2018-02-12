function solve(email) {


    let regexp = /^[a-zA-Z0-9]+@[a-z]+(\.[a-z]+)+$/g;
    let valid = regexp.test(email);

    if(!valid){
        console.log('Valid')
    }else{
        console.log('Invalid')
    }
}