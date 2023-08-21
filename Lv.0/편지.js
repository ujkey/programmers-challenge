/*
    글자 한자당 크기 2cm
    가로로만 적는다고 가정
    message를 적는데 필요한 최소 가로길이
*/

function solution(message) {
    var answer = 0;
    answer = message.length * 2;
    return answer;
}