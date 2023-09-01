function solution(a, b) {
    var answer = 0;

    // const op1 = `${a}${b}`;
    const op1 = parseInt(a+''+b+''); //str+'' : string 변환
    const op2 = 2*a*b;

    answer = Math.max(op1, op2) || op1;

    return answer;
}