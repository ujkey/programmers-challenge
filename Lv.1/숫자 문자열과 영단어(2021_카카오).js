function solution(s) {
    let answer = '';
    let word = ''

    const table = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    s.split('').forEach((v) => {
        if(Number.isInteger(v*1)) {
            answer+=v;
        } else {
            word+=v;
            if(table.indexOf(word)>=0) {
                answer += table.indexOf(word);
                word = '';
            }
        }
    })

    return Number(answer);
}