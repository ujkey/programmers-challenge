/*
    1. Math.floor()
        - 주어진 수 이하의 가장 큰 정수(소수점 이하를 버림하여 정수를 반환)
*/
function solution(num1, num2) {
    var answer = 0;
    answer = Math.floor(num1 / num2);
    return answer;
}