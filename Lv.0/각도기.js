/*
    angle
    0~90 예각: 1
    90 직각: 2
    90~180 둔각: 3
    180 평각: 4
*/
function solution(angle) {
    var answer = 0;

    if(0 < angle && angle < 90) {
        answer = 1;
    } else if(angle === 90) {
        answer = 2
    } else if(90 < angle && angle < 180) {
        answer = 3
    } else {
        answer = 4;
    }

    return answer;
}