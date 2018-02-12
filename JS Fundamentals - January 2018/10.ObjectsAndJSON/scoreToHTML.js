function solve(str) {


    let result = "<table>\n";

    let scores = JSON.parse(str);

    result += '  <tr><th>name</th><th>score</th></tr>\n';

    for (let score of scores) {

        result += '  <tr>';

        result += `<td>${htmlEscape(score.name)}</td>`;
        result += `<td>${score.score}</td>`;
        result += '</tr>\n';

    }

    result += "</table>";

    console.log(result);

    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}