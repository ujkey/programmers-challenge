/*
    문자열 치환
    1. String.prototype.replace(pattern, replacement)
        - 첫 번째 항목만 치환

    2. 모든 문자열 치환하기
        - 정규식 사용하기 : /m/g
        - JS에는 replaceAll이 없음
*/

function solution(rny_string) {
    var answer = '';

    const regex = /m/g;
    answer = rny_string.replace(regex, 'rn');

    return answer;
}