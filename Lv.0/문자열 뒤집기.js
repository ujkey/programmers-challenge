/*
    문자열 반전
    1. String.protype.split(substring)
        - 문자열을 부분 문자열(substring)로 구분해 문자열 객체를 여러 개의 문자열로 이루어진 배열로 분할
    2. Array.protype.reverse()
        - 배열을 반전
    3. Array.protype.join()
        - 배열의 모든 요소를 문자열로 결합
*/

function solution(my_string) {
    // my_string: string
    var answer = '';
    answer = my_string.split('').reverse().join('');

    return answer;
}