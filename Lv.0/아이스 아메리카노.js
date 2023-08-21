/*
    아이스 아메리카노 : 5500원
    머쓱이의 예산(money)
*/

function solution(money) {
    var answer = [];

    const coffee = Math.floor(money / 5500);
    const leftMoney = money - (5500 * coffee);

    answer.push(coffee, leftMoney)

    return answer; //[최대로 마실 수 있는 아메리카노의 잔수, 남는 돈]
}