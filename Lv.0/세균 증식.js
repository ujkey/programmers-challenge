/*
    1. 왼쪽 시프트 연산자(<<)
        - 4 << 2
        - 0000 0100 --> 0000 1000 --> 0001 0000(2비트 이동)
        - 4 * 2 * 2
*/

function solution(n, t) {
    // return n * Math.pow(2, t);
    return n << t;
}