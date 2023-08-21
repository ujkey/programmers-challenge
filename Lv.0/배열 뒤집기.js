/*
    1. Array.prototype.unshift()
        - 새로운 요소를 배열의 맨 앞쪽에 추가
*/
function solution(num_list) {
    // num_list : number[]
    var answer = [];
    num_list.map(num => answer.unshift(num))

    return answer;
}