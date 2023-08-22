/*
    1. 문자열 -> 문자 배열 : 구조분해할당
    2. String.prototype.repeat()
        - 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환
*/

function solution(my_string, n) {
    var answer = '';

    [...my_string].map((str => answer += str.repeat(n)))

    return answer;
}