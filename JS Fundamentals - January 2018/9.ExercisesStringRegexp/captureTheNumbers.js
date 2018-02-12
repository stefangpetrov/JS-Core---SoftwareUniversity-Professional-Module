function solve(arr) {

    let regex = /\d+/g;
    arr = arr.reduce((a,b) => a+b);
    console.log(arr.match(regex).join(' '));
    
}

solve(["The300 What is that?",
    "I think it’s the 3rd movie.",
    "Lets watch it at 22:45"]
);