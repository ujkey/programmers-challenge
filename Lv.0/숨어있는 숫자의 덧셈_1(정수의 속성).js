/*
    정수는 1로 나누었을 경우 항상 나머지가 0이 되는 속성을 가짐
*/

function solution(my_string) {
    var answer = 0;
    const arr = my_string.split('');
    arr.map(str => str % 1 === 0  && (answer += Number(str)));

    return answer;
}