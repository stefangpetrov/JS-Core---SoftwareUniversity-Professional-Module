function triangleArea(a, b, c) {

    let half = (a+b+c)/2;

    let s = Math.sqrt(half *(half - a) * (half - b) * (half - c));

    console.log(s);
}