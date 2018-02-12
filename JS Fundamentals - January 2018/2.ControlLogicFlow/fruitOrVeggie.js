function fruitOrVeggie(thing) {

    switch (thing){
        case "banana":
        case "apple":
        case "kiwi":
        case "lemon":
        case "grapes":
        case "peach":
        case "cherry":
            console.log("fruit");
            break;
        case "cucumber":
        case "tomato":
        case "pepper":
        case "onion":
        case "garlic":
        case "parsley":
            console.log("vegetable");
            break;
        default:
            console.log("unknown");
    }

}

