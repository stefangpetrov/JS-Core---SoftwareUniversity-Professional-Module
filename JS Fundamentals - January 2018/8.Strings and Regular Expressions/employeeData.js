function parseData(input) {



    let regex = /^([A-Z][a-zA-Z]*) - ([1-9]\d*) - ([A-Za-z0-9 \-]+)$/;
    // let result = regex.exec(input);
    let result = [];
    for (let employee of input) {
        let match = regex.exec(employee);

        if(match!== null){
            result.push(`Name: ${match[1]}\nPosition: ${match[3]}\nSalary: ${match[2]}`);
        }
    }

    console.log(result.join('\n'));
}

parseData(['Isacc - 1000 - CEO', 'Ivan - 500 - Employee', 'Peter - 500 - Employee']);