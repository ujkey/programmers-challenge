/*
    1. Math.sqrt(x)
        - 숫자의 제곱근을 반환
    2. Number.isInteger(value)
        - 전달된 값이 정수인지 여부를 확인
*/

function solution(n) {
    var answer = 0;

    // answer = n%Math.sqrt(n) == 0 ? 1 : 2;
    answer = Number.isInteger(Math.sqrt(n)) ? 1 : 2;

    return answer;
}