/*
    할인 조건
    10만원 이상 : 5%
    30만원 이상 : 10%
    50만원 이상 : 20%

    price : 구매한 옷의 가격
*/

function solution(price) {
    let answer = 0;

    if(price >= 100000 && price < 300000) {
        answer = price * 0.95;
    } else if(price >= 300000 && price < 500000) {
        answer = price * 0.9;
    } else if(price >= 500000) {
        answer = price * 0.8;
    } else {
        answer = price;
    }

    return Math.floor(answer); //지불해야할 금액(소수점 이하를 버린 정수)
}