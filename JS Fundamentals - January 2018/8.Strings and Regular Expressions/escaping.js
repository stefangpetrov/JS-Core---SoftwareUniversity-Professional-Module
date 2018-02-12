function solve(elements) {

    let html = '<ul>\n';
    for (let el of elements) {
        el = el.replace(/&/g, '&amp;');
        el = el.replace(/</g, '&lt;');
        el = el.replace(/>/g, '&gt;');
        el = el.replace(/"/g, '&quot;');

        html+=`  <li>${el}</li>\n`;
    }

    html+='</ul>';
    console.log(html);

}


