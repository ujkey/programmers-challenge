/*
    1. String.prototype.split()
        - 구분자를 이용하여 여러 개의 문자열로 나눈다
        - 맨앞과 맨뒤에 있는 구분자는 분할하지 않는다
        - 연속된 구분자를 한 번만 구분한다
    2. \s+
        - 하나 이상 space, tab 있는 경우의 정규표현식
*/

function solution(my_string) {
    var answer = [];
    answer.push(...my_string.trim().split(/\s+/));

    return answer;
}