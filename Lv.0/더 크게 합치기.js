function solution(a, b) {
    var answer = 0;

    /*
        const forward = String(a) + b;
        const reverse = String(b) + a;
        answer = forward == reverse ? +forward : Math.max(+forward, +reverse);
    */

    answer = Math.max(Number(`${a}${b}`), Number(`${b}${a}`));

    return answer;
}