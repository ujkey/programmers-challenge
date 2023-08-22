/*
    문자열 검색 : 조건에 맞는 것 중 가장 먼저 찾은 멤버의 index/값을 리턴

    1. Array.prototype.find()
        - 주어진 판별 함수를 만족하는 첫 번째 요소의 '값'을 반환 / undefined

    2. String.prototype.indexOf(searchValue)
        - String 객체에서 주어진 값과 일치하는 첫 번째 '인덱스'를 반환 / -1

    3. Array.prototype.findIndex()
        - 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 '인덱스'를 반환 / -1

    reference
        - https://velog.io/@zwonlala/%EB%B0%B0%EC%97%B4-%EB%82%B4%EC%9E%A5%ED%95%A8%EC%88%98-indexOf-findIndex-find
*/

function solution(num_list) {
    var answer = 0;
    answer = num_list.findIndex((num) => num < 0);

    return answer;
}