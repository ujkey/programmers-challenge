/*
    일곱 조각으로 컷팅
    n명의 사람이 피자를 한조각 이상 먹으려면 몇판의 피자가 필요한가
*/

function solution(n) {
    var answer = 0;

    answer = n % 7 == 0 ?  Math.floor(n/7) : Math.floor(n/7) + 1;

    return answer;
}