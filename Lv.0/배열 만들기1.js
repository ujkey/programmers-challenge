/*
    n이하의 정수에서
    k의 배수를
    오름차순으로 정렬한 배열
*/

function solution(n, k) {
    var answer = [];
    for(let i=k; i<=n; i+=k) {
        answer.push(i);
    }

    return answer;
}