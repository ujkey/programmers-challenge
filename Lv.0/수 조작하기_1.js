const operations = {
    w: (n) => n+1,
    s: (n) => n-1,
    d: (n) => n+10,
    a: (n) => n-10,
}

function solution(n, control) {
    var answer = 0;
    answer = [...control].reduce((acc, cur) => operations[cur](acc), n);

    return answer;
}