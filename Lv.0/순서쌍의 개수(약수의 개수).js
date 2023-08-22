// 약수의 개수

function solution(n) {
    var answer = 0;
    for(let i = 1; i <= n; i++) {
        (n % i == 0) && ++answer;
    }

    return answer; //두 숫자의 곱이 n인 자연수 순서쌍의 개수
}