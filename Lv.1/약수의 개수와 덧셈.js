const getDivisor = (n) => {
    let count = 0;
    for(let i = 1; i <= n; i++) (n % i == 0) && ++count;
    return count;
}

function solution_A(left, right) {
    var answer = 0;
    for(let i=left; i<=right; i++) getDivisor(i)%2===0 ? answer+=i : answer-=i;
    return answer;
}

// [refactoring] 제곱근이 정수면 약수의 개수가 홀수이다
function solution_B(left, right) {
    var answer = 0;
    for(let i=left; i<=right; i++) {
        Number.isInteger(Math.sqrt(i)) ? answer-=i : answer+=i;
    }
    return answer;
}