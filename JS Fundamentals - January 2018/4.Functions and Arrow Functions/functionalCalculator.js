function calculator(a, b, op) {
    
    function doIt(a, b, op) {
        return op(a, b);
    }
    
    let add = function (a, b) {
        return a+b;
    }
    let substract = function (a, b) {
        return a - b;
    }

    let divide = function (a,b) {
        return a/b;
    }

    let multiply = function (a, b) {
        return a*b;
    }

    switch (op){
        case '+': return doIt(a,b,add);
        case '-': return doIt(a,b,substract);
        case '/': return doIt(a,b,divide);
        case '*': return doIt(a,b,multiply);
    }
}