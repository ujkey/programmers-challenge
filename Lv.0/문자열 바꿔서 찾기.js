/*
    1. myString A <--> B
    2. pat이 myString의 부분 문자열인가?
*/

function solution(myString, pat) {
    var answer = 0;
    answer = [...myString].map((item) => item === 'A' ? 'B' : 'A').join('').includes(pat) ? 1 : 0;

    return answer;
}