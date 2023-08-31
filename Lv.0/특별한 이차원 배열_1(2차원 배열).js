/*
    2차원 배열 만들기
    Array.from({length: n}, (v, i) => Array(n).fill(0));
        1. 빈 배열 생성
        2. fill로 각 자리를 채우기
*/

function solution(n) {
    var answer = [];

    answer = Array.from({length: n}, (v, i) => Array(n).fill(0));
    answer.map((v, i) => answer[i][i] = 1);

    return answer;
}