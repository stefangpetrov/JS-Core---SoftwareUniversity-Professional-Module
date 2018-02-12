function solve(arr) {


    let allEmails = [];

    for (let obj of arr) {

        let tokens = obj.split('@');

        let email = tokens[0] + '.';

        let secondTokens = tokens[1].split('.');
        //console.log(secondTokens);

        for (let obj1 of secondTokens) {

            email += obj1[0];
        }

        //console.log(email);
        allEmails.push(email);
    }


    console.log(allEmails.join(', '));

}

solve(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);