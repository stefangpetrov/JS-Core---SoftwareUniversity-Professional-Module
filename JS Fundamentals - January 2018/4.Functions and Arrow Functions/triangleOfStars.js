function getTriangle(n) {

    for(let i = 1; i<=n; i++){
        console.log("*".repeat(i))

    }
    for (let i = n - 1; i >= 1; i--){
        console.log("*".repeat(i));
    }

}