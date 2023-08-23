/*
    1. Math.pow(base, exponent)
        - 밑의 거듭제곱 값을 반환
*/

function solution(num_list) {
    var answer = 0;

    const mul = num_list.reduce((acc, cur) => acc*=cur, 1);
    const sum = num_list.reduce((acc, cur) => acc+=cur, 0);

    answer = mul < Math.pow(sum, 2) ? 1 : 0;
    return answer;
}