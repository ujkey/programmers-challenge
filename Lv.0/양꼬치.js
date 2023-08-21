/*
    양꼬치(n 인분)
        - 1인분 : 12000원
    음료수(k 개)
        - 2000원
*/

function solution(n, k) {
    let answer = 0;

    const food = 12000 * n;
    const drink = 2000 * (k - Math.floor(n/10));
    answer = food + drink;

    return answer;
}