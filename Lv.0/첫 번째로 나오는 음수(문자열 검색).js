/*
    문자열 검색 : 조건에 맞는 것 중 가장 먼저 찾은 멤버의 index/값을 리턴

    1. Array.prototype.find()
        - 주어진 판별 함수를 만족하는 첫 번째 요소의 '값'을 반환 / undefined

    2. Array.prototype.findIndex()
        - 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 '인덱스'를 반환 / -1

    3. String.prototype.indexOf(searchValue[, formIndex])
        - String 객체에서 주어진 값과 일치하는 첫 번째 '인덱스'를 반환 / -1
        - 순방향 탐색
        - searchValue: 찾으려는 문자열
        - fromIndex: 문자열에서 찾기 시작하는 위치를 나타내는 인덱스 값

    4. String.prototype.lastIndexOf(searchValue[, fromIndex])
        - 주어진 값과 일치하는 부분을 fromIndex로부터 역순으로 탐색하여, 최초로 마주치는 인덱스를 반환 / -1
        - 역방향 탐색

    reference
        - https://velog.io/@zwonlala/%EB%B0%B0%EC%97%B4-%EB%82%B4%EC%9E%A5%ED%95%A8%EC%88%98-indexOf-findIndex-find
*/

function solution(num_list) {
    var answer = 0;
    answer = num_list.findIndex((num) => num < 0);

    return answer;
}