function composeTag(arr) {

    let [location, altText] = arr;

    let result = `<img src="${location}" alt="${altText}">`;
    console.log(result);
}