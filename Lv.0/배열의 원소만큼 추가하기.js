/*
    1. 문자열 배열을 숫자 배열로 전환하기
        - string[] --> number[]
        - strArr.map(Number);
    2. 배열 생성 후 값 채우기
        - Array(length).fill(value);
*/

function solution(arr) {
    let answer = [];
    answer = arr.reduce((acc, cur) => [...acc, ...new Array(cur).fill(cur)], [])

    return answer;
}