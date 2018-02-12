function template(arr) {

    let result = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" + "\n";
    result += "<quiz>\n";



    for (let i = 0; i < arr.length; i+=2) {
        let question = arr[i].toString();
        let answer = arr[i + 1].toString();

        qAndA(question, answer);


    }

    function qAndA(question, answer) {

        result += "  <question>" + "\n";

        result += "    " + question + "\n";

        result += "  </question>\n";

        result += "  <answer>\n";

        result += "    " + answer + "\n";

        result += "  </answer>\n"
    }


    result += "</quiz>";


    console.log(result);
}


template(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"]
);