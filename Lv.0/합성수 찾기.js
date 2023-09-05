/*
    합성수 : 약수의 개수가 세 개 이상인 수
*/

function solution(n) {
    let answer = new Set();

    for(let i=1; i<=n; i++) {
        for(let j=2; j<i; j++) {
            i%j === 0 && answer.add(i);
        }
    }

    return answer.size;
}