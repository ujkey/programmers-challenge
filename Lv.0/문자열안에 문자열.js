/*
    Array.prototype.includes()
        - 배열이 특정 요소를 포함하고 있는지 판별
*/
function solution(str1, str2) {
    var answer = 0;
    answer = str1.includes(str2) ? 1 : 2;
    return answer;
}