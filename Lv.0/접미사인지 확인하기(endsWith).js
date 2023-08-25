/*
    1. String.prototype.endsWith(searchString)
        - 어떤 문자열에서 특정 문자열로 끝나는지를 확인
*/

function solution(my_string, is_suffix) {
    var answer = 0;
    // answer = my_string.slice(-is_suffix.length) == is_suffix ? 1 : 0;
    answer = my_string.endsWith(is_suffix) ? 1 : 0;

    return answer;
}