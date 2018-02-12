function solve(strArr) {




    let objects = JSON.parse(strArr);

    let tableHeadings = Object.keys(objects[0]);

    let result = "<table>\n  <tr>";
    for (let heading of tableHeadings) {
        result+=`<th>${heading}</th>`;
    }
    result+='</tr>\n';

    for (let obj of objects) {
        let tableRows = Object.values(obj);
        result+='  <tr>';
        for (let row of tableRows) {
            result+=`<td>${htmlEscape(row.toString())}</td>`;
        }
        result+='</tr>\n';

    }

    result += "</table>";

    console.log(result);

    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}