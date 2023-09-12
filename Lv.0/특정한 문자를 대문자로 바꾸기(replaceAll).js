/*
    1. String.prototype.replaceAll(pattern, replacement)
        - pattern의 모든 일치 항목이 replacement로 대체된 새 문자열을 반환
        - pattern은 문자열 또는 RegExp일 수 있음
        - replacement는 콜백일 수 있음
*/

function solution(my_string, alp) {
    var answer = '';
    // answer = [...my_string].map((str) => str === alp ? str.toUpperCase() : str).join('');
    answer = my_string.replaceAll(alp, alp.toUpperCase());
    return answer;
}