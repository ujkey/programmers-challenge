/*
    1. Array.prototype.splice(start[, deleteCount[, item1[, item2[, ...]]]])
        - 배열의 기존 요소를 삭제/교체/새 요소를 추가하여 배열의 내용을 변경
        - Array.prototype.slice()와의 차이
            - slice: 원본 배열은 수정되지 않음
            - splice : 원본 배열 자체를 수정
*/

function solution(num_list) {
    var answer = [];
    answer = num_list.sort((a, b) => a-b).slice(0, 5); //ASC
    return answer;
}