function solution(s) {
    var answer = [];

    /*
        const sorted = [...s].sort();
        answer = sorted.filter((v, i) => (v !== sorted[i-1] && v !== sorted[i+1])).join('');
    */

    for(let v of s) {
        if(s.indexOf(v) === s.lastIndexOf(v)) answer.push(v);
    }
    answer = answer.sort().join('');

    return answer;
}