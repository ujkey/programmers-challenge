/*
    등차수열
        - 첫째항부터 같은 수씩 더해지는 수열
        - 공차 : 등차수열에서 이우산 두 항의 변화량
        - 등차수열의 일반항 구하기
            - a: 첫째항, d: 공차
            - a + (n-1)d
*/

function solution(a, d, included) {
    // a : 첫째항, d: 공차
    var answer = 0;
    included.map((v, idx) => answer+= v && a+(idx)*d );

    return answer;
}