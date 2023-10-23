function solution(n) {
    /*
        const arr = Array.from({length: 100+n}, (_, idx) => idx+1).filter((v) => v%3!==0 && (v+'').indexOf('3') === -1);
        return arr[n-1];
    */

    let answer = 0;

    for(let i=1; i<=n; i++) {
        answer++;
        while(answer%3===0 || answer.toString().includes('3')) {
            answer++;
        }
    }

    return answer;
}