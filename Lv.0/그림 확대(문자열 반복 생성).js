/*
    [ 문자열 반복 생성 ]
    String.prototype.repeat(count)
        - 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환
*/

function solution(picture, k) {
    var answer = [];

    const expanded = picture.map((v, _) => [...v].map((str, _) => str.repeat(k)).join(''));
    [...expanded].map((v) => answer.push(...Array(k).fill(v)));

    return answer;
}