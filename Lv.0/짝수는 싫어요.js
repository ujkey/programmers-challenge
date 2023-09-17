function solution(n) {
    var answer = [];

    // answer = Array.from({length: Math.round(n/2)}, (_, i) => (2*i)+1);
    for(let i = 1; i <= n; i+=2) answer.push(i);

    return answer;
}