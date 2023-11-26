/*
    [콜라츠 추측]
    어떤 자연수 n에 대해서 다음과 같은 규칙을 따라 반복해서 계산하면, 언젠가는 항상 1에 도달한다는 주장
    1. n이 짝수라면, n을 2로 나눈다.
    2. n이 홀수라면, 3을 곱하고 1을 더한다.
*/

function solution(num) {
    let count = 0;

    while(num!==1 && ++count<500) {
        num = (num%2===0) ? num/2 : num*3+1;
    }

    return num === 1 ? count : -1;
}