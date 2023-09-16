function solution(arr) {
    var answer = arr;

    const row = answer.length; //행의 수
    const col = answer[0].length; //열의 수
    const diff = Math.abs(row-col);

    if(row > col) {
        answer.map((arr) => arr.push(...Array(diff).fill(0)));
    } else if (col > row) {
        answer.push(...Array.from({length: diff}, () => Array(col).fill(0)));
    }

    return answer;
}