function solution(n, arr=[]) {
    /*
    var answer = [];

    while(n!==1) {
        answer.push(n);
        n = n%2==0 ? n/2 : (3*n)+1;
    }

    answer.push(1);
    return answer;
    */

    // 재귀로 리팩토링
    arr.push(n);

    if(n === 1) return arr;
    if(n%2 === 0) return solution(n/2, arr)
    return solution(3 * n + 1, arr);
}