function solve(document) {


        let svgRegex = /.*<svg>(.*)<\/svg>.*/g

        let match = svgRegex.exec(document);

        let sumAllVotes = [];
        let votes = 0;


        if(match === null){
            console.log("No survey found");
        } else{

            document = match[1].toString();

            let firstCatRegex = /<cat><text>.*\[(.+)\]<\/text><\/cat>/g;
            match = firstCatRegex.exec(document);

            if(match === null){
                console.log("Invalid format");
            }
            else{

                let label = match[1];


                let secondCatRegex = /(?:<val>(\d+)<\/val>([0-9]+))+/g;
                match = secondCatRegex.exec(document);



                if(match === null){
                    console.log("Invalid Format");
                }
                else{


                    let currentVotes = Number(match[2]);
                    let currentValue = Number(match[1]);

                    while(match != null){
                        currentVotes = Number(match[2]);
                        currentValue = Number(match[1]);

                        //console.log(match);


                        if(currentValue >= 1 && currentValue <= 10 && currentVotes >= 1){
                            //console.log("vlqzoh");
                            sumAllVotes.push(currentVotes * currentValue);
                            //console.log(sumAllVotes);
                            votes+= currentVotes;

                        }

                        match = secondCatRegex.exec(document);
                    }

                    if(sumAllVotes.length <1){
                        console.log("Invalid format");
                    }else {
                        sumAllVotes = sumAllVotes.reduce((a, b) => a + b);

                        //console.log(sumAllVotes);
                        //console.log(votes);

                        let finalNumber = (sumAllVotes / votes).toFixed(2).toString();


                        console.log(`${label}: ${(sumAllVotes / votes).toFixed(2) * 1}`)
                    }
                }




            }

        }


}
solve('<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>Sea</val>0</g><g><val>Sea</val>1</g><g><val>Sea</val>3</g><g><val>Sea</val>10</g><g><val>Sea</val>7</g></cat></svg><p>Some more random text</p>');