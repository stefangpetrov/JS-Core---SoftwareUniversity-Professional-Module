function getDNA(num) {

    let sequence = 'ATCGTTAGGG'.split('');
    let index = 0;

    for (let i = 0; i < num; i++) {
        if (i % 4 === 0) {
            console.log(`**${sequence[index]}${sequence[index + 1]}** `)
        } else if (i % 2 === 0) {
            console.log(`${sequence[index]}----${sequence[index +1]}`)
        } else {
            console.log(`*${sequence[index]}--${sequence[index +1 ]}*`);
        }
        index+=2;
        if(index>=sequence.length){
            index=0;
        }
    }




}

