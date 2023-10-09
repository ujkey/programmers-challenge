function solution(n) {
    let answer = 0;

    for(let i=1; i<=10; i++) {
        if(factorial(i)<=n) {
            answer=i;
            continue;
        } else {
            break;
        }
    }
    return answer;
}

function factorial(n) {
    return (n !== 1) ? n*factorial(n-1) : 1;
}