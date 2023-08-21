/*
    condition : c < a + b
    조건 만족 : 1
    조건 불충분 : 2

    1. Math.max()
         - 입력값으로 받은 0개 이상의 숫자 중 가장 큰 숫자를 반환
         - spread 연산자를 사용하여 배열의 요소들을 분해하여 전달
*/

function solution(sides) {
    // sides : number[]
    let answer = 0;

    const c = Math.max(...sides); //가장 긴 변의 길이
    const sum = sides.reduce((a, b) => a + b, 0) - c; //다른 두변의 길이의 합
    answer = (c < sum) ? 1 : 2;

    return answer;
}