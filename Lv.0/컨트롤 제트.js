/*
    1. Array.prototype.forEach(callbackFn)
        - 각 배열 요소에 대해 제공된 함수를 한 번씩 실행
*/

function solution(s) {
    /*
        var answer = 0;

        answer = s.split(' ').reduce((acc, cur, i) => {
            if(i > 0 && cur == 'Z') {
                acc-=(s.split(' ')[i-1]*1);
            } else {
                acc+=(cur*1);
            }
            return acc;
        }, 0);

        return answer;
    */

    // 스택으로 리팩토링
    var answer = [];

    s.split(' ').forEach((target) => {
        if(target === 'Z') {
            answer.pop(); //"Z"가 나오면 바로 전에 더했던 숫자를 뺀다
        } else {
            answer.push(+target);
        }
    })

    return answer.length ? answer.reduce((acc, cur) => acc + cur, 0) : 0;
}