/*
    slice : 피자 조각 수 - 2~10 가능
    n : 피자를 먹는 사람 수
    n명의 사람이 최소 한 조각 이상 피자를 먹으려면 몇 판의 피자가 필요한가
*/

function solution(slice, n) {
    var answer = 0;
    answer = n % slice == 0 ? Math.floor(n/slice) : Math.floor(n/slice) + 1;
    return answer;
}