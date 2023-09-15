function solution(ineq, eq, n, m) {
    let answer = 0;

    const operations = {
        '>=': (a, b) => a>=b,
        '<=': (a, b) => a<=b,
        '>!': (a, b) => a>b,
        '<!': (a, b) => a<b,
    }
    answer= Number(operations[ineq+eq](n, m));

    return answer;
}