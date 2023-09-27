function solution(quiz) {
    var answer = [];

    const clac = {
        '+' : (a, b) => a+b,
        '-' : (a, b) => a-b,
    }

    quiz.map((v) => {
        const [a, op, b, equal, c] = v.split(' ');
        answer.push(clac[op](+a, +b) === +c ? "O" : "X");
    })

    return answer;
}