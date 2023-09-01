function solution(binomial) {
    var answer = 0;

    const [a, op, b] = binomial.split(' ');
    // answer = eval(`${a} ${op} ${b}`); eval()은 비사용 권장

    const clac = {
        '+' : (a, b) => a+b,
        '-' : (a, b) => a-b,
        '*' : (a, b) => a*b,
    }

    answer = clac[op](+a, +b);

    return answer;
}