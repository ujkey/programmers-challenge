/*
    최소한의 병력으로 개미군단 꾸리기
        - 장군개미: 5의 공격력
        - 병정개미: 3의 공격력
        - 일개미: 1의 공격력
*/

function solution(hp) {
    var answer = 0;

    // [5, 3, 1].reduce((acc, cur) => {
    //     answer += Math.floor(acc/cur);
    //     if(acc%cur < cur) return acc = acc%cur;
    // }, hp);

    const 장군개미 = Math.floor(hp/5);
    const 병정개미 = Math.floor((hp - (장군개미*5))/3);
    const 일개미 = hp - ((장군개미*5) + (병정개미*3));

    answer = 장군개미 + 병정개미 + 일개미;

    return answer;
}