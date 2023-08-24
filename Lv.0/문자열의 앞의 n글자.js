/*
    문자열 자르기 비교
    1. String.prototype.substr(start[, length])
        - start 부터 length 만큼 문자들을 반환
        - 더이상 사용하지 않기를 권고함(제거 예정)

    2. String.prototype.substring(indexStart[, indexEnd])
        - indexStart부터 indexEnd 까지 문자열의 부분 문자열을 반환

    3. Array.prototype.slice(begin[, end])
        - 배열의 begin 부터 end 까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환
        - 문자열 뒤에서부터 자르기에 효율적(-1 * begin)
*/

function solution(my_string, n) {
    var answer = '';
    answer = my_string.substring(0, n);

    return answer;
}