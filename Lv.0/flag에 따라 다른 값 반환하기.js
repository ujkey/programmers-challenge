/*
    flag
        - true : a + b
        - false : a - b
*/

function solution(a, b, flag) {
    // flag : boolean
    var answer = 0;
    answer = flag ? (a + b) : (a - b);

    return answer;
}