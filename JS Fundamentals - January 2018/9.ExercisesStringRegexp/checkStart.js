function solve(str, check) {


    console.log(str.substring(0, check.length) === check);
}

solve("How have you been?",
    "How"
);